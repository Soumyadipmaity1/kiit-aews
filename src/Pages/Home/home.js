import GuildingPillars from "../../Components/HomeComponent/GuidingPillars/GuidingPillars";
import WhyChoose from "../../Components/HomeComponent/WhyChoose/WhyChoose";
import TestimonialSlider from "../../Components/HomeComponent/TestimonialSlider/TestimonialSlider";
import PhotoPopUpImages from "../../Components/PhotoPopup/Photopopup";
import BlogsForHome from "../../Components/HomeComponent/BlogsForHomePage/BlogsHomePage";
import AnalysisCount from "../../Components/HomeComponent/AnalysisCount/AnalysisCount";
import FAQ from "../../Components/HomeComponent/SuggestionForGoodEnvironment/Suggestion";
import HomeStart from "../../Components/HomeComponent/HomeStart/HomeStart";
import HomeSlider from "../../Components/HomeComponent/HomeSlide/HomeSlide";
import { Link } from "react-router-dom";
import { FiArrowRight } from 'react-icons/fi';
export default function Home() {
  return (
    <div className=" justify-center items-center ">
      <div className="">
        <HomeSlider />
        <div className="flex justify-center z-50 sm:-mt-40 m-0">
          {" "}
          <GuildingPillars />{" "}
        </div>
        {/* <HomeStart /> */}
      </div>
      <AnalysisCount />
      <div className="py-20  bg-[#11463d] lg:px-10 2lg:px-   ">
        <h1 className="text-4xl font-bold text-white mx-auto text-center mb-12">
          Why Choose Us?
        </h1>
        <WhyChoose />
      </div>
      <FAQ />
      <TestimonialSlider />
      <div className="lg:p-20 mx-auto">
        <h1 className="text-4xl text-center   mx-auto font-semibold   pb-6">
          Latest Blogs Post
        </h1>
        <div className="w-60 mx-auto border-green-500 mb-14 border-[3.5px] rounded"></div>

        <BlogsForHome />
<Link to="/blogs" className="flex justify-center"> 
<button className="bg-green-600 flex hover:bg-transparent hover:text-green-600 border-4 border-green-600 px-5 my-5 sm:mt-6 sm:mb-0 py-2 font-bold text-white rounded-full transition duration-700 ease-in-out">
Explore More
<FiArrowRight className="w-6 h-6 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />

</button></Link>        
      </div >
      <div className="mx-auto pb-8 bg-gray-100">
      <PhotoPopUpImages />

      <Link to="/gallery" className="flex justify-center">
      <button className="bg-black flex hover:bg-transparent hover:text-black border-4 border-black px-5 my-5 sm:mt-6 sm:mb-0 py-2 font-bold text-white rounded-full transition duration-700 ease-in-out">
        Explore More
        <FiArrowRight className="w-6 h-6 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
</button></Link>        

      </div>
    </div>
  );
}
