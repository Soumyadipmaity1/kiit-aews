

import Button from '@mui/material/Button';
import bgImage from './BackgroundHome.svg';
 export default function HomeStart(){
    return (

        <div className="relative scroll-pt-96 bg-home bg-[#fff6a4]">
        <img className="xl:h-screen w-full" src={bgImage} alt="Backgroundphoto" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center pb-60 justify-center">
            <p className="text-[#d48e66] text-4xl m-16 font-bold ">We are the official KAEWS</p>
            <Button variant="contained" >Know More</Button>

        </div>
    </div>
    );
 }