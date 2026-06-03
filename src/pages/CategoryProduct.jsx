import { useNavigate, useParams } from "react-router-dom";
import Loading from "../assets/Loading.webm";
import { ChevronLeft } from "lucide-react";
import ProductListView from "../components/ProductListView";
import { useSelector } from "react-redux";
import { useState } from "react";

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([]);
  const { category } = useParams();
  const { products } = useSelector((state) => state.products);
  const categoryProducts = products.filter(
    (item) => item.category === category,
  );

  const navigate = useNavigate();

  return (
    <div>
      {categoryProducts.length > 0 ? (
        <div className="max-w-6xl mx-auto mt-10 mb-10 px-4">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center"
          >
            <ChevronLeft /> Back
          </button>
          {categoryProducts.map((product, index) => {
            return <ProductListView key={product.id} product={product} />;
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center h-100">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
