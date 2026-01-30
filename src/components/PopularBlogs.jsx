import BlogsData from '../utils/BlogsData.json'

const PopularBlogs = () => {

  const latestBlogs = BlogsData.slice(0, 5);

  return (
    <div className="w-full">

      <div className="mb-10">
        <h3 className="text-4xl font-bold text-gray-800 mb-3">Popular Blogs</h3>
        <p className="text-gray-600 mt-2">Check out our newest articles</p>
      </div>


      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
        {latestBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
          >


            <div className="p-4">


              <h4 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                {blog.title}
              </h4>


              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {blog.excerpt || blog.description || "Read this interesting article..."}
              </p>


              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="font-medium">{blog.author}</span>
                <span>{blog.published_date}</span>
              </div>


              <button className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-medium transition-colors">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>


      <div className="mt-8 text-center">
        <button
          className="inline-flex items-center gap-2 bg-linear-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
        >
          View All
        </button>
      </div>
    </div>
  )
}

export default PopularBlogs