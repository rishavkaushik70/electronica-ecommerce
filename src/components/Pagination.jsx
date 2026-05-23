const getPages = (current, total) => {
  const pages = [];

  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, 4, "...", total);
    } else if (current >= total - 2) {
      pages.push(1, "...", total - 3, total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "...", total);
    }
  }

  return pages;
};

const Pagination = ({ pageHandler, page, dynamicPage }) => {
  return (
    <div className="mt-10 flex justify-center items-center gap-3 mb-10">
      {/* Back Button */}
      <button
        disabled={page === 1}
        onClick={() => pageHandler(page - 1)}
        className={`px-4 py-2 rounded-md text-white transition-all ${
          page === 1
            ? "bg-red-300 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600 cursor-pointer"
        }`}
      >
        Back
      </button>

      {/* Page Numbers */}
      {getPages(page, dynamicPage).map((item, index) => (
        <span
          key={`${item}-${index}`}
          onClick={() => typeof item === "number" && pageHandler(item)}
          className={`px-3 py-2 rounded-md transition-all ${
            typeof item === "number"
              ? "cursor-pointer"
              : "cursor-default select-none"
          } ${
            item === page
              ? "bg-red-500 text-white font-bold"
              : "text-red-500 hover:bg-red-100"
          }`}
        >
          {item}
        </span>
      ))}

      {/* Next Button */}
      <button
        disabled={page === dynamicPage}
        onClick={() => pageHandler(page + 1)}
        className={`px-4 py-2 rounded-md text-white transition-all ${
          page === dynamicPage
            ? "bg-red-300 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600 cursor-pointer"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
