import { useEffect, useState } from "react";
import { getCarouselData } from "../services/homeService";

const useCarousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarousel = async () => {
      try {
        const data = await getCarouselData();
        setCarouselData(data);
      } catch (error) {
        console.error("Carousel fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarousel();
  }, []);

  return { carouselData, loading };
};

export default useCarousel;
