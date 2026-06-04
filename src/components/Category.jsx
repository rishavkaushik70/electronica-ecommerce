import { useNavigate } from "react-router-dom";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4">
        {categories?.map((item, index) => (
          <div key={index}>
            <button
              className="uppercase bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer hover:scale-105 transition-all"
              onClick={() => navigate(`/category/${item}`)}
            >
              {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
