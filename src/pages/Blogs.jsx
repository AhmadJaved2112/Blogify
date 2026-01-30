import CategoryBtns from '../components/CategoryBtns'
import BlogsLayout from '../components/BlogsLayout'
import Pagination from '../components/Pagination'

const Blogs = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-3">
        <CategoryBtns />
        <BlogsLayout />
        <Pagination />
      </div>
    </div>
  )
}

export default Blogs
