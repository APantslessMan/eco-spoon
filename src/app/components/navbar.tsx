import React from 'react';
import Image from 'next/image';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="bg-secondary h-[5vh]">
          <div className="flex pt-2 justify-center space-x-[30vw] md:font-bold  font-bold text-sm md:text-lg text-extrabold text-black">
            <div className="subpixel-antialiased self-center  drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,.5)]">
              Our Selection Process
            </div>

            <div className="subpixel-antialiased self-center  drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.5)]">
              Find The Best Deals -&gt;
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between bg-base-100 rounded-0 h-[15vh] px-4">
          <div className="flex lg:pr-[20vw]">
            <a
              href="#"
              className="rounded-0 font-black text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] transition-transform duration-[2000ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] transform hover:translate-y-[-10px]"
            >
              EcoSpoons
            </a>
          </div>
          <div className="hidden lg:flex py-2 lg:px-24 px-4 space-x-4">
            <a
              href="#"
              className="text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)] transition-transform duration-[2000ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] transform hover:translate-y-[-5px]"
            >
              Home
            </a>
            <a
              href="#"
              className="text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)] transition-transform duration-[2000ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] transform hover:translate-y-[-5px]"
            >
              Products
            </a>
            <a
              href="#"
              className=" text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)] transition-transform duration-[2000ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] transform hover:translate-y-[-5px]"
            >
              About
            </a>
            <a
              href="#"
              className=" text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)] transition-transform duration-[2000ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] transform hover:translate-y-[-5px]"
            >
              Contact
            </a>
          </div>
          <div className="flex lg:hidden">
            <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">
              Menu
            </label>
          </div>
          <div className="dropdown dropdown-end hidden lg:flex">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end hidden lg:flex self-center">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">A</div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
