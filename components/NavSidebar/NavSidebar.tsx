import React from "react";

const NavSidebar = () => {
  return (
    <>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent1"
          >
            <img
              src="/public/l&mlogo.jpg"
              style={{ width: "10px", filter: "contrast(1.5) saturate(0.5)" }}
              alt="Guitar"
            />
            <a className="text-xl text-white pr-2 font-semibold" href="#">
              Test
            </a>
            {/* <!-- Left links --> */}
            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <a className="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  href="#"
                >
                  What we do
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  href="#"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  href="#"
                >
                  Get involved
                </a>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
        </div>
      </nav>
    </>
  );
};

export default NavSidebar;
