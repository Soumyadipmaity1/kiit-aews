import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import s1 from './s1.png';
import s2 from './s2.png';
import s3 from './s3.png';
import s4 from './s4.png';

const HomeSlider = () => {
  const sliderImages = [
    { url: s1 },
    { url: s2 },
    { url: s3 },
    { url: s4 },
  ];

  return (
    <div className="relative bg-black z-0">
      <Swiper
        className="   slider-shadow"
        spaceBetween={30}
        effect={'fade'}
        speed={5000}
        autoplay={{
          delay: 100,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
      >
        {sliderImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-black">
              <img
                src={slide.url}
                alt={`Slide ${index + 1}`}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
