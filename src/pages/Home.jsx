import Carousel from "../components/Carousel";
import Category from "../components/Category";
import useCarousel from "../hooks/useCarousel";

const Home = () => {
  const { carouselData, loading } = useCarousel();
  console.log(carouselData);

  if (loading)
    return (
      <div className="animate-pulse font-bold text-4xl text-center mt-50">
        Loading...
      </div>
    );
  const categories = [...new Set(carouselData.map((item) => item.category))];
  console.log(categories);

  return (
    <>
      <Carousel data={carouselData} />
      <Category categories={categories} />
    </>
  );
};

export default Home;
