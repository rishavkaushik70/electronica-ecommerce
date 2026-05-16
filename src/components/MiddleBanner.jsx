import banner from "../assets/banner.jpg";
const MiddleBanner = () => {
  return (
    <div className="bg-gray-100 md:py-24">
      <div
        className="relative max-w-370 mx-auto md:rounded-2xl pt-28 bg-cover h-137.5 md:h-130"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 md:rounded-2xl opacity-90 flex items-center justify-center">
          <div className="text-center text-white px-7">
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4">
              Next-Gen Electronics at Your Fingertips
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Discover the latest tech innovations with unbeatable prices and
              free shipping on all orders.
            </p>
            <button className="bg-red-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-2000 cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleBanner;
