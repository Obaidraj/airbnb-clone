import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
// import DefaulLogo from "../assets/svg/default-logo.svg";
import DefaulLogo from "../assets/images/Airbnb_Logo.png";
import { FiGlobe, FiMenu, FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <>
      <div className="container-fluid px-5 bg-white">
        <header className="flex items-center justify-between">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a className="default-company-logo">
              <span className="sr-only">Your Company</span>
              <img src={DefaulLogo} alt="" width={"190px"} />
            </a>
          </div>
          <nav className="hidden space-x-10 md:flex">
            <div className="header-centerlized-menu">
              <button className="left" type="button">
                <div className="px-3">Anywhere</div>
              </button>
              <span></span>
              <button className="left" data-index="1" type="button">
                <div className="px-3">Any week</div>
              </button>
              <span></span>
              <button className="right" type="button">
                <div className="px-3">
                  <p>Add guests</p>
                </div>
                <div
                  data-testid="little-search-icon"
                  className="search-spacing "
                  style={{ backgroundColor: "#ff385c" }}
                >
                  <FiSearch className="my-auto" />
                </div>
              </button>
            </div>
          </nav>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <div className="p-3 cursor-pointer rounded-full m-0 hover:bg-gray-100">
              Become a host
            </div>
            <div className="relative inline">
              <button
                type="button"
                className="p-3 cursor-pointer rounded-full m-0 hover:bg-gray-100"
              >
                <FiGlobe size={18} />
              </button>
            </div>
            <div className="relative inline">
              <Menu as="div" className="relative z-50 inline-block text-left">
                <div>
                  <Menu.Button className="p-2 ml-2 rounded-full inline-flex items-center border-2 border-gray-300 hover:drop-shadow-lg">
                    <FiMenu
                      className={classNames(
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                    <FaUserCircle className="w-6 h-6 rounded-full ml-4" />
                  </Menu.Button>
                </div>
              </Menu>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
export default Header;
