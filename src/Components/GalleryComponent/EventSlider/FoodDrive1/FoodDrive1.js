import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Food1Modal from './FoodDriveModal';

import Fd1 from './fd1.png';
import Fd2 from './fd2.png';
import Fd3 from './fd3.png';
import Fd6 from './fd6.png';
import Fd8 from './fd8.png';
const FoodDrive1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sliderImages = [
    { url: Fd1 },
    { url: Fd2 },
    { url: Fd3 },
    { url: Fd6 },
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
        speed={1000}  // Adjust speed for smoother transition
        autoplay={{
          delay: 2800,
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
                className="w-[500px] h-[310px] transform transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black flex items-end justify-start px-5 py-3">
                <div className="text-white font-bold text-2xl">Food Drive</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Food1Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default FoodDrive1;
