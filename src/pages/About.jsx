import { FaCheckCircle, FaUsers, FaAward, FaHandshake } from 'react-icons/fa';
import aboutImage from '../assets/about.png';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w-400"
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Senior Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Content Manager",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400"
    },
  ];

  const features = [
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Community Driven",
      description: "Built by and for the community of passionate developers."
    },
    {
      icon: <FaAward className="text-2xl" />,
      title: "Award Winning",
      description: "Recognized for excellence in design and innovation."
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Trusted Partner",
      description: "Reliable solutions for businesses of all sizes."
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">


        <div className="text-center mb-12 bg-black py-30 md:py-40">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-orange-500 ">Blogify</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We're passionate about creating meaningful content and building tools that inspire creativity
          </p>
        </div>
      <div className="container mx-auto px-4 py-12 md:py-20">


        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Our Team"
                className="w-full h-auto object-cover"
              />

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-linear-to-r from-blue-500 to-purple-500 rounded-xl transform rotate-12"></div>
            </div>


            <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-xl p-4 w-3/4">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-500">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10K+</div>
                  <div className="text-sm text-gray-500">Users</div>
                </div>
              </div>
            </div>
          </div>


          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Story & Mission
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2020, Blogify started as a small passion project among developers who believed in the power of sharing knowledge. Today, we've grown into a platform that serves thousands of content creators and readers worldwide.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mission is simple: to create tools and platforms that make content creation accessible, enjoyable, and impactful for everyone. We believe that great ideas deserve to be shared, and we're here to make that process seamless.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Quality Content</h4>
                  <p className="text-gray-600 text-sm">Curated by experts and reviewed for accuracy</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">User First Approach</h4>
                  <p className="text-gray-600 text-sm">Designed with the user experience in mind</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Continuous Innovation</h4>
                  <p className="text-gray-600 text-sm">Always evolving with the latest technologies</p>
                </div>
              </div>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Join Our Community
            </button>
          </div>
        </div>


        <div className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Blogify?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with human creativity to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>


        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind Blogify's success
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  <div className="mt-4 flex space-x-3">
                    <button className="text-gray-400 hover:text-blue-600 transition-colors">
                      <span className="sr-only">Twitter</span>

                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Join thousands of content creators who are already sharing their stories with the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Free
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;