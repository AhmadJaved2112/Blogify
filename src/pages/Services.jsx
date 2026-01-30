import { FaPaintBrush, FaCss3Alt, FaCube, FaTachometerAlt, FaSlidersH, FaSyncAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaPaintBrush className="text-3xl" />,
      heading: "Refreshing Design",
      description: "Modern and clean designs that captivate your audience with beautiful aesthetics."
    },
    {
      id: 2,
      icon: <FaCss3Alt className="text-3xl" />,
      heading: "Based on Tailwind CSS",
      description: "Built with Tailwind CSS for rapid UI development and consistent styling."
    },
    {
      id: 3,
      icon: <FaCube className="text-3xl" />,
      heading: "300+ Components",
      description: "Extensive library of reusable components to accelerate your development."
    },
    {
      id: 4,
      icon: <FaTachometerAlt className="text-3xl" />,
      heading: "Speed Optimized",
      description: "Lightning-fast performance with optimized code and minimal dependencies."
    },
    {
      id: 5,
      icon: <FaSlidersH className="text-3xl" />,
      heading: "Fully Customizable",
      description: "Easy to customize and extend according to your specific requirements."
    },
    {
      id: 6,
      icon: <FaSyncAlt className="text-3xl" />,
      heading: "Regular Updates",
      description: "Continuous improvements and updates with new features and bug fixes."
    },
  ];

  return (
    <div>
      <div className="text-center mb-12 bg-linear-to-r from-black to-gray-900 py-20 md:py-30">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our <span className="text-orange-500">Services</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Professional solutions tailored to your needs. We deliver excellence with every project we undertake.
        </p>
      </div>
      <div className='container mx-auto py-12 md:py-20 px-4'>
        <div className='text-center mb-8'>
          <span className='text-lg text-orange-500 font-bold'>OUR SERVICES</span>
          <h1 className='text-3xl lg:text-6xl font-bold my-5'>What We Offer</h1>
          <p className='md:text-lg text-gray-600'>There are many variations or lorim Ipsum available <br /> but the majority is have suffered altration in some form</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
            >
              <div className="p-6 md:p-8">

                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-r from-blue-500 to-purple-500 text-white group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {service.icon}
                </div>


                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.heading}
                </h3>


                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
              </div>


              <div className="h-1 bg-linear-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;