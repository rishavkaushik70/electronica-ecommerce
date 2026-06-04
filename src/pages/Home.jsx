import { useSelector } from "react-redux";
import Carousel from "../components/Carousel";
import Category from "../components/Category";
import Features from "../components/Features";
import MiddleBanner from "../components/MiddleBanner";
import Loading from "../assets/Loading.webm";

const Home = () => {
  const { products, loading } = useSelector((state) => state.products);

  if (loading)
    return (
      <div className="flex items-center justify-center h-100">
        <video muted autoPlay loop playsInline preload="auto" controls={false}>
          <source src={Loading} type="video/webm" />
        </video>
      </div>
    );

  const categories = [...new Set(products.map((item) => item.category))];

  return (
    <>
      <Carousel data={products} />
      <Category categories={categories} />
      <MiddleBanner />
      <Features />
    </>
  );
};

export default Home;
