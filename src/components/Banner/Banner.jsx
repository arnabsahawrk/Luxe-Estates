// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const Banner = () => {
  return (
    <div className="relative">
      <div>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          className="lg:h-[600px]"
        >
          <SwiperSlide>
            <img
              className="w-full object-cover"
              src="https://i.postimg.cc/xqrGswmT/banner-pic-3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full object-cover"
              src="https://i.postimg.cc/d1jH9v4J/banner-pic-1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full object-cover"
              src="https://i.postimg.cc/wB3VjQ9z/banner-pic-2.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 z-10 bg-[#000] bg-opacity-50  text-white p-8 text-center overflow-hidden">
        <h2 className="text-base md:text-3xl lg:text-4xl font-bold">
          Your Property Is Our Priority
        </h2>
        <p className="text-xs md:text-lg max-w-[600px] px-4 text-gray-400">
          At Luxe Estates, we redefine property management with excellence and
          personalized service. Trust us to prioritize your unique investment,
          from beachfront villas to exclusive penthouses.
        </p>
        <button
          rel="noopener noreferrer"
          className="px-2 md:px-4 py-1 md:py-2 font-semibold text-xs md:text-base bg-[#5EA51D] rounded-lg transition duration-300 ease-in-out hover:bg-green-600"
        >
          View Estates
        </button>
      </div>
    </div>
  );
};

export default Banner;
