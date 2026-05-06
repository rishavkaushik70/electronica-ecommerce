export const getCarouselData = async () => {
  try {
    const categories = [
      "smartphones",
      "laptops",
      "tablets",
      "mobile-accessories",
    ];

    const responses = await Promise.all(
      categories.map((category) =>
        fetch(`https://dummyjson.com/products/category/${category}`),
      ),
    );

    const data = await Promise.all(responses.map((res) => res.json()));

    const allProducts = data.flatMap((item) => item.products);

    return allProducts;
  } catch (error) {
    console.error("Home Service Error:", error);
    throw error;
  }
};
