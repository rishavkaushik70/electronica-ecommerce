import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { useNavigate } from "react-router-dom";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Carousel = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      autoplay={{ delay: 2000 }}
      // pagination={{ clickable: true }}
      navigation
    >
      {data?.slice(0, 10)?.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#0f0c29]">
            <div className="flex flex-col gap-10 px-4 py-5 text-center items-center justify-center md:flex-row md:h-160 md:text-left md:py-0 lg:h-170 2xl:h-200">
              <div className="space-y-6">
                <h3 className="text-red-500 font-bold font-sans text-xl">
                  Powering Your World With The Best In Electronics.
                </h3>
                <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-125 text-white">
                  {item.title}
                </h1>
                <p className="md:w-125 line-clamp-3 text-gray-400 pr-7">
                  {item.description}
                </p>
                <button
                  className="bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2"
                  onClick={() => navigate("/products")}
                >
                  Shop now
                </button>
              </div>
              <div className="flex justify-center items-center">
                <div>
                  <img
                    loading="lazy"
                    src={item.images[0]}
                    alt={item.title}
                    className="rounded-full border py-5 px-5 w-90 hover:scale-105 transition-all shadow-2xl shadow-red-400 md:w-120 2xl:w-170"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
