





import React from 'react';
const img = "https://assets-global.website-files.com/5d440ec0b47bfbe0f4ca8018/616e6c9bb65c4bc5c7670c86_What%20we%20do%20as%20a%202D%20animation%20company-01%20(1).png"

export default function AboutUsStart () {
    return (
        <div className="flex flex-row-reverse items-center justify-between p-10 bg-[#001131] px-20">
           
           <div className='w-[60%]  px-10 '>
           <h1 className="text-4xl font-bold text-white mb-8">About <span className='text-[#61e045]'>KAEWS</span></h1>
            <p className="text-md text-gray-300  text-justify ">The official KIIT Animal & Environment Welfare Society works hard to keep our environment safe for us as well as for the animals. The main motto of this Society is “Pause for a Cause”. The Society is a group of enthusiastic and experienced people who have great affection towards our Animal friends and Environment. Throughout the year they organize various events related to Animal Rights & Welfare and Environmental Causes. Apart from events, KIIT-AEWS’s Volunteer Wing looks after injured and needy animals in and around Bhubaneswar City in Odisha, India.</p>
     <button className="bg-[#61e045] hover:bg-[#9aef86] text-black font-semibold text-lg px-8 py-2 mt-8 rounded-full">Want to Contribute ?</button>
           </div>
           <div>
<img src={img} alt="image" className="w-full h-auto rounded-lg shadow-lg mt-6 " />'
           </div>
              </div>
    )
}