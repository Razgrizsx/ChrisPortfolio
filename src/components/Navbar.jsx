import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 bg-gray-500 opacity-35 flex flex-row">
      <NavLink
        to="/"
        className="w-14 h-10 rounded-lg items-center justify-center flex font-bold shadow-md"
      >
        <p className="">Home</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/cabin"
          /* @ts-ignore */
          className="w-14 h-10 rounded-lg items-center justify-center flex font-bold shadow-md"
        >
          Cabin
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
