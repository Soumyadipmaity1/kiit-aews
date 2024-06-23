import React from 'react';
const Image = 'https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg';

const quotes = {
  card1: [
    {
      quote:
'What began as simply being part of The KAEWS society, has become a cherished family. I gained knowledge about caring for animals and developed invaluable skills in teamwork and collaboration.',
      authorName: "Prasoon Mishra",
      authorTitle: "2230182",
      imageSrc: Image,
    },
  ],
  card2: [
    {
      quote: "KIIT-AEWS gave me a chance to make a real difference. From rescuing animals to fighting for our planet, it's been a rewarding experience. ",
      authorName: "Soumya Rn. Mishra ",
      authorTitle: "2246206",
      imageSrc: Image,
    },
  ],
  card3: [
    {
      quote: "Being in KAEWS has been a delightful experience. A group of hardworking fellows working towards a notable cause.",
      authorName: "Manya Shree Deo",
      authorTitle: "2246114",
      imageSrc: Image,
    },
  ],
    card4: [
      {
        quote: "KAEWS wasn't just digital marketing. It combined professional growth with a meaningful cause. I helped raise awareness for their vital work.",
        authorName: "Nitin Anand",
        authorTitle: "2205223",
        imageSrc: Image,
      },
  ],
      card5: [
        {
          quote: "KAEWS has been more of family than just a society. It provides a platform to learn more on how to work as a team and coordinate well. It’s been a wonderful experience working with KAEWS.",
          authorName: "Mohit Kamal Rath",
          authorTitle: "2246114",
          imageSrc: Image,
        },
  ],
  card6: [
    {
      quote: "Joining KIIT Animal & Environment Welfare Society has been amazing. Working alongside like-minded people, we truly improve lives of animals and the environment.",
      authorName: "Chinmaya pradhan ",
      authorTitle: "2246060",
      imageSrc: Image,
    },
],
};

const TestimonialCard = ({ cardType }) => {
  const selectedQuotes = quotes[cardType] || [];

  return (
    <div className='flex'>
      {selectedQuotes.map((quoteObj, index) => (
        <div key={index} className='w-96 p-2 rounded-xl m-4 border-2 border-green-500 pt-8 px-8 shadow-md shadow-green-600 bg-white'>
          <h4 className='border-l-[3px] rounded-md bg-green-50 border-green-400 p-3'>"{quoteObj.quote}"</h4>
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
