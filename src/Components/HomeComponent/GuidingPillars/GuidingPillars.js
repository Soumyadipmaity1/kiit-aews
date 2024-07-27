import React from 'react';
import bgImage from './demoPic.png';
import { position } from 'dom-helpers';

const profiles = [
  {
    name: 'Achutya Samanta',
    detail: 'Dr. Achyuta Samanta, the founder of KIIT University, is a visionary educationalist and philanthropist. His dedication transformed KIIT into a premier institution, providing quality education to thousands. Dr. Samanta also founded Kalinga Institute of Social Sciences (KISS), offering free education and support to tribal children, fostering social empowerment.',
    photo: 'https://media.licdn.com/dms/image/C5103AQEw-PdQ8Ch_xA/profile-displayphoto-shrink_200_200/0/1522940978285?e=2147483647&v=beta&t=H9-ZkQs-omOZr1A7W1VEmR8Lbub1-cUZ59KPdXZdFCU',
  position: 'Founder, KIIT & KISS', 
},
  {
    name: 'Prof. Saranjit Singh',
    detail: "Professor Saranjit Singh, the Vice Chancellor of KIIT University, is a distinguished academic leader. With a rich background in education and research, he drives the university's vision of innovation and excellence. His leadership fosters a dynamic learning environment, emphasizing academic rigor, inclusivity, and global engagement for students and faculty alike. ",
    photo: 'https://crf.kiit.ac.in/wp-content/uploads/2023/10/Ksome-Awareness-Camp-2.jpg',
    position: 'Vice Chancellor, KIIT', 
  
},
  {
    name: 'Dr. Shyam Sundar Behura',
detail:"Dr. Shyam Sundar Behura, Deputy Director of Student Services at KIIT University, is dedicated to student welfare and development. He oversees various student-centric initiatives, ensuring a supportive and vibrant campus life. His efforts significantly enhance the overall educational experience and well-being of KIIT's diverse student community.", 
   photo: 'https://kids.kiit.ac.in/wp-content/uploads/2020/08/Shyam-Behura.jpg',
    position: 'Additional Registrar, KIIT', 
  
},

  ];

export default function GuidingPillars() {
  return (
    <div className="flex flex-wrap justify-center p-7 sm:p-0">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="bg-slate-100 guide-mobile sm:m-4 my-3 2lg:w-80 lg:w-64 sm:w-48 w-full lg:p-4 sm:p-2 p-4 text-justify border-2 border-green-700 hover:border-green-500 rounded-2xl sm:my-20 transform hover:scale-110 transition-transform duration-500"
        >
          <div className=" sm:flex hidden justify-center lg:-mt-20 sm:-mt-16">
            <img
              className="lg:w-28 lg:h-28 w-20 h-20 object-cover rounded-full border-4 border-green-500"
              src={profile.photo}
              alt={profile.name}
            />
          </div>
          <div className="text-center pt-2">
            <p className="lg:py-4 2lg:p-2 lg:p-1 sm:p-0.5 lg:text-sm sm:text-[10px] text-sm sm:text-black text-gray-100 sm:font-light text-justify">
              {profile.detail}
            </p>
            <p className='m-1 sm:mt-1 mt-3 font-bold lg:text-base sm:text-[13px] text-[18px] sm:text-green-900 text-green-100'>{profile.name}</p>
            <p className='sm:m-1  sm:mb-4 font-semibold  sm:text-[12px] lg:text-base   text-orange-500'>{profile.position}</p>
          </div>
          <div className="sm:flex hidden justify-center lg:-mb-[45px] sm:-mb-[26px]">
            <i className="bx bx-log-in-circle lg:text-[30px] sm:text-[25px] lg:px-6 sm:px-4 text-white  bg-green-500 rounded-full lg:p-2 sm:p-1 transform hover:scale-110 transition-transform duration-500"></i>
          </div>
        </div>
      ))}
    </div>
  );
}
