import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className='bg-blue-300'>
      <NavLink
        to='/'
        className='w-14 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'
      >
        <p className='bg-blue-400'>Home</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink
          to='/about'
          /* @ts-ignore */
          className={({ isActive }) => {
            isActive ? "text-blue-500" : "text-black";
          }}
        >
          About
        </NavLink>
        <NavLink
          to='/projects'
          /* @ts-ignore */
          className={({ isActive }) => {
            isActive ? "text-blue-500" : "text-black";
          }}
        >
          Projects
        </NavLink>
        <NavLink
          to='/contact'
          /* @ts-ignore */
          className={({ isActive }) => {
            isActive ? "text-blue-500" : "text-black";
          }}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
