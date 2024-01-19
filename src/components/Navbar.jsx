import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import closeNav from "../assets/shared/icon-close.svg";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const isDesktop = window.innerWidth >= 768;
  return (
    <nav
      className="text-white nav"
      data-aos={isDesktop && "fade-down"}
      data-aos-duration={isDesktop && "300"}
    >
      <div className="absolute flex items-center justify-between nav top-12 w-full pl-12">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="md:!flex items-center gap-4 px-8 py-4 backdrop-filter backdrop-blur-2xl hidden">
          <li className="">
            <NavLink
              className="text-white uppercase !flex items-center gap-2 hvr-underline-from-center"
              to="/"
            >
              <span>00</span>
              home
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className="text-white uppercase !flex items-center gap-2 hvr-underline-from-center"
              to="/destination"
            >
              <span>01</span>
              destination
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className="text-white uppercase !flex items-center gap-2 hvr-underline-from-center"
              to="/crew"
            >
              <span>02</span>
              crew
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className="text-white uppercase !flex items-center gap-2 hvr-underline-from-center"
              to="/technology"
            >
              <span>03</span>
              technology
            </NavLink>
          </li>
        </ul>
        <div className="mobile-toggle md:hidden">
          <img
            src={hamburger}
            alt="hamburger icon"
            onClick={handleNav}
            className="pr-12"
          />
          <ul
            className={
              nav
                ? "fixed top-0 bottom-0 right-0 flex flex-col items-center justify-center h-full w-[40%] gap-4 backdrop-filter backdrop-blur-2xl z-[999] duration-300"
                : "fixed top-0 bottom-0 right-0 flex flex-col items-center justify-center h-full w-[40%] gap-4 backdrop-filter backdrop-blur-2xl z-[999] duration-300 translate-x-[100%]"
            }
          >
            <li className="!flex items-center gap-2">
              <span>00</span>
              <Link className="text-white uppercase" to="/">
                home
              </Link>
            </li>
            <li className="!flex items-center gap-2">
              <span>01</span>
              <Link className="text-white uppercase" to="/destination">
                destination
              </Link>
            </li>
            <li className="!flex items-center gap-2">
              <span>02</span>
              <Link className="text-white uppercase" to="/crew">
                crew
              </Link>
            </li>
            <li className="!flex items-center gap-2">
              <span>03</span>
              <Link className="text-white uppercase" to="/technology">
                technology
              </Link>
            </li>
            <img
              src={closeNav}
              alt="mobile nav close icon"
              className="absolute top-10 right-10"
              onClick={handleNav}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
