import React from "react";

const Footer = () => {
  return (
    <footer className="sticky w-full bg-white dark:bg-blue-900 border-t mt-8 border-gray-200 dark:border-blue-800">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-200">
        <div className="mb-3 md:mb-0">
          © {new Date().getFullYear()} TimeLine. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-600 dark:hover:text-white">
            About
          </a>
          <a className="hover:text-blue-600 dark:hover:text-white" href="mailto:spalsoumyadeep@gmail.com">
            Contact
          </a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-white">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
