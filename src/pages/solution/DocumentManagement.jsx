import { FaFileAlt, FaFolder, FaCloud, FaLock, FaArrowRight, FaUpload } from 'react-icons/fa';
import HeroImg from "/Blockchain-min.png"
import document from "/DocumentManagement.jpg"
import { Link } from "react-router-dom";
const DocumentManagement = () => {
  return (
    <main className="min-h-screen w-full overflow-y-auto relative">
         <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-24">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left side - Text content */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                     Advanced Document
                    </span>{' '}
                   Management Solutions
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                    PTEK delivers custom document management solutions that streamline document storage, retrieval, and collaboration, ensuring efficient handling of digital and physical files. </p>
      
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <a
                      href="/contactsection"
                      className="bg-black hover:bg-red-800 text-white font-medium rounded-lg px-8 py-4 text-center transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                     Start Your Project →
                    </a>
                  </div>
                </div>
      
                {/* Right side - Autodesk showcase */}
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
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <div className="flex-shrink-0">
             <img
    src={document}  // Replace with your image path or URL
    alt="Descriptive alt text"
    className="rounded-lg shadow-lg w-full h-64 object-cover"
  />
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <FaFileAlt className="text-blue-500 text-4xl" />
                <div>
                  <h2 className="text-xl font-bold">Digital Document Storage</h2>
                  <p className="text-gray-700">
                    Implement secure and centralized storage systems to manage digital documents, reducing reliance on physical files and saving storage space.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaFolder className="text-blue-500 text-4xl" />
                <div>
                  <h2 className="text-xl font-bold">Efficient File Organization</h2>
                  <p className="text-gray-700">
                    Categorize and organize documents into user-friendly file structures, enabling faster retrieval and smoother collaboration among team members.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaCloud className="text-blue-500 text-4xl" />
                <div>
                  <h2 className="text-xl font-bold">Cloud Integration</h2>
                  <p className="text-gray-700">
                    Leverage cloud-based solutions to access and manage documents from anywhere, improving flexibility and supporting remote work environments.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaLock className="text-blue-500 text-4xl" />
                <div>
                  <h2 className="text-xl font-bold">Enhanced Document Security</h2>
                  <p className="text-gray-700">
                    Protect sensitive information with robust encryption, role-based access control, and secure file-sharing capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors">
            Develop Document Management Solutions
          </button>
        </div>

        {/* Document Management System Section */}
        <div className="container mx-auto bg-gray-100 px-4 py-10">
          <h1 className="text-2xl font-bold mb-6 text-center">Document Management System</h1>
          
          <form className="mb-8 mx-auto text-black p-6 rounded-lg shadow-md bg-white max-w-lg">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Upload File</label>
              <div className="flex items-center gap-2">
                <label className="cursor-pointer bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition-colors flex items-center gap-2">
                  <FaUpload /> Choose File
                  <input type="file" name="file" className="hidden" />
                </label>
                <span className="text-sm text-gray-500">No file chosen</span>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Document Title</label>
              <input 
                type="text" 
                name="title" 
                placeholder="Document Title" 
                className="block w-full p-2 text-sm bg-white rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea 
                name="description" 
                placeholder="Document Description" 
                rows="3"
                className="block w-full p-2 text-sm bg-white rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-black text-white px-4 py-2 rounded transition hover:bg-gray-800 flex items-center gap-2 mx-auto"
            >
              <FaUpload /> Upload Document
            </button>
          </form>

          <div className="mx-auto p-6 rounded-lg shadow-md bg-white max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Uploaded Documents</h2>
            <ul className="divide-y divide-gray-200">
              {/* Placeholder for documents */}
              <li className="py-4">
                <p className="text-sm text-gray-500 italic text-center">No documents uploaded yet.</p>
              </li>
            </ul>
          </div>
        </div>
    </main>
  );
};

export default DocumentManagement;