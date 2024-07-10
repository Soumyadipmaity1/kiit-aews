

import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const memberData = 
 [

  {
    title: "Adila Afreen",
    imgSrc: "./scimage/AdilaAfreen_SC.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Mohit Kumal Rath",
    imgSrc: "./scimage/MohitKamalRath_sc.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  // {
  //   title: "Akash Routh",
  //   imgSrc: "./scimage/AkashRouth_SC.jpg",
  //   social: {
  //     instagram: "https://instagram.com/soumyadip",
  //     linkedin: "https://linkedin.com/in/soumyadip",
  //     twitter: "https://twitter.com/soumyadip"
  //   }
  // },
  {
    title: "Apurba Sarangi",
    imgSrc: "./scimage/ApurbaSarangi_SC.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Chinmaya Prdhan",
    imgSrc: "./scimage/Chinmayapradhan_sc .jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Manya Shree Deo",
    imgSrc: "./scimage/ManyaShreeDeo_SC.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },


  {
    title: "Nitin Anand",
    imgSrc: "./scimage/NitinAnand_sc.PNG",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Prasoon Mishra",
    imgSrc: "./scimage/PrasoonMishra_DM.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Roushan Singh",
    imgSrc: "./scimage/RoushanSingh.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Anuj Kumar",
    imgSrc: "./scimage/AnujKumar_SC.png",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Anula Mishra",
    imgSrc: "./scimage/anulamishra_SC.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Hemanti Srivastava",
    imgSrc: "./scimage/HemantiSrivastava_SC.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Ayushee kar",
    imgSrc: "./scimage/Ayusheekar_SC.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Samir Singh",
    imgSrc: "./scimage/SamirSingh_SC.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Yash Sirola",
    imgSrc: "./scimage/YashSirola_SC.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Arya Krishna",
    imgSrc: "./scimage/AryaKrishna_SC.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Dyaipayan Chatterjee",
    imgSrc: "./scimage/DyaipayanChatterjee_SC.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Rajdeep Banerjee",
    imgSrc: "./scimage/RajdeepBanerjee_SC.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Rishav Kumar",
    imgSrc: "./scimage/RishavKumar_SC.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  }
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

const SC = () => {
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

export default SC;
