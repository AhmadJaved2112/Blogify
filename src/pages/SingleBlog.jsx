import { useLoaderData } from 'react-router-dom'

const SingleBlog = () => {
  const blog = useLoaderData()

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
        <div className='py-30 lg:py-40 bg-black mb-5'>
            <p className='text-4xl lg:text-7xl font-bold text-center text-white'>Single Blog</p>
        </div>
      <div className="container mx-auto px-4">

        <div className="mb-8">
          <a 
            href="/blog" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Blogs
          </a>
        </div>


        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

          <div className="relative h-80 md:h-96">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute top-6 left-6">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                {blog.category}
              </span>
            </div>
          </div>


          <div className="p-6 md:p-8">

            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {blog.title}
            </h1>


            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {blog.author.charAt(0)}
                </div>
                

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{blog.author}</h3>
                  <p className="text-gray-600">Author</p>
                </div>
              </div>


              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">{blog.published_date}</span>
                </div>
                
                <div className="flex items-center gap-2 mt-2 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">{blog.reading_time || blog.read_time || '5 min read'}</span>
                </div>
              </div>
            </div>


            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-4">
                {blog.content ? (

Array.isArray(blog.content) ? (
                    blog.content.map((paragraph, index) => (
                      <p key={index} className="mb-4 text-lg">
                        {paragraph}
                      </p>
                    ))
                  ) : (

                    <div className="space-y-4">
                      {blog.content.split('\n').map((paragraph, index) => (
                        paragraph.trim() && (
                          <p key={index} className="text-lg">
                            {paragraph}
                          </p>
                        )
                      ))}
                    </div>
                  )
                ) : blog.excerpt ? (

                    <div className="space-y-4">
                    <p className="text-xl text-gray-800 font-medium">{blog.excerpt}</p>
                    {blog.description && (
                      <p className="text-lg text-gray-600">{blog.description}</p>
                    )}
                  </div>
                ) : (

                    <div className="space-y-4">
                    <p className="text-lg">
                      Welcome to this insightful article. The author has shared valuable information on this topic that you'll find both informative and engaging.
                    </p>
                    <p className="text-lg">
                      Continue reading to explore more about this subject and gain deeper insights that can help you in your journey.
                    </p>
                  </div>
                )}
              </div>


              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Topics Covered</h3>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog