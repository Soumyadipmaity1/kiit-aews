import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <>
      <div className="p-10 pb-28 hidden lg:block py-20 bg-white ">
        <h2 className=" text-center text-black text-4xl font-bold mb-4  ">
          {" "}
          Testimonial{" "}
        </h2>
        <div className="w-40 mx-auto border-green-500 mb-14 border-[3.5px] rounded"></div>

        <Slider {...settings}>
          <div>
            <div className="flex justify-center">
              <TestimonialCard cardType="card1" />
              <TestimonialCard cardType="card2" />
            </div>
          </div>

          <div>
            <div className="flex justify-center">
              <TestimonialCard cardType="card3" />
              <TestimonialCard cardType="card4" />
            </div>
          </div>

          <div>
            <div className="flex justify-center">
              <TestimonialCard cardType="card5" />
              <TestimonialCard cardType="card6" />
            </div>
          </div>
        </Slider>
      </div>
      <div className="p-5 pb-28 lg:hidden block py-20 bg-white ">
        <h2 className=" text-center text-black text-4xl font-bold mb-4  ">
          {" "}
          Testimonial{" "}
        </h2>
        <div className="w-40 mx-auto border-green-500 mb-14 border-[3.5px] rounded"></div>

        <Slider {...settings}>
          <div>
            <div className="flex justify-center">
              <TestimonialCard cardType="card1" />
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <TestimonialCard cardType="card2" />
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <TestimonialCard cardType="card3" />
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <TestimonialCard cardType="card4" />
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <TestimonialCard cardType="card5" />
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <TestimonialCard cardType="card6" />
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <TestimonialCard cardType="card1" />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default TestimonialSlider;
