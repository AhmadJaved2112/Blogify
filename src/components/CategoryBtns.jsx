import { useContext } from "react"
import { BlogContext } from "../context/BlogContext"

const CategoryBtns = () => {
  const { uniqueCategories, setActiveCategory, activeCategory } = useContext(BlogContext)

  return (
    <div className='w-full border-b-2 border-gray-200 pb-4 mb-6'>
      <div className='flex space-x-2 py-3 overflow-x-auto scrollbar-hide'>
        {
          uniqueCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                text-lg flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full transition-all duration-300
                ${activeCategory === category
                    ? 'bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg font-medium'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
              `}
            >
              {category}
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default CategoryBtns