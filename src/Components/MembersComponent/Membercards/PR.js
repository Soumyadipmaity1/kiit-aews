

import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

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
  <div className="lg:w-60 w-40  m-3  lg:h-60 h-40 members  bg-slate-300 shadow-md rounded-md overflow-hidden group">
    <div className="relative rounded-t-md image overflow-hidden">
      <img
        className="w-full lg:h-60 h-40 rounded-t-md h-76 transition-transform duration-300 transform group-hover:scale-110"
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
      <div className="absolute inset-0 flex sm:mt-[205px] mt-[131px] sm:py-1 py-0.5 bg-green-500 justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <h3 className="text-center font-bold text-[15px]  text-white">{title}</h3>
      </div>
    </div>
  </div>
);

const PR= () => {
  const [visibleCount, setVisibleCount] = useState(20);

  const loadMoreMembers = () => {
    setVisibleCount(prevCount => prevCount + 20);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center flex-wrap">
        {memberData.slice(0, visibleCount).map((post, index) => (
          <MemberPost
            key={index}
            title={post.title}
            imgSrc={post.imgSrc}
            social={post.social}
          />
        ))}
      </div>
      {visibleCount < memberData.length && (
        <button
          onClick={loadMoreMembers}
          className="mt-4 px-4 py-2 font-bold bg-green-500 text-white shadow-md border-[1px] border-gray-800 rounded-md"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default PR;
