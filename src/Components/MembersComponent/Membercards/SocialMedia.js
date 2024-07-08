

import React from 'react';
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
      <div className="absolute inset-0 flex mt-[220px] py-1 bg-green-500 justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <h3 className="text-center font-bold text-[16px]  text-white">{title}</h3>
      </div>
    </div>
  </div>
);


const SocialMedia = () => (
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

export default SocialMedia;
