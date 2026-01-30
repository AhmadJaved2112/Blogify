import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { 
  FaBars, 
  FaTimes,
  FaSignInAlt,
} from "react-icons/fa"

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const location = useLocation()


    useEffect(() => {
        setIsOpenMenu(false)
    }, [location.pathname])

    const navLink = [
        { path: '/', element: 'Home'},
        { path: '/about', element: 'About'},
        { path: '/blog', element: 'Blogs'},
        { path: '/services', element: 'Services'},
        { path: '/contact', element: 'Contact'}
    ]

    const toggleMenu = () => setIsOpenMenu(!isOpenMenu)

    return (
        <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">

                    <Link 
                        to="/" 
                        className="text-2xl md:text-3xl font-bold flex items-center gap-2 hover:text-orange-400 transition-colors"
                    >
                        Blogify
                    </Link>


                    <nav className="hidden md:flex items-center space-x-3 lg:space-x-8">
                        {navLink.map((item, index) => (
                            <Link 
                                key={index}
                                to={item.path}
                                className="text-lgflex items-center gap-2 px-3 py-2 rounded-lg hover:text-orange-400 transition-all duration-300"
                            >
                                <span className="font-medium">{item.element}</span>
                            </Link>
                        ))}
                    </nav>


                    <div className="hidden md:block">
                        <button className="text-lg flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                            <FaSignInAlt />
                            Login
                        </button>
                    </div>


                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-2xl hover:text-orange-500 transition-colors p-2"
                        aria-label={isOpenMenu ? "Close menu" : "Open menu"}
                    >
                        {isOpenMenu ? <FaTimes /> : <FaBars />}
                    </button>
                </div>


                {isOpenMenu && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4 animate-fadeIn">
                        <nav className="flex flex-col space-y-3">
                            {navLink.map((item, index) => (
                                <Link 
                                    key={index}
                                    to={item.path}
                                    onClick={() => setIsOpenMenu(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                                        location.pathname === item.path 
                                            ? 'bg-orange-500 text-white' 
                                            : 'hover:bg-gray-800 hover:text-orange-400'
                                    }`}
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="font-medium">{item.element}</span>
                                </Link>
                            ))}
                            

                            <button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mt-4 transition-all duration-300">
                                <FaSignInAlt />
                                Login
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header