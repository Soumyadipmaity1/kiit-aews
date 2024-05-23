import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export default function ContactSymbol() {
  return (
    <div className="contact-symbol bg-[#150d44e5] m-28 rounded-xl w-[400px] h-[500px] p-12">
      <h1 className="text-4xl text-green-400 font-bold">Get in touch</h1>
      <h3 className="text-sm py-8 text-white font-s">
        KIIT Animal & Environment Welfare Society (AEWS) aims to protect animals and the environment, organizing events and aiding injured animals around Bhubaneswar. Their motto is "Pause for a Cause."
      </h3>
      <div className="mt-10">
        <div className="flex my-5 ">
          <MdEmail className="text-green-400 text-xl  mr-4" />
          <p className="text-white font-semibold">kiitaews@gmail.com</p>
        </div>
        <div className="flex my-5 items-center">
          <MdPhone className="text-green-400  text-xl mr-4" />
          <p className="text-white font-semibold">+91 1234567890</p>
        </div>
        <div className="flex my-5 ">
          <MdLocationOn className="text-green-400 text-xl  mr-4" />
          <p className="text-white font-semibold">KSAC, KIIT University, Odisha, India</p>
        </div>
      </div>
    </div>
  );
}

