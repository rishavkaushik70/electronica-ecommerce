import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/Loading.webm";
import Breadcrums from "../components/Breadcrums";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartProductSlice";
const SingleProduct = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);
  const product = products.find((item) => item.id === Number(id));
  const dispatch = useDispatch();

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <video muted autoPlay loop>
          <source src={Loading} type="video/webm" />
        </video>
      </div>
    );
  }

  const OriginalPrice = Math.round(
    product.price + (product.discountPercentage / 100) * product.price,
  );

  return (
    <div className="px-4 pb-4 md:px-0">
      <Breadcrums title={product.title} />
      <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* product image */}
        <div className="w-full">
          <img
            loading="lazy"
            src={product.images?.[0]}
            alt={product.title}
            className="rounded-2xl w-full object-contain"
          />
        </div>
        {/* product details */}
        <div className="flex flex-col gap-6">
          <h1 className="md:text-3xl text-xl font-bold text-gray-800">
            {product.title}
          </h1>
          <div className="text-gray-700">
            {product.brand?.toUpperCase()} /{product.category?.toUpperCase()}
          </div>
          <p className="text-xl text-red-500 font-bold">
            ₹{Math.round(product.price)}{" "}
            <span className="line-through text-gray-700">₹{OriginalPrice}</span>{" "}
            <span className="bg-red-500 text-white px-4 py-2 rounded-full">
              {product.discountPercentage}% Discount
            </span>
          </p>
          <p className="text-gray-600">{product.description}</p>

          {/* qunatity selector */}
          <div className="flex items-center gap-4">
            <label htmlFor="" className="text-sm font-medium text-gray-700">
              Quantity:
            </label>
            <input
              type="number"
              min={1}
              value={1}
              className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="px-6 flex gap-2 py-2 text-lg bg-red-500 text-white rounded-md"
            >
              <IoCartOutline className="w-6 h-6" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
