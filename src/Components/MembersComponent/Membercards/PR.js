

import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from './photo_2024-05-14_17-42-08.jpg';

const memberData = [
    {
     
        title: "Soumyadip Maity",
        imgSrc: Image,
        social: {
          instagram: "https://instagram.com/soumyadip",
          linkedin: "https://linkedin.com/in/soumyadip",
          twitter: "https://twiter.com/soumyadip"
      }
    },

];

const MemberPost = ({ title, imgSrc, social }) => (
  <div className="w-60 m-3  h-auto members  bg-slate-white shadow-md rounded-md overflow-hidden group">
    <div className="relative rounded-t-md image overflow-hidden">
      <img
        className="w-full rounded-t-md h-76 transition-transform duration-300 transform group-hover:scale-110"
        src={imgSrc}
        alt="leadImage"
      />
      <div className="overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
      <div className="social-icons absolute inset-0 flex justify-center items-center space-x-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <a href={social.instagram} className="text-white hover:text-green-500">
          <FaInstagram size={25} />
        </a>
        <a href={social.linkedin} className="text-white hover:text-green-500">
          <FaLinkedin size={25} />
        </a>
        <a href={social.twitter} className="text-white hover:text-green-500">
          <FaTwitter size={25} />
        </a>
      </div>
      <div className="absolute inset-0 flex mt-[205px] py-1 bg-green-500 justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <h3 className="text-center font-bold text-[15px]  text-white">{title}</h3>
      </div>
    </div>
  </div>
);


const PR = () => (
    <div className="flex justify-center flex-wrap">
        {memberData.map((post, index) => (
            <MemberPost
                key={index}
                position={post.position}
                Words={post.Words}
                title={post.title}
                imgSrc={post.imgSrc}
                social={post.social}
            />
        ))}
    </div>
);

export default PR;
