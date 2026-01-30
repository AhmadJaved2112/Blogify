import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import SingleBlog from './pages/SingleBlog'
import BlogsData from './utils/BlogsData.json'


import { BlogContextProvider } from './context/BlogContext'


const AppWithProvider = () => (
  <BlogContextProvider>
    <App />
  </BlogContextProvider>
)


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppWithProvider />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'blog',
        element: <Blogs />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'blog/:id',
        element: <SingleBlog />,
        loader: ({ params }) => {
          const blogId = parseInt(params.id);
          const blog = BlogsData.find(item => item.id === blogId);
          
          if (blog) {
            return blog;
          } else {
            throw new Response("Blog not found", { 
              status: 404,
              statusText: "The blog you're looking for doesn't exist"
            });
          }
        },

        errorElement: <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-red-600 mb-4">Oops!</h1>
            <p className="text-gray-700 mb-6">Blog not found or an error occurred.</p>
            <a href="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
              Back to Blogs
            </a>
          </div>
        </div>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)