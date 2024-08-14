import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="text-white-100 bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 body-font">
      <div className=" container mx-auto text-white flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <img src="logo.png" alt="logo" className="w-14 h-14 rounded-full" />
          <p className="text-4xl z-50 font-bold ">Pizza</p>
        </Link>
        <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Copyright © 2024 Jiban Pandey
        </p>
      </div>
    </footer>
  );
}

export default Footer;
