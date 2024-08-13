
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import React, { useState } from 'react';

const memberData = [

  // {
  //   title: "Aadhya Shrivastava",
  //   imgSrc: "./rdimage/AadhyaShrivastava_Rd.jpg",
  //   social: {
  //     instagram: "https://instagram.com/",
  //     linkedin: "https://linkedin.com/in/",
  //     twitter: "https://twitter.com/"
  //   }
  // },
  {
    title: "Soumyadip Maity",
    imgSrc: "./rdimage/SoumyadipMaity_rd.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  // {
  //   title: "ADITI",
  //   imgSrc: "./rdimage/ADITI_rd.jpg",
  //   social: {
  //     instagram: "https://instagram.com/",
  //     linkedin: "https://linkedin.com/in/",
  //     twitter: "https://twitter.com/"
  //   }
  // },
  {
    title: "Arin Kishore",
    imgSrc: "./rdimage/ArinKishore_rd.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Sukriti Gupta",
    imgSrc: "./rdimage/SukritiGupta_rd.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Aditya Gupta",
    imgSrc: "./rdimage/AdityaGupta_rd.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Tanisha Mondal",
    imgSrc: "./rdimage/TanishaMondal_rd.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Divya Dohrajka",
    imgSrc: "./rdimage/DivyaDodrajka_rd.jpg",
    social: {
      instagram: "https://instagram.com/soumyadip",
      linkedin: "https://linkedin.com/in/soumyadip",
      twitter: "https://twitter.com/soumyadip"
    }
  },
  {
    title: "Shruti Sinha",
    imgSrc: "./rdimage/ShrutiSinha_rd.jpg",
    social: {
      instagram: "https://instagram.com/soumyadip",
      linkedin: "https://linkedin.com/in/soumyadip",
      twitter: "https://twitter.com/soumyadip"
    }
  },


  {
    title: "Om Anand",
    imgSrc: "./rdimage/OmAnand_rd.jpg",
    social: {
      instagram: "https://instagram.com/soumyadip",
      linkedin: "https://linkedin.com/in/soumyadip",
      twitter: "https://twitter.com/soumyadip"
    }
  },
  {
    title: "Pritha Das",
    imgSrc: "./rdimage/PrithaDas_rd.jpg",
    social: {
      instagram: "https://instagram.com/soumyadip",
      linkedin: "https://linkedin.com/in/soumyadip",
      twitter: "https://twitter.com/soumyadip"
    }
  },
  {
    title: "Sanket Sumangal Pradhan",
    imgSrc: "./rdimage/SanketSumangalPradhan_rd.jpg",
    social: {
      instagram: "https://instagram.com/soumyadip",
      linkedin: "https://linkedin.com/in/soumyadip",
      twitter: "https://twitter.com/soumyadip"
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

const RD = () => {
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

export default RD;
