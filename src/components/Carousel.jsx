import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Carousel = ({ data }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      autoplay={{ delay: 2000 }}
      // pagination={{ clickable: true }}
      navigation
    >
      {data?.slice(0, 7)?.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10]">
            <div className="flex gap-10 justify-center h-150 items-center px-4">
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
                <button className="bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2">
                  Shop now
                </button>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-full max-w-138 aspect-square rounded-full flex items-center justify-center shadow-2xl shadow-red-400 hover:scale-105 transition-all">
                  <img
                    src={item.images?.[0]}
                    alt={item.title}
                    className="w-[85%] h-[90%] object-contain"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=No+Image";
                    }}
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
