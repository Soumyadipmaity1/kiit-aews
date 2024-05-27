import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import kaews_logo from "./kaews_logo.png";
const ksac = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837286/KSAC_logo_adc2vn.png';
const kiit = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837283/kiit_logo_jtgq9q.png";
const navLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/members", text: "Members" },
  { to: "/events", text: "Events" },
  { to: "/gallery", text: "Gallery" },
  { to: "/blogs", text: "Blogs" },
  { to: "/contact", text: "Contact" },
];

const Navbar2 = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex ${isScrolled ? 'fixed top-0 left-0 right-0 z-50' : 'sticky'} bg-[#ffffff] justify-between  py-2 md:px-10 xl:px-28 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="flex justify-between">
        <div className="m-3">
          <img src={kiit} alt="logo" className="h-10 " />
        </div>{" "}
        <div className="m-3">
          <img src={ksac} alt="logo" className="h-10  " />
        </div>
        <div className="m-3">
          <img src={kaews_logo} alt="logo" className="h-10 " />
        </div>
      </div>

      <div className="flex justify-between items-center pb-1">
        {navLinks.map((link, index) => (
          <div key={index} className="px-2 mx-2">
            <NavLink
              to={link.to}
              className={`text-black p-2 md:text-md xl:text-lg font-bold ${
                location.pathname === link.to ? ' border-b-4 border-orange-500' : ''
              }`}
            >
              {link.text}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar2;
