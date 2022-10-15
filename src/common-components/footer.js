import React from "react";
import { FiGlobe, FiChevronUp } from "react-icons/fi";
import { BiPound, BiMapAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="fixed bottom-20 left-0 z-20 w-full">
        <div className="flex justify-center">
          <button
            type="button"
            className="flex items-center p-3 text-white bg-slate-700 rounded-full mobleScreen"
          >
            Show map <BiMapAlt size={18} className="mt-1 ml-2" />{" "}
          </button>
        </div>
      </div>
      <footer className="d-none d-lg-block fixed bottom-0 left-0 z-20 w-full bg-white border-t border-gray-200 shadow">
        <div className="container">
          <div className="flex items-center justify-between py-3">
            <div className="footer-menu grow">
              <span>© 2022 Airbnb, Inc.</span>
              <span className="space" aria-hidden="true">
                ·
              </span>
              <a className="hover:underline">Privacy</a>
              <span className="space" aria-hidden="true">
                ·
              </span>
              <a className="hover:underline">Terms</a>
              <span className="space" aria-hidden="true">
                ·
              </span>
              <a className="hover:underline">Sitemap</a>
              <span className="space" aria-hidden="true">
                ·
              </span>
              <a className="hover:underline">UK Modern Slavery Act</a>
              <span className="space" aria-hidden="true">
                ·
              </span>
              <a className="hover:underline">Company details</a>
              <span className="space" aria-hidden="true">
                ·
              </span>
              <a className="hover:underline">Destinations</a>
            </div>
            <div className="flex items-end">
              <button type="button" className="flex items-center mr-4">
                <FiGlobe className="mr-2" />
                <span className="hover:underline">English (GB)</span>
              </button>
              <button type="button" className="flex items-center mr-4">
                <BiPound className="mr-2" />
                <span className="hover:underline">GBP</span>
              </button>
              <button type="button" className="flex items-center mr-4">
                <span className="hover:underline">Support & resources</span>
                <FiChevronUp className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="d-lg-none d-sm-block fixed bottom-0 left-0 z-20 w-full bg-white border-t border-gray-200 shadow">
        <div className="container">
          <div className="flex justify-evenly py-3">
            <div>
              <BsSearch size={35} />
            </div>
            <div>
              <AiOutlineHeart size={35} />
            </div>
            <div>
              <FaRegUserCircle size={35} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
