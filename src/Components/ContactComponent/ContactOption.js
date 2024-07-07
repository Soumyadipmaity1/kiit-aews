import React from 'react';

const ContactOption = ({ icon: Icon, title, description, buttonText, buttonLink }) => {
  return (
    <div className="p-6 border-green-300 border-[1px] rounded-lg shadow-sm text-start">
      <div className="mb-4 bg-green-100 w-12 rounded-lg p-2 ">
       <Icon className="text-3xl text-green-700 " />

      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={buttonLink}
        className="inline-block px-4 py-1 bg-transparent  text-green-600 font-semibold mt-4 hover:text-white border-green-600 border-2 rounded-md hover:bg-green-700 transition"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default ContactOption;
