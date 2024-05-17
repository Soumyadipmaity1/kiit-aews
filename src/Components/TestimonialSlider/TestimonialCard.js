import React from 'react';
const Image = 'https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg';

const quotes = {
  card1: [
    {
      quote: "The love for all living creatures is the most noble attribute of man.",
      authorName: "Charles Darwin",
      authorTitle: "Founder of the theory of evolution",
      imageSrc: Image,
    },
  ],
  card2: [
    {
      quote: "The only thing we have to fear is fear itself.",
      authorName: "Franklin D. Roosevelt",
      authorTitle: "32nd President of the United States",
      imageSrc: Image,
    },
  ],
  card3: [
    {
      quote: "Life is what happens when you're busy making other plans.",
      authorName: "John Lennon",
      authorTitle: "Singer-songwriter",
      imageSrc: Image,
    },
  ],
};

const TestimonialCard = ({ cardType }) => {
  const selectedQuotes = quotes[cardType] || [];

  return (
    <div className='flex'>
      {selectedQuotes.map((quoteObj, index) => (
        <div key={index} className='w-96 p-5 rounded-xl m-4 border-2 border-green-500 pt-8 px-8 shadow-md shadow-green-600 bg-white'>
          <h4>"{quoteObj.quote}"</h4>
          <div className='flex pt-3'>
            <img className='w-20 py-3 bg-[#fd9ab9] m-3 rounded-full' src={quoteObj.imageSrc} alt={quoteObj.authorName} />
            <div className='mt-5'>
              <h3 className='text-xl text-green-500 font-semibold'>{quoteObj.authorName}</h3>
              <h4 className='text-sm'>{quoteObj.authorTitle}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
