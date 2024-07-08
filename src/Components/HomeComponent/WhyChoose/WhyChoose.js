import React from 'react';
import { FaHandshake, FaArrowRight } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GrAchievement } from "react-icons/gr";

const WhyChooseUs = () => {
  const cards = [
    {
      icon: <GrAchievement className="text-5xl  text-green-600 mt-2 mx-auto" />,
      title: 'A Voice for Noble Cause',
      description: ' Join KIIT AEWS and become a powerful voice for environment and the animals. Contribute fresh ideas, actively participate in impactful projects, seminars, workshops, campaigns, etc and be part of shaping a more sustainable tomorrow.',
      link: '/events', 
    },
    {
      icon: <FaHandshake className="text-5xl text-green-600 mt-2  mx-auto" />,
      title: 'Expand Connections ',
      description: 'Connect with animal welfare and environmental NGOs and professionals. Gain experience in project management, event planning, and fundraising to bolster your resume and demonstrate dedication to conservation and welfare causes.',
      link: '/members', 
    },
    {
      icon: <BsGraphUpArrow className="text-5xl  text-green-600 mt-2 mx-auto" />,
      title: 'Skill Development',
      description: 'A society to develop your skills such as leadership, communication,teamwork, problem solving etc. All ideas are welcome in both technical and non- technical departments. We offer collaborative projects for better skill development.',
      link: '/blogs', 
    },
 
    {
        icon: <HiMiniUserGroup className="text-5xl  text-green-600 mt-2 mx-auto" />,
        title: 'Vibrant community',
        description: 'Experience a vibrant community at KIIT AEWS with fun activities, games, social gatherings, and bonding experiences. We offer engaging events and a supportive atmosphere that combines making a difference with enjoyable moments.',
        link: '/about', 
      },
  ];

  return (
    <>
    <div className=" lg:flex-row lg:justify-center hidden 2lg:flex justify-center lg:space-x-4 lg:p-6  ">
      {cards.map((card, index) => (
        <div key={index} className="bg-green-200 hover:bg-[#a4f5ce] lg:w-96 w-80 lg:p-6 p-5  m-3 lg:m-0 rounded-lg text-center  hover:scale-105 transform transition-transform duration-300">
          <div className="mb-4">{card.icon}</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h2>
          <p className="mb-4 text-gray-700 text-justify text-sm font-semibold">{card.description}</p>
          <a 
            href={card.link} 
            className="flex items-center justify-center text-black font-semibold hover:underline hover:text-green-700 transition duration-300"
          >
            Learn More <FaArrowRight className="ml-2" />

          </a>
        </div>
      ))}
    </div>
    <div className="flex lg:flex-row flex-wrap lg:flex-none 2lg:hidden lg:justify-center  justify-center lg:space-x-4 lg:p-6  ">
    {cards.map((card, index) => (
      <div key={index} className="bg-green-200 hover:bg-[#a4f5ce] lg:w-96 w-80 lg:p-6 p-5  m-3 rounded-lg text-center  hover:scale-105 transform transition-transform duration-300">
        <div className="mb-4">{card.icon}</div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h2>
        <p className="mb-4 text-gray-700 text-justify text-sm font-semibold">{card.description}</p>
        <a 
          href={card.link} 
          className="flex items-center justify-center text-black font-semibold hover:underline hover:text-green-700 transition duration-300"
        >
          Learn More <FaArrowRight className="ml-2" />

        </a>
      </div>
    ))}
  </div>
  </>
  );
};

export default WhyChooseUs;
