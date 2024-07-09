import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import ParitantraModal from './ImageModal';

import Paritantra1 from './paritantra1.png';
import Paritantra2 from './paritantra2.png';
import Paritantra3 from './paritantra3.png';
import Paritantra4 from './paritantra4.png';
import Paritantra5 from './paritantra5.png';
import Paritantra6 from './paritantra6.jpg';

const Paritantra = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sliderImages = [
    { url: Paritantra1 },
    { url: Paritantra2 },
    { url: Paritantra3 },
    { url: Paritantra4 },
    { url: Paritantra5 },
    { url: Paritantra6 },
  ];

  const handleSlideClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative lg:m-2 ">
      <Swiper
        className="w-[400px] border-4 border-black rounded-xl slider-shadow"
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
      >
        {sliderImages.map((slide, index) => (
          <SwiperSlide key={index} onClick={handleSlideClick}>
            <div className="relative w-[400px] h-[230px] cursor-pointer">
              <img src={slide.url} alt={`Slide ${index + 1}`} className="w-[500px] h-[310px]" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black flex items-end justify-start px-5 py-3">
                <div className="text-white font-bold text-2xl">Paritantra</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ParitantraModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Paritantra;
