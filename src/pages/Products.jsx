import { useSelector } from "react-redux";
import FilterSection from "../components/FilterSection";
import Loading from "../assets/Loading.webm";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import Pagination from "../components/Pagination";
import Loading2 from "../assets/Loading 2.webm";
import MobileFilter from "../components/MobileFilter";

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const categories = ["All", ...new Set(products.map((item) => item.category))];
  const brandName = ["All", ...new Set(products.map((item) => item.brand))];
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
  };

  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  const filteredData = products?.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
    );
  });
  const dynamicPage = Math.ceil(filteredData?.length / 8);
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <MobileFilter
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
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
            {filteredData?.length > 0 ? (
              <div className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-2 md:grid-cols-4 md:gap-7 gap-2 mt-10">
                  {filteredData
                    ?.slice(page * 8 - 8, page * 8)
                    .map((items, index) => {
                      return <ProductCard key={index} product={items} />;
                    })}
                </div>
                <Pagination
                  pageHandler={pageHandler}
                  page={page}
                  dynamicPage={dynamicPage}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center mx-auto my-auto">
                <video muted autoPlay loop>
                  <source src={Loading2} type="video/mp4" />
                </video>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center h-100">
            <video muted autoPlay loop playsInline preload="auto">
              <source src={Loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
