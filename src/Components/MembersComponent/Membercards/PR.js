

import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from './photo_2024-05-14_17-42-08.jpg';

const memberData = [
  {
    title: "Alkesh Bhati",
    imgSrc: "./AlkeshBhati_PR.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Tanya Sharma",
    imgSrc: "./TanyaSharma _PR.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Ansuman Mishra",
    imgSrc: "./ANSUMAN_PR.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Sneha Fatehramka",
    imgSrc: "./SnehaFatehramka _PR.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  // {
  //   title: "Areen Thakur",
  //   imgSrc: "./AreenThakur_PR.jpg",
  //   social: {
  //     instagram: "https://instagram.com/",
  //     linkedin: "https://linkedin.com/in/",
  //     twitter: "https://twitter.com/"
  //   }
  // },
  {
    title: "Arpita Pal",
    imgSrc: "./ArpitaPal_PR.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Guttal Gayatri",
    imgSrc: "./Guttalagayatri_PR.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Sai Sanjana Dwarapudi",
    imgSrc: "./SaiSanjanaDwarapudi_PR.jpeg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Himanshu Kumar",
    imgSrc: "./HimanshuKumar_PR.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Ruditha",
    imgSrc: "./Ruditha_PR.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Kunal Saw",
    imgSrc: "./KunalSaw_PR.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Manaswini Mohapatra",
    imgSrc: "./manaswinimohapatra_pr.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Nikhil Raj Sinha",
    imgSrc: "./NIKHILRAJSINHA_PR.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Vaibhavi",
    imgSrc: "./Vaibhavi_PR.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Rohit Kumar Satpathy",
    imgSrc: "./RohitKumarSatpathy_PR.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  
];


const MemberPost = ({ title, imgSrc, social }) => (
  <div className="w-64 m-3  h-auto members  bg-slate-white shadow-md rounded-md overflow-hidden group">
    <div className="relative rounded-t-md image overflow-hidden">
      <img
        className="w-full rounded-t-md  transition-transform duration-300 transform group-hover:scale-110"
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
      <div className="absolute inset-0 flex mt-[222px] py-1 bg-green-500 justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
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
