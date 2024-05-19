import HomeStart from "../../Components/HomeStart/HomeStart";

import EnvironmentalSuggestion from "../../Components/SuggestionForGoodEnvironment/Suggestion";
import GuildingPillars from '../../Components/GuidingPillars/GuidingPillars';
import WhyChoose from '../../Components/WhyChoose/WhyChoose';
import TestimonialSlider from '../../Components/TestimonialSlider/TestimonialSlider';
import PhotoPopUpImages from '../../Components/PhotoPopup/Photopopup';
import BlogsForHome from '../../Components/BlogsForHomePage/BlogsHomePage';

export default function Home() {
    return (
        <div className=" justify-center items-center ">
           
            <HomeStart />
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