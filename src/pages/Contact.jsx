import { FaUser, FaEnvelope, FaTag, FaComment, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-12 px-4">
      <div className="text-center mb-12 bg-black py-30 md:py-40">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact <span className="text-orange-500">Us</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>
      <div className="container mx-auto max-w-6xl">


        <div className="grid lg:grid-cols-2 gap-12">


          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>

            <form className="space-y-6">


              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <FaUser className="text-orange-500" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>


              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <FaEnvelope className="text-orange-500" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@domain.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>


              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <FaTag className="text-orange-500" />
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter your subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>


              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <FaComment className="text-orange-500" />
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                />
              </div>


              <button
                type="button"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <FaPaperPlane />
                Submit Message
              </button>
            </form>
          </div>


          <div className="space-y-8">

            <div className="bg-linear-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-blue-100">ahmadjaved2112sgc@blogify.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-blue-100">+92 323 8305118</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Office</h3>
                    <p className="text-blue-100">123 Blog Street</p>
                    <p className="text-blue-100">San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Business Hours</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="font-bold text-gray-800">9:00 AM - 6:00 PM</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-700">Saturday</span>
                  <span className="font-bold text-gray-800">10:00 AM - 4:00 PM</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Sunday</span>
                  <span className="font-bold text-gray-800">Closed</span>
                </div>
              </div>
            </div>


            <div className="bg-linear-to-r from-orange-400 to-orange-500 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
              <p className="mb-6 text-orange-100">Check out our frequently asked questions or visit our help center.</p>
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Visit Help Center
              </button>
            </div>
          </div>
        </div>


        <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">What Happens Next?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl mb-3 mx-auto">
                  1
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Submit Form</h4>
                <p className="text-gray-600 text-sm">Fill out the contact form with your details</p>
              </div>

              <div className="p-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl mb-3 mx-auto">
                  2
                </div>
                <h4 className="font-bold text-gray-800 mb-2">We Review</h4>
                <p className="text-gray-600 text-sm">Our team will review your message within 24 hours</p>
              </div>

              <div className="p-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xl mb-3 mx-auto">
                  3
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Get Response</h4>
                <p className="text-gray-600 text-sm">We'll respond to you via email or phone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;