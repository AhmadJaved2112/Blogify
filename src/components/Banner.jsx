import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className='bg-black text-white'>
            <div className="container lg:w-[60%] mx-auto px-4 py-16 lg:py-24 flex flex-col items-center text-center">
                <h1 className="text-4xl lg:text-7xl font-bold">Welcome to Our Blogs</h1>
                <p className="text-lg text-gray-300  my-8">Start your blog today and join a community of writer and readers who are passinate to share their stories and ideas. We offer everything you need to get started, from helpful tips and tutorails.</p>
                <Link children to='/' className="text-lg flex gap-3 items-center hover:text-orange-400 transition-all duration-300">Learn more <FaArrowRight /></Link>
            </div>
        </div>
    )
}

export default Banner