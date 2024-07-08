import React from 'react';
import ContactOption from './ContactOption';
import { FaComments, FaHeadset, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const GetInTouch = () => {
  const contactOptions = [
    {
      icon: FaComments,
      title: 'Chat to Support',
      description: ' Speak to our team for instant assistance and support.',
      buttonText: 'Chat with us',
      buttonLink: '#',
    },
    {
      icon: FaHeadset,
      title: 'Email to support',
      description: "Reach out to us via email for detailed help and discussion.",
      buttonText: 'Email us',
      buttonLink: '#',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit us',
      description: 'Drop by our Society HQ for in-person support and queries.',
      buttonText: 'Get directions',
      buttonLink: '#',
    },
    {
      icon: FaPhone,
      title: 'Call us',
      description: ' Contact our team by phone, available weekdays, 8am-5pm.',
      buttonText: 'Call our team',
      buttonLink: '#',
    },
  ];

  return (
    <div className="py-12 px-4">
      <h2 className="text-5xl font-bold text-center 2lg:mb-10 mb-8 text-green-700">Get in touch</h2>
      <p className="text-center text-lg text-gray-500 my-5 mb-16">
      Ready to make a difference for animals? Let's discuss how we can help our furry friends scale new heights together.      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactOptions.map((option, index) => (
          <ContactOption key={index} {...option} />
        ))}
      </div>
    </div>
  );
};

export default GetInTouch;
