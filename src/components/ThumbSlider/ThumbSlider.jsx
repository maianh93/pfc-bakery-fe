import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/navigation";


// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";

export default function ThumbSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs,Autoplay]}
        className="mySwiper2"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
          <SwiperSlide>
                    <img src="/image/detail-menu/cake/raspberry-ripple-cake/1.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/image/detail-menu/cake/raspberry-ripple-cake/2.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/image/detail-menu/cake/raspberry-ripple-cake/3.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/image/detail-menu/cake/raspberry-ripple-cake/4.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/image/detail-menu/cake/raspberry-ripple-cake/5.webp" />
                </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
         <SwiperSlide>
                    <img src="/image/detail-menu/cake/raspberry-ripple-cake/1.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/image/detail-menu/cake/raspberry-ripple-cake/2.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/image/detail-menu/cake/raspberry-ripple-cake/3.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/image/detail-menu/cake/raspberry-ripple-cake/4.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/image/detail-menu/cake/raspberry-ripple-cake/5.webp" />
                </SwiperSlide>
      </Swiper>
    </>
  );
}

