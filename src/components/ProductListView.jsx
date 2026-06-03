import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/cartProductSlice";
const ProductListView = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="space-y-4 mt-2 rounded-md">
      <div className="bg-gray-100 flex gap-7 items-center p-2 rounded-md">
        <img
          loading="lazy"
          src={product.images?.[0]}
          alt={product.title}
          className="md:h-60 md:w-60 h-25 w-25 rounded-md cursor-pointer"
          onClick={() => navigate(`/products/${product.id}`)}
        />
        <div className="space-y-2">
          <h1 className="font-bold md:text-xl text-lg line-clamp-3 hover:text-red-400 md:w-full w-55 transition-all">
            {product.title}
          </h1>
          <p className="font-semibold flex items-center md:text-lg text-sm">
            ₹
            <span className="md:text-4xl text-3xl">
              {Math.round(product.price)}
            </span>{" "}
            ({product.discountPercentage}% off)
          </p>
          <p className="text-sm">
            FREE delivery{" "}
            <span className="font-semibold">{product.shippingInformation}</span>{" "}
            <br />
            Or fastest delivery{" "}
            <span className="font-semibold">{product.shippingInformation}</span>
          </p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-red-500 text-white px-3 py-1 rounded-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
