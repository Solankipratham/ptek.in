import React from 'react';
import { FaUsers, FaUserPlus, FaLaptopCode, FaHandshake } from 'react-icons/fa';

const Development = () => {
  return (
    <section className="py-2 px-6 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Empower Your Vision with Our Development Team
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Whether you're building from the ground up or scaling fast, our expert development teams and flexible augmentation models help you deliver robust software solutions on time and on budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {/* Dedicated Development Team */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-left hover:shadow-xl transition-shadow duration-300">
            <div className="text-blue-600 text-4xl mb-4">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Dedicated Development Team
            </h3>
            <p className="text-gray-600">
              Get access to a highly skilled and scalable team that works as an extension of your organization. From full-cycle product development to post-launch support, we handle everything.
            </p>
          </div>

          {/* Team Augmentation */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-left hover:shadow-xl transition-shadow duration-300">
            <div className="text-green-600 text-4xl mb-4">
              <FaUserPlus />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Team Augmentation
            </h3>
            <p className="text-gray-600">
              Quickly fill talent gaps and accelerate your development timeline. Our experienced engineers integrate seamlessly with your existing teams and processes to increase agility and reduce costs.
            </p>
          </div>
        </div>

        <div className="mt-16 flex justify-center gap-6 flex-wrap">
          <div className="flex items-center gap-3 text-gray-700">
            <FaLaptopCode className="text-xl text-indigo-600" />
            <span>Frontend & Backend Developers</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaHandshake className="text-xl text-indigo-600" />
            <span>Agile Collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;
