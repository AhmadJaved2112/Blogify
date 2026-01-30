import { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import PopularBlogs from '../components/PopularBlogs'
import { Link } from 'react-router-dom';

const BlogsLayout = () => {
  const { currentBlogs, activeCategory, filteredCategory } = useContext(BlogContext);

  return (
    <div className="flex flex-col lg:flex-row gap-12 min-h-screen py-4 md:py-8">

      <div className="lg:w-3/4">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            {activeCategory === "All" ? "Latest Blogs" : `${activeCategory} Blogs`}
          </h1>
          <p className="text-gray-600 text-lg">
            {activeCategory === "All"
              ? "Discover insightful articles and stories"
              : `Showing ${activeCategory.toLowerCase()} articles`
            }
          </p>
        </div>

        {currentBlogs.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No articles found</h3>
              <p className="text-gray-500 mb-6">
                No articles available in the "{activeCategory}" category yet.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-lg font-medium transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentBlogs.map((item) => (
              <Link
                to={`/blog/${item.id}`}
                key={item.id}
                className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2"
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {item.category && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.category}
                      </span>
                    </div>
                  )}

                  {item.read_time && (
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      ⏱️ {item.read_time}
                    </div>
                  )}
                </div>

                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{item.author}</p>
                      <p className="text-sm text-gray-500">Published: {item.published_date}</p>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {item.excerpt && (
                    <p className="text-gray-600 mb-5 line-clamp-3">
                      {item.excerpt}
                    </p>
                  )}

                  {item.tags && Array.isArray(item.tags) && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>


      <div className="lg:w-1/4">
        <div className="sticky top-24">
          <PopularBlogs />
        </div>
      </div>
    </div>
  )
}

export default BlogsLayout;