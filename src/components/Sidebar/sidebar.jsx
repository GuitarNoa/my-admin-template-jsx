import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import SidebarLinks from "./sidebarlink";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

import {
  HomeIcon,
  UserIcon,
  TableCellsIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  IdentificationIcon,
} from "@heroicons/react/20/solid";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`flex flex-col w-1/5 min-h-screen overflow-hidden px-2 py-2 top-0 rounded-r-2xl`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <NavLink to="/">
        <div className="flex flex-row items-center gap-3 p-2">
          <h4 className="text-5xl font-bold p-4">MarkWolf</h4>
        </div>
      </NavLink>
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="border-b-2 border-slate-100 p-2"></div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-6 lg:px-4">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinks
                activeCondition={
                  pathname === "/" || pathname.includes("dashboard")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <li className="hover:bg-[#0a8a94] hover:rounded-xl">
                        <NavLink
                          to="#"
                          className={`group relative flex items-center gap-1.5 px-3 py-3 font-bold text-xl ${
                            pathname === "/" || pathname.includes("dashboard")
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            sidebarExpanded
                              ? handleClick()
                              : setSidebarExpanded(true);
                          }}
                        >
                          <HomeIcon className="h-6 w-6" />
                          Dashboard
                          <ChevronDownIcon
                            className={`h-6 w-6 ${open && "rotate-180"}`}
                          />
                        </NavLink>
                      </li>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6 ">
                          <li className="group/item hover:bg-[#0a8a94] hover:rounded-xl">
                            <NavLink
                              to="/"
                              className={({ isActive }) =>
                                "group relative flex items-center gap-2.5 rounded-md px-2 py-2 font-medium duration-300 ease-in-out text-xl"
                              }
                            >
                              Analytic
                            </NavLink>
                          </li>
                          <li className="group/item hover:bg-[#0a8a94] hover:rounded-xl">
                            <NavLink
                              to="/dashboard/ecommerce"
                              className={({ isActive }) =>
                                "group relative flex items-center gap-2.5 rounded-md px-2 py-2 font-medium duration-300 ease-in-out text-xl"
                              }
                            >
                              eCommerce
                            </NavLink>
                          </li>
                        </ul>
                      </div>

                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinks>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Profile --> */}
              <li>
                <NavLink
                  to="/profile"
                  className={`group relative flex items-center gap-1.5 px-3 py-3 font-bold text-xl hover:bg-[#0a8a94] hover:rounded-xl ${pathname.includes(
                    "profile"
                  )}`}
                >
                  <IdentificationIcon className="h-6 w-6" />
                  Profile
                </NavLink>
              </li>
              {/* <!-- Menu Item Profile --> */}

              {/* <!-- Menu Item Tables --> */}
              <li>
                <NavLink
                  to="/table"
                  className={`group relative flex items-center gap-1.5 px-3 py-3 font-bold text-xl hover:bg-[#0a8a94] hover:rounded-xl ${pathname.includes(
                    "table"
                  )}`}
                >
                  <TableCellsIcon className="h-6 w-6" />
                  Table
                </NavLink>
              </li>
              {/* <!-- Menu Item Tables --> */}

              {/* <!-- Menu Item Settings --> */}
              <li>
                <NavLink
                  to="/setting"
                  className={`group relative flex items-center gap-1.5 px-3 py-3 font-bold text-xl hover:bg-[#0a8a94] hover:rounded-xl ${pathname.includes(
                    "setting"
                  )}`}
                >
                  <Cog6ToothIcon className="h-6 w-6" />
                  Setting
                </NavLink>
              </li>
              {/* <!-- Menu Item Settings --> */}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 ml-4 text-xl font-bold">Page</h3>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
