import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

import Hero_3 from "/Posters/Timeless Triangle Choker Editorial.png";
import Hero_1 from "/Posters/Elegant Brass Dokra Choker Advertisement.png";
import Hero_2 from "/Posters/Pure Brass Bracelet Stack.png";
import Hero_5 from "/Posters/Pure Brass Pearl Choker-1.png";
import Hero_4 from "/Posters/Pure Brass Pearl Choker Elegance-2.png";

import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";

const posters_img = [Hero_1, Hero_2, Hero_3, Hero_4, Hero_5];

const Hero = () => {
  return (
    <div>
      <Swiper
        loop="true"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper"
      >
        {posters_img.map((img) => (
          <SwiperSlide>
            <div className="w-full h-[80vh]">
              <img
                src={img}
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
