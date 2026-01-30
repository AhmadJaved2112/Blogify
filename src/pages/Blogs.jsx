import CategoryBtns from '../components/CategoryBtns'
import BlogsLayout from '../components/BlogsLayout'
import Pagination from '../components/Pagination'

const Blogs = () => {
  return (
    <div>
      <div className="text-center mb-12 bg-linear-to-r from-gray-900 to-black py-20 md:py-30">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our <span className="text-orange-500">Blog</span> & Insights
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Discover the latest trends, expert tips, and industry insights to help you stay ahead in the digital world.
        </p>
      </div>

      <div className="container mx-auto px-4 py-3">
        <CategoryBtns />
        <BlogsLayout />

        <Pagination />
      </div>
    </div>
  )
}

export default Blogs
