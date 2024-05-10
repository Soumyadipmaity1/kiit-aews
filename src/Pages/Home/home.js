import Footer from "../../Components/Footer/footer"
import * as React from 'react';
import Button from '@mui/material/Button';
import bgImage from "./BackgroundHome.svg"
import EnvironmentalSuggestion from "../../Components/SuggestionForGoodEnvironment/Suggestion";
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
            <EnvironmentalSuggestion />


            <div class="bg-[#ff5b13]   w-80 py-4 px-2  border-2 border-blue-900 hover:border-2  hover:border-indigo-500  rounded-2xl my-20 transform hover:scale-110 transition-transform duration-500">
                <div class="flex justify-center -mt-20">
                    <img
                        class="w-28 h-28 object-cover rounded-full border-4 border-indigo-500"
                        src={bgImage}
                    />
                </div>
                <div class="text-center  pt-2">
                    <p class="py-4 text-sm font-extralight text-gray-200">
                        lorem ipsum dolor sit amet, consectetur adipiscing
                        lorem ipsum dolor sit amet, consectetur adipiscing            lorem ipsum dolor sit amet, consectetur adipiscing
                        lorem ipsum dolor sit amet, consectetur adipiscing            lorem ipsum dolor sit amet, consectetur adipiscing
                        lorem ipsum dolor sit amet, consectetur adipiscing            lorem ipsum dolor sit amet, consectetur adipiscing
                        lorem ipsum dolor sit amet, consectetur adipiscing            lorem ipsum dolor sit amet, consectetur adipiscing
                        lorem ipsum dolor sit amet, consectetur adipiscing            lorem ipsum dolor sit amet, consectetur adipiscing
                        lorem ipsum dolor sit amet, consectetur adipiscing            lorem ipsum dolor sit amet, consectetur adipiscing
                        lorem ipsum dolor sit amet, consectetur adipiscing            lorem ipsum dolor sit amet, consectetur adipiscing
                        lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>

                </div>
                <div class="flex justify-center -mb-20">
                    <img
                        class="w-28 h-28 object-cover rounded-full border-4 border-indigo-500"
                        src={bgImage}
                    />
                </div>

            </div>


        </div>

    )
}