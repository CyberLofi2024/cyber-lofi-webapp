import React from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";

function CyberOpenSwiper() {
  const onRenderSilder = () => {
    const slideList = [
      { name: "image 1" },
      { name: "image 2" },
      { name: "image 3" },
      { name: "image 4" },
      { name: "image 5" },
      { name: "image 6" },
      { name: "image 7" },
      { name: "image 8" },
      { name: "image 9" },
      { name: "image 10" },
    ];

    return slideList?.map((item) => {
      return (
        <SwiperSlide key={item.name}>
          <Image
            width={50000}
            height={50000}
            alt={item.name}
            src="/medias/img_1.gif"
            className="h-[60vh] rounded-xl object-cover"
          />
        </SwiperSlide>
      );
    });
  };
  return (
    <div className="pt-3 md:pt-7">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={20}
        navigation
        keyboard
        freeMode
        speed={2000}
        loop
      >
        {onRenderSilder()}
      </Swiper>
    </div>
  );
}

export default CyberOpenSwiper;
