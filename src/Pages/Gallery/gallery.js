 import Paritantra from "../../Components/EventComponents/EventCards/EventSlider/Paritantra/Paritantra";
import GalleryStart from "../../Components/GalleryComponent/GalleryStart";
import PhotoPopUpImages from "../../Components/PhotoPopup/Photopopup";

 export default function Gallery() {
    return (
        <div>
            <GalleryStart/>
            <div className="justify-center flex flex-wrap m-2 lg:my-12 my-8 ">
      <Paritantra/>
      <Paritantra/>
      <Paritantra/>
      <Paritantra/>

      </div>
            <PhotoPopUpImages />
        </div>
    );
}