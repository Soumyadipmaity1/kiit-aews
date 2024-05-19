import * as React from 'react';
import Button from '@mui/material/Button';
import bgImage from "./BackgroundHome.svg"
import EnvironmentalSuggestion from "../../Components/SuggestionForGoodEnvironment/Suggestion";
import GuildingPillars from '../../Components/GuidingPillars/GuidingPillars';
import WhyChoose from '../../Components/WhyChoose/WhyChoose';
import TestimonialSlider from '../../Components/TestimonialSlider/TestimonialSlider';
import PhotoPopUpImages from '../../Components/PhotoPopup/Photopopup';
import BlogsForHome from '../../Components/BlogsForHomePage/BlogsHomePage';

export default function Home() {
    return (
        <div className=" justify-center items-center ">
            <div className="relative bg-home bg-[#fff6a4]">
                <img className="xl:h-screen w-full" src={bgImage} alt="Backgroundphoto" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center pb-60 justify-center">
                    <p className="text-[#d48e66] text-4xl m-16 font-bold ">We are the official KAEWS</p>
                    <Button variant="contained" >Know More</Button>

                </div>
            </div>

            <div className='flex justify-center -mt-40'>  <GuildingPillars />
                <GuildingPillars />
                <GuildingPillars />
            </div>
            <div className='my-20 p-10'>
                <h1 className='text-4xl font-bold mb-20 mx-auto text-center'>Why Choose Us?</h1>
            <WhyChoose />
            </div>
            <EnvironmentalSuggestion />
            <TestimonialSlider />
            <div className='p-20 mx-auto'>
                <h1 className='text-4xl text-center   mx-auto font-semibold   pb-6'>Latest Blogs Post</h1>
                <div className='w-60 mx-auto border-green-500 mb-14 border-[3.5px] rounded'></div>

          <BlogsForHome  />

          </div>
            <PhotoPopUpImages />
      
        </div>




    )
}