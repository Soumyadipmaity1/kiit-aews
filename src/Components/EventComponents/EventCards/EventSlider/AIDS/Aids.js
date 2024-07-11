import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import AidsModal from './AidsModal';

import Aids1 from './aids1.png';
 import Aids2 from './aids2.png';
  import Aids3 from './aids3.png';

const Aids = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sliderImages = [
    { url: Aids1 },
    { url: Aids2 },
    { url: Aids3 },

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
        speed={1000}  
        autoplay={{
          delay: 2500,
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
                <div className="text-white font-bold text-2xl">Aids Day</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <AidsModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Aids;
