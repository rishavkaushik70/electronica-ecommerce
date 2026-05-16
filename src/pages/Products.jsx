import { useSelector } from "react-redux";
import FilterSection from "../components/FilterSection";
import Loading from "../assets/Loading.webm";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const categories = ["All", ...new Set(products.map((item) => item.category))];
  const brandName = ["All", ...new Set(products.map((item) => item.brand))];
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const filtereddata = products?.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
    );
  });

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        {products?.length > 0 ? (
          <div className="flex gap-8">
            <FilterSection
              categories={categories}
              brandName={brandName}
              search={search}
              setSearch={setSearch}
              brand={brand}
              setBrand={setBrand}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              category={category}
              setCategory={setCategory}
              handleCategoryChange={handleCategoryChange}
              handleBrandChange={handleBrandChange}
            />
            <div className="grid grid-cols-4 gap-7 mt-10">
              {filtereddata?.map((items, index) => {
                return <ProductCard key={index} product={items} />;
              })}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-100">
            <video muted autoPlay loop>
              <source src={Loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
