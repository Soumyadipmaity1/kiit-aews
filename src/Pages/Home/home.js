import * as React from 'react';
import Button from '@mui/material/Button';
import bgImage from "./BackgroundHome.svg"
import EnvironmentalSuggestion from "../../Components/SuggestionForGoodEnvironment/Suggestion";
import GuildingPillars from '../../Components/GuidingPillars/GuidingPillars';
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
            <EnvironmentalSuggestion />

        </div>




    )
}