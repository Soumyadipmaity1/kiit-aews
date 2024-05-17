
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from './TestimonialCard';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows:false,
    pauseOnHover: false,
  };

  return (
    <div className='p-10 pb-28 py-20 bg-white '>
      <h2 className=' text-center text-black text-4xl font-bold mb-4  '> Testimonial </h2>
      <div className='w-40 mx-auto border-green-500 mb-14 border-[3.5px] rounded'></div>
      
      <Slider {...settings}>
       
        <div >
        <div className='flex justify-center'>
        <TestimonialCard cardType="card1" />
        <TestimonialCard cardType="card2" />
        </div>
        </div>

        <div >
        <div className='flex justify-center'>
        <TestimonialCard cardType="card3" />
        <TestimonialCard cardType="card1" />
        </div>
        </div>
        
        <div >

            <div className='flex justify-center'>
        <TestimonialCard cardType="card2" />
        <TestimonialCard cardType="card3" />
        </div>

        </div>

{/* 
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div> */}
        
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
