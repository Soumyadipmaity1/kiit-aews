import Aids from "../../Components/EventComponents/EventCards/EventSlider/AIDS/Aids";
import Cleanness from "../../Components/EventComponents/EventCards/EventSlider/Cleanness/cleanness";
import FoodDrive1 from "../../Components/EventComponents/EventCards/EventSlider/FoodDrive1/FoodDrive1";
import FoodDrive2 from "../../Components/EventComponents/EventCards/EventSlider/FoodDrive2/FoodDrive2";
import Paritantra from "../../Components/EventComponents/EventCards/EventSlider/Paritantra/Paritantra";
import Plantation from "../../Components/EventComponents/EventCards/EventSlider/Plantation/Plantation";
import GalleryStart from "../../Components/GalleryComponent/GalleryStart";
import PhotoPopUpImages from "../../Components/PhotoPopup/Photopopup";

export default function Gallery() {
  return (
    <div>
      <GalleryStart />
      <div class="flex items-center space-x-4 mt-14 mx-10 xl:mx-28">
        <div class="flex-grow border-t-[3px]  border-b-[3px] h-2 mt-3  border-black"></div>
        <h1 class="text-green-500 lg:text-5xl sm:text-4xl text-4xl font-bold">Glimpse</h1>
        <div class="flex-grow border-t-[3px]  border-b-[3px] h-2 mt-3  border-black"></div>
      </div>{" "}
      <div className="justify-center flex flex-wrap m-2 lg:my-12 my-8 ">
        <FoodDrive2 />
        <Aids />
        <Paritantra />
        <FoodDrive1 />
        <Cleanness />
        <Plantation />
      </div>
      <PhotoPopUpImages />
    </div>
  );
}
