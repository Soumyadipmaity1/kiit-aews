
const EventImages = ({ image1Src, image2Src }) => {
    return (
        <div className=" flex  p-5">
            <img className="w-1/2 mr-4 rounded-3xl" src={image1Src} alt="" />
            <img className="w-1/2  rounded-3xl" src={image2Src} alt="" />
        </div>
    );
};

export default EventImages;
