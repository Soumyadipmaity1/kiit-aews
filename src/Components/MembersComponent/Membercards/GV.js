

import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import React, { useState } from 'react';

const memberData = [
  {
    title: "Aaditya Aanand",
    imgSrc: "./gvimage/AadityaAanand.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Abhinandan Singh",
    imgSrc: "./gvimage/Abhinandansingh_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Aditya Kumar Singh",
    imgSrc: "./gvimage/AdityaKumarSingh_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Aman Jagannath",
    imgSrc: "./gvimage/AmanJagannath_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Anchita Patro",
    imgSrc: "./gvimage/Anchita Patro_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Ankit Kumar",
    imgSrc: "./gvimage/Ankit Kumar_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  // {
  //   title: "Anuj Pandey",
  //   imgSrc: "./gvimage/AnujPandey_GV.jpg",
  //   social: {
  //     instagram: "https://instagram.com/",
  //     linkedin: "https://linkedin.com/in/",
  //     twitter: "https://twitter.com/"
  //   }
  // },
  {
    title: "Ashish Jha",
    imgSrc: "./gvimage/AshishJha_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Ashmita Kar",
    imgSrc: "./gvimage/Ashmita Kar_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Avinash Kumar",
    imgSrc: "./gvimage/Avinash Kumar_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Biswajit Patel",
    imgSrc: "./gvimage/BiswajitPatel_gv.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Debadrita Ghosh",
    imgSrc: "./gvimage/DebadritaGhosh_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Gagan Visen",
    imgSrc: "./gvimage/GaganVisen_GV.png",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Harshit",
    imgSrc: "./gvimage/Harshit_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Indrayudh Mukherjee",
    imgSrc: "./gvimage/IndrayudhMukherjee_GV.jpeg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Isha Jaswal",
    imgSrc: "./gvimage/IshaJaswal_gv.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Khusi Saxena",
    imgSrc: "./gvimage/KhusiSaxena_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Kirti Saxena",
    imgSrc: "./gvimage/KirtiSaxena_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Krishna Sreekar Upadhayayula",
    imgSrc: "./gvimage/KrishnaSreekarUpadhayayula_GV.png",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Kritika Roy",
    imgSrc: "./gvimage/KritikaRoy_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Mandal Soren",
    imgSrc: "./gvimage/mandalsoren_gv.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Manya Shri Tripathi",
    imgSrc: "./gvimage/ManyaShriTripathi_gv.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Medha Saha",
    imgSrc: "./gvimage/MedhaSaha_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Naibedya Mohanty",
    imgSrc: "./gvimage/NAIBEDYA_MOHANTY_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Pranav Bharti",
    imgSrc: "./gvimage/PRANAVBHARTI_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Prapti Chaudhry",
    imgSrc: "./gvimage/Prapti Chaudhry_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Pratigya Kumari",
    imgSrc: "./gvimage/Pratigya_Kumari_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Priyanshi",
    imgSrc: "./gvimage/PRIYANSHI_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Ritika Dey",
    imgSrc: "./gvimage/RitikaDey_gv.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Sagarika",
    imgSrc: "./gvimage/Sagarika_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "SAGARIKA MOHANTY",
    imgSrc: "./gvimage/SAGARIKA-MOHANTY_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Sahil Kumar",
    imgSrc: "./gvimage/Sahil_Kumar_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Sahil Behera",
    imgSrc: "./gvimage/SahilBehera_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Sandesh Kumar",
    imgSrc: "./gvimage/SandeshKumar_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Sapna Sharma",
    imgSrc: "./gvimage/SapnaSharma_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Sasank Agarwal",
    imgSrc: "./gvimage/SasankAgarwal_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Sayantan Panda",
    imgSrc: "./gvimage/SayantanPanda_gv.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Shambhavi Chaudhary",
    imgSrc: "./gvimage/ShambhaviChaudhary_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Shiven Sisodia",
    imgSrc: "./gvimage/ShivenSisodia_gv.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Shivranjanee Bhattarcharya",
    imgSrc: "./gvimage/ShivranjaneeBhattacharya_gv.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Shreya Allupati",
    imgSrc: "./gvimage/ShreyaAllupati_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Sidharth Sethia",
    imgSrc: "./gvimage/SidharthSethia_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Simran Arya",
    imgSrc: "./gvimage/Simran arya_gv.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Smriti Chowdhury",
    imgSrc: "./gvimage/Smriti Chowdhury_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Sreeja Dash",
    imgSrc: "./gvimage/SreejaDash_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Srinjoyee Ray",
    imgSrc: "./gvimage/SrinjoyeeRay_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Subha Darshini",
    imgSrc: "./gvimage/Subha_Darshini_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Subhadra Khuntia",
    imgSrc: "./gvimage/SubhadraKhuntia_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Swati Priyadarshini",
    imgSrc: "./gvimage/Swati Priyadarshini_GV.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },

]

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

const GV = () => {
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

export default GV;
