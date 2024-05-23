import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Image from './photo_2024-05-14_17-42-08.jpg';

const memberData = [
    {
        Words: "As a member, I wholeheartedly support our society's mission, advocating for animal welfare and making a meaningful impact in our community.",
        position: "Web Lead",
        title: "Soumyadip Maity",
        imgSrc: Image,
        social: {
            twitter: "https://twitter.com/soumyadip",
            linkedin: "https://linkedin.com/in/soumyadip",
            facebook: "https://facebook.com/soumyadip"
        }
    },
    {
        Words: "As a member, I wholeheartedly support our society's mission, advocating for animal welfare and making a meaningful impact in our community.",
        position: "Design Lead",
        title: "Soumyadip Maity",
        imgSrc: Image,
        social: {
            twitter: "https://twitter.com/soumyadip",
            linkedin: "https://linkedin.com/in/soumyadip",
            facebook: "https://facebook.com/soumyadip"
        }
    },
    {
        Words: "As a member, I wholeheartedly support our society's mission, advocating for animal welfare and making a meaningful impact in our community.",
        position: "Marketing Lead",
        title: "Soumyadip Maity",
        imgSrc: Image,
        social: {
            twitter: "https://twitter.com/soumyadip",
            linkedin: "https://linkedin.com/in/soumyadip",
            facebook: "https://facebook.com/soumyadip"
        }
    },
    {
        Words: "As a member, I wholeheartedly support our society's mission, advocating for animal welfare and making a meaningful impact in our community.",
        position: "Development Lead",
        title: "Soumyadip Maity",
        imgSrc: Image,
        social: {
            twitter: "https://twitter.com/soumyadip",
            linkedin: "https://linkedin.com/in/soumyadip",
            facebook: "https://facebook.com/soumyadip"
        }
    },
];

const LeadPost = ({ Words, position, title, imgSrc, social }) => (
    <div className="w-80 m-5 h-auto team_main_bop_wrapper bg-slate-white shadow-md hover:text-white hover:bg-[#2cc868] rounded-md">
        <div className="relative rounded-t-md image overflow-hidden">
            <img
                className="w-full rounded-t-md h-76 transition-transform duration-300 transform hover:scale-110"
                src={imgSrc}
                alt="leadImage"
            />
            <div className="overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-300"></div>
            <div className="social-icons absolute inset-0 flex justify-center items-center space-x-4 transition-opacity duration-300 opacity-0">
                <a href={social.twitter} className="  text-white hover:text-green-500">
                    <FaTwitter size={30} />
                </a>
                <a href={social.linkedin} className="  text-white hover:text-green-500">
                    <FaLinkedin size={30} />
                </a>
                <a href={social.facebook} className="  text-white hover:text-green-500">
                    <FaFacebook size={30} />
                </a>
            </div>
        </div>
        <div className="p-5 relative text-div">
            <h3 className="text-center font-bold text-[20px]">{title}</h3>
            <h4 className="text-center m-2 text-green-900 font-bold">{position}</h4>
            <h4 className="text-sm">{Words}</h4>
        </div>
    </div>
);

const Leads = () => (
    <div className="flex flex-wrap">
        {memberData.map((post, index) => (
            <LeadPost
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

export default Leads;