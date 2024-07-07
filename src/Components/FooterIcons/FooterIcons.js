
import React from 'react';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaWordpress, } from 'react-icons/fa';

const FooterIcons = () => {
  const socials = [
    { href: '#', title: 'Instagram', icon: <FaInstagram /> },
    { href: '#', title: 'Twitter', icon: <FaTwitter /> },
    { href: '#', title: 'Wordpress', icon: <FaWordpress /> },
    { href: '#', title: 'Linkedin', icon: <FaLinkedinIn /> },
     
  ];

  return (
    <ul className="ftco-footer-social p-2 py-6  flex space-x-4">
      {socials.map((social, index) => (
        <li key={index} className="ftco-animate bg-[#1d1d1e] text-2xl p-3 rounded-full">
          <a
            href={social.href}
            data-toggle="tooltip"
            data-placement="top"
            title={social.title}
            className="text-green-500 hover:text-white transition duration-300 ease-in-out"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterIcons;
