import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

import Paritantra1 from './paritantra1.png'
import Paritantra2 from './paritantra2.png'
import Paritantra3 from './paritantra3.png'
import Paritantra4 from './paritantra4.png'
import Paritantra5 from './paritantra5.png'
import Paritantra6 from './paritantra6.jpg'

const Paritantra = () => {
  const slides = [
    {
      url: Paritantra1,
    },
    {
      url: Paritantra2,
    },
    {
      url: Paritantra3,
    },
    {
      url: Paritantra4,
    },
    {
      url: Paritantra5,
    },
    {
      url: Paritantra6,
    }
  ];

  return (
    <div className='relative  m-10'>
      <Swiper
        className="w-[500px] border-4 border-black rounded-xl slider-shadow"
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-[550px] h-[320px] ">
              <img src={slide.url} alt={`Slide ${index + 1}`} className="w-[500px] h-[310px]" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black flex items-end justify-start px-5 py-3">
                <div className="text-white font-bold text-2xl">Paritantra</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Paritantra;
