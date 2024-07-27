import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import CleannessModal from './cleannessModal';

import Cleanness1 from './cleanness1.png';
import Cleanness2 from './cleanness2.png';
import Cleanness3 from './cleanness3.png';
import Cleanness4 from './cleanness4.png';

const Cleanness = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sliderImages = [
    { url: Cleanness1 },
    { url: Cleanness2 },
    { url: Cleanness3 },
    { url: Cleanness4 },
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
          delay: 3000,
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
                <div className="text-white font-bold text-2xl">Cleanliness Drive</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <CleannessModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Cleanness;
