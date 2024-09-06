import React from "react";
import DropdownUser from "./DropdownUser";
import { Link } from "react-router-dom";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/20/solid";

const Header = (props) => {
  return (
    <header className="top-0 flex w-full">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4  bg-green-400">
          {/* <!-- Hamburger Toggle BTN --> */}
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img
              src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/1017.png"
              alt="Logo"
            />
          </Link>
        </div>

        <label class="relative">
          <input
            class="placeholder:text-slate-400 bg-white w-full rounded-full py-2 pl-9 pr-3 shadow-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            <MagnifyingGlassCircleIcon className="h-8 w-8 text-slate-300" />
          </div>
        </label>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}

            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
