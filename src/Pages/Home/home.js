import GuildingPillars from '../../Components/HomeComponent/GuidingPillars/GuidingPillars';
import WhyChoose from '../../Components/HomeComponent/WhyChoose/WhyChoose';
import TestimonialSlider from '../../Components/HomeComponent/TestimonialSlider/TestimonialSlider';
import PhotoPopUpImages from '../../Components/PhotoPopup/Photopopup';
import BlogsForHome from '../../Components/HomeComponent/BlogsForHomePage/BlogsHomePage';
import AnalysisCount from "../../Components/HomeComponent/AnalysisCount/AnalysisCount";
import FAQ from "../../Components/HomeComponent/SuggestionForGoodEnvironment/Suggestion";
import HomeStart from '../../Components/HomeComponent/HomeStart/HomeStart';


export default function Home() {
    return (
        <div className=" justify-center items-center ">
           
            <HomeStart />
            {/* <div className='flex justify-center -mt-40'>  <GuildingPillars />
                <GuildingPillars />
                <GuildingPillars />
            </div> */}
            <AnalysisCount />
            <div className='py-20  bg-[#11463d] lg:px-10 2lg:px-   '>
                <h1 className='text-4xl font-bold text-white mx-auto text-center mb-12'>Why Choose Us?</h1>
            <WhyChoose />
            </div>
            <FAQ />
            <TestimonialSlider />
            <div className='lg:p-20 mx-auto'>
                <h1 className='text-4xl text-center   mx-auto font-semibold   pb-6'>Latest Blogs Post</h1>
                <div className='w-60 mx-auto border-green-500 mb-14 border-[3.5px] rounded'></div>

          <BlogsForHome  />

          </div>
            <PhotoPopUpImages />
          
        </div>




    )
}