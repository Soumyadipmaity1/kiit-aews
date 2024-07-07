
import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const memberData = [

  {
    title: "Aadhya Shrivastava",
    imgSrc: "./rdimage/AadhyaShrivastava_Rd.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "Soumyadip Maity",
    imgSrc: "./rdimage/SoumyadipMaity_rd.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
  {
    title: "ADITI",
    imgSrc: "./rdimage/ADITI_rd.jpg",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/"
    }
  },
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
  <div className="w-64 h-auto m-3   members  bg-slate-white shadow-md rounded-md overflow-hidden group">
    <div className="relative rounded-t-md image overflow-hidden">
      <img
        className="w-full rounded-t-md  transition-transform duration-300 transform group-hover:scale-110"
        src={imgSrc}
        alt="R&DImage"
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


const RD = () => (
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

export default RD;
