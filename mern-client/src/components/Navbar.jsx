import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../contects/AuthProvider";
// import {handleLogout} from "./Logout";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  //getting the user details from the AuthContext
  const { user } = useContext(AuthContext);
  console.log(user);

  //definig a toggle button
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      // The window.removeEventListener is called inside the return statement of the useEffect hook in order to clean up the event listener when the component is unmounted or when the dependency array (second argument of useEffect) changes.
      // In React, when you use useEffect, it is common to perform cleanup actions inside the cleanup function returned by the effect. This helps prevent memory leaks or unexpected behavior when the component is no longer in use.
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //navItems
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];
  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" />
            Books
          </Link>

          {/* nav items for large devices */}

          <ul className="md:flex hidden space-x-12">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                    to={item.path}
                  >
                    {item.link}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* btn for lg devices */}

          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              <FaBarsStaggered className="w-5 hover:text-blue-700" />
            </button>
          </div>

          {/* menu for the mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* nav items for sm devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          <ul className>
            {/* {
                        navItems.map(({link,path}) => {
                            return (
                                    <Link key={path} className='block text-base text-white uppercase cursor-pointer ' >{link}</Link>
                            )
                        })
                    } */}

            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="block text-base text-white uppercase cursor-pointer"
                  onClick={toggleMenu} // Close menu on click
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
