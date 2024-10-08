import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const memberData = [
    {
        position: "General Volunteer ",
        title: "Anuj Pandey",
        imgSrc: "./gvimage/AnujPandey_GV.jpg",
        social: {
            instagram: "https://instagram.com/soumyadip",
            linkedin: "https://linkedin.com/in/soumyadip",
            twitter: "https://twiter.com/soumyadip"
        }
    },
    {

        position: "Public Relation ",
        title: "Areen Thakur",
        imgSrc: "./AreenThakur_PR.jpg",
        social: {
            instagram: "https://instagram.com/soumyadip",
            linkedin: "https://linkedin.com/in/soumyadip",
            twitter: "https://twiter.com/soumyadip"
        }
    },
    {
        
        position: "R&D ",
        title: "Aadhya Shrivastava",
    imgSrc: "./rdimage/AadhyaShrivastava_Rd.jpg",
        social: {
            instagram: "https://instagram.com/soumyadip",
            linkedin: "https://linkedin.com/in/soumyadip",
            twitter: "https://twiter.com/soumyadip"
        }
    },
    {

        position: "Social Media ",
        title: "Ashutosh Rout",
        imgSrc: "./leadimage/SocialMediaLead.jpg",
        social: {
            instagram: "https://instagram.com/soumyadip",
            linkedin: "https://linkedin.com/in/soumyadip",
            twitter: "https://twiter.com/soumyadip"
        }
    },
];

const LeadPost = ({ position, title, imgSrc, social }) => (
    <div className="lg:w-60 w-40 lg:m-5 m-3 h-auto team_main_bop_wrapper bg-slate-white shadow-md hover:text-white hover:bg-[#2cc868] rounded-md">
        <div className="relative rounded-t-md image overflow-hidden">
            <img
                className="w-full rounded-t-md lg:h-auto h-40 transition-transform duration-300 transform hover:scale-110"
                src={imgSrc}
                alt="leadImage"
            />
            <div className="overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-300"></div>
            <div className="social-icons absolute inset-0 flex justify-center items-center space-x-4 transition-opacity duration-300 opacity-0">
                <a href={social.instagram} className="  text-white hover:text-green-500">
                    <FaInstagram size={30} />
                </a>
                <a href={social.linkedin} className="  text-white hover:text-green-500">
                    <FaLinkedin size={30} />
                </a>
                <a href={social.twitter} className="  text-white hover:text-green-500">
                    <FaTwitter size={30} />
                </a>
            </div>
        </div>
        <div className="p-5 relative text-div">
            <h3 className="text-center font-bold text-[15px] sm:[17px]  lg:text-[18px]">{title}</h3>
            {/* <h4 className="text-sm font-bold text-orange-500 text-center m-1">{roll}</h4> */}

            <h4 className="text-center m-2 text-green-900 text-[11px]  lg:text-base font-bold">{position}</h4>
        </div>
    </div>
);

const Leads = () => (
    <div className="flex justify-center flex-wrap">
        {memberData.map((post, index) => (
            <LeadPost
                key={index}
                position={post.position}
                title={post.title}
                imgSrc={post.imgSrc}
                social={post.social}
            />
        ))}
    </div>
);

export default Leads;
