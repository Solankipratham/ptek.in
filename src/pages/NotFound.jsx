import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
        404
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Page Not Found
      </h1>
      <p className="text-gray-500 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
