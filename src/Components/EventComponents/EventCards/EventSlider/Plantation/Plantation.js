import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import PlantationModal from './PlantationModal';

import Plantation1 from './plantation1.png';
import Plantation2 from './plantation2.png';
import Plantation3 from './plantation3.png';

const Plantation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sliderImages = [
    { url: Plantation1 },
    { url: Plantation2 },
    { url: Plantation3 },
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
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={2000}  
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
                <div className="text-white font-bold text-2xl">Plantation Drive</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <PlantationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Plantation;
