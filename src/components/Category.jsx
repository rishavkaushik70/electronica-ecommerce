const Category = ({ categories }) => {
  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex gap-4 items-center justify-between py-8">
        {categories?.map((item, index) => (
          <div key={index}>
            <button className="uppercase bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer hover:scale-105 transition-all">
              {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
