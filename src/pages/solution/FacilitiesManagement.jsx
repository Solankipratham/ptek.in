import { FaArrowRight, FaHome, FaClipboardList, FaSearchDollar, FaUsers, FaTools, FaBuilding, FaRobot, FaCloud } from 'react-icons/fa';
import HeroImg from "/all-services-rectruiment-and-academy-min.jpg"
import facility from "/FacilityManagement.jpg"
import { Link } from "react-router-dom";
const FacilitiesManagement = () => {
  return (
    <main className="min-h-screen w-full overflow-y-auto relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 space-y-6 py-12 md:py-24">
            <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Multifaceted Facility <span className="text-blue-600"> Management </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Software Development Whether you need a whole new Facility Management Software (FMS) solution developed from scratch or custom features integrated within your existing solution to
              facilitate FM operational tasks more efficiently, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/contactsection"
                className="bg-black hover:bg-gray-800 text-white font-medium rounded-lg px-8 py-3.5 text-center transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project →
              </a>
            </div>
          </div>
           {/* Right side  */}
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-2xl  overflow-hidden ">
                      <img
                        src={HeroImg}
                        alt="Autodesk solutions in action showing CAD and BIM workflows"
                      />
                    </div>
                  </div>
                </div>
              </div>


      {/* Features Section */}
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold">Custom Facility Management Software Solutions</h1>
          <p className="text-gray-700 max-w-4xl mx-auto">
            PTEK develops innovative facility management software solutions to help organizations streamline maintenance operations, track assets, and enhance building management processes for greater efficiency and reduced costs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-shrink-0">
            <img
              src={facility}  // Replace with your image path or URL
              alt="Descriptive alt text"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <FaHome className="text-blue-500 text-4xl" />
              <div>
                <h2 className="text-xl font-bold">Building Maintenance</h2>
                <p className="text-gray-700">
                  Manage building repairs, inspections, and maintenance schedules efficiently to ensure optimal facility conditions and reduced downtime.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaClipboardList className="text-blue-500 text-4xl" />
              <div>
                <h2 className="text-xl font-bold">Work Order Management</h2>
                <p className="text-gray-700">
                  Automate work order creation, assignment, and tracking to streamline tasks and improve response times for maintenance requests.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaSearchDollar className="text-blue-500 text-4xl" />
              <div>
                <h2 className="text-xl font-bold">Asset Tracking</h2>
                <p className="text-gray-700">
                  Monitor equipment and asset usage in real-time to optimize resource allocation and reduce operational costs.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaUsers className="text-blue-500 text-4xl" />
              <div>
                <h2 className="text-xl font-bold">Staff Management</h2>
                <p className="text-gray-700">
                  Coordinate and manage facility staff, contractors, and vendors efficiently to ensure smooth operations and accountability.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors">
          Develop Facility Management Solutions
        </button>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 px-6 max-w-7xl mx-auto">
        {[
          {
            icon: <FaTools className="text-blue-500 text-4xl mx-auto mb-4" />,
            title: "Computer-Aided Facility Management (CAFM) Software",
            description: "We develop CAFM software that allows for the planning, execution, and monitoring of all activities within the building lifecycle before, during, and after the equipment maintenance phase."
          },
          {
            icon: <FaBuilding className="text-blue-500 text-4xl mx-auto mb-4" />,
            title: "Integrated Workplace Management Systems (IWMS)",
            description: "We develop customizable IWMS software to help commercial, residential, educational, and government facility managers optimize property management processes."
          },
          {
            icon: <FaRobot className="text-blue-500 text-4xl mx-auto mb-4" />,
            title: "Machine Learning and AI Technologies",
            description: "Integrate machine learning and AI technologies into the best facility management software to enhance capabilities, including predictive maintenance schedules and energy optimization."
          },
          {
            icon: <FaClipboardList className="text-blue-500 text-4xl mx-auto mb-4" />,
            title: "Computerized Maintenance Management Systems (CMMS)",
            description: "Focused on asset tracking and scheduling, we program CMMS solutions combined with Enterprise Asset Management (EAM) features to monitor various assets."
          },
          {
            icon: <FaHome className="text-blue-500 text-4xl mx-auto mb-4" />,
            title: "Integrated Central Reservation Systems (CRS)",
            description: "We prepare CRS software for direct booking, room inventory, check-in/check-out for part management, room access control, confirmation/automation, and more."
          },
          {
            icon: <FaCloud className="text-blue-500 text-4xl mx-auto mb-4" />,
            title: "Cloud-based Platform",
            description: "Cloud-based platform offers robust data security measures, regular updates, and streamlined workflows for improved collaboration across facilities management teams."
          }
        ].map((solution, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition-transform hover:shadow-xl"
          >
            {solution.icon}
            <h2 className="text-xl font-semibold text-black mb-4">{solution.title}</h2>
            <p className="text-black">{solution.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-black text-white mb-4 font-semibold rounded-lg shadow-md transition duration-300 hover:bg-gray-800">
          Manage Your Facilities with Ease
        </button>
      </div>
    </main>
  );
};

export default FacilitiesManagement;