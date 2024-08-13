import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Image from './photo_2024-05-14_17-42-08.jpg';

const memberData = [
    {
        Words: "As a member, I wholeheartedly support our society's mission, advocating for animal welfare and making a meaningful impact in our community.",
        // roll: "Roll Number here",
        title: "Dristi Gupta",
        imgSrc: "./leadimage/DristiGupta_rd.JPEG",
        social: {
            twitter: "https://twitter.com/soumyadip",
            linkedin: "https://linkedin.com/in/soumyadip",
            facebook: "https://facebook.com/soumyadip"
        }
    },
    
    {
        Words: "As a member, I wholeheartedly support our society's mission, advocating for animal welfare and making a meaningful impact in our community.",
        // roll: "Roll Number here",
        title: "Sreeraj sahoo",
        imgSrc: "./ShreerajAssCo.jpg",
        social: {
            twitter: "https://twitter.com/soumyadip",
            linkedin: "https://linkedin.com/in/soumyadip",
            facebook: "https://facebook.com/soumyadip"
        }
    },
];

const CoordinatorPost = ({ Words, roll, title, imgSrc, social }) => (
    <div className="w-64 mx-auto h-auto team_main_bop_wrapper bg-slate-white shadow-md hover:text-white hover:bg-[#49b3ff] rounded-md">
        <div className="relative rounded-t-md image overflow-hidden">
            <img
                className="w-full rounded-t-md h-60 transition-transform duration-300 transform hover:scale-110"
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
            <h3 className="text-center font-bold text-[18px]">{title}</h3>
            <h4 className="text-center m-2 text-green-900 font-bold">{roll}</h4>
            <h4 className="text-[12px]">{Words}</h4>
        </div>
    </div>
);

const Coordinator = () => (
    <div className="flex justify-center flex-wrap">
        {memberData.map((post, index) => (
            <CoordinatorPost
                key={index}
                roll={post.roll}
                Words={post.Words}
                title={post.title}
                imgSrc={post.imgSrc}
                social={post.social}
            />
        ))}
    </div>
);

export default Coordinator;
