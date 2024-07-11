import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Food2Modal from './FoodDrive2Modal';

import Fd1 from './fd1.png';
import Fd2 from './fd2.png';
import Fd3 from './fd3.png';
import Fd4 from './fd4.png';
import Fd5 from './fd5.png';
import Fd6 from './fd6.png';
import Fd7 from './fd7.png';
import Fd8 from './fd8.png';

const FoodDrive2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sliderImages = [
    { url: Fd1 },
    { url: Fd2 },
    // { url: Fd3 },
    { url: Fd4 },
    { url: Fd5 },
     { url: Fd6},
     { url: Fd7},
    { url: Fd8 },
  ];

  const handleSlideClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative lg:m-2 m-1 my-2">
      <Swiper
        className="w-[400px] border-4 border-black rounded-xl slider-shadow"
        spaceBetween={30}
        effect={'fade'}
        speed={500}  
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
   
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
      >
        {sliderImages.map((slide, index) => (
          <SwiperSlide key={index} onClick={handleSlideClick}>
            <div className="relative w-[400px] h-[230px] cursor-pointer group">
              <img
                src={slide.url}
                alt={`Slide ${index + 1}`}
                className="w-[500px] h-[310px] object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black flex items-end justify-start px-5 py-3">
                <div className="text-white font-bold text-2xl">Food Drive 2.O</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Food2Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default FoodDrive2;
