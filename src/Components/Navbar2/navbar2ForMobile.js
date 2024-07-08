import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import kaews_logo from "./kaews_logo.png";
const ksac = 'https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837286/KSAC_logo_adc2vn.png';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`flex flex-col transform transition-all duration-300  px-4  ${isScrolled ? 'fixed top-0 left-0 right-0 z-50' : 'sticky'} bg-[#ffffff] justify-between py-2  ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
        <div className="flex justify-between lg:hidden">

        <div className="m-3">
          <img src={ksac} alt="logo" className="h-10  " />
        </div>
        <div className="m-3">
          <img src={kaews_logo} alt="logo" className="h-10 " />
        </div>
      </div>
        </div>
        <button onClick={toggleMobileMenu} className="lg:hidden flex m-2  focus:outline-none">
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div className={`mt-5 text-center w-full transition-all duration-500 ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
  {navLinks.map((link, index) => (
    <div key={index} className="mb-3">
      <NavLink
        to={link.to}
        onClick={() => setIsMobileMenuOpen(false)} 
        className={`block text-black text-xl py-2 border-t-[1px] font-semibold ${location.pathname === link.to ? 'text-orange-600 font-bold' : ''}`}
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
