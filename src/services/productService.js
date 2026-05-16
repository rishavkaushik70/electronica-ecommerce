export const getProducts = async () => {
  const categories = [
    "smartphones",
    "laptops",
    "tablets",
    "mobile-accessories",
    "charger",
    "electric fan",
    "battery",
    "earphone",
    "speaker",
    "smart-watch",
    "Audio",
  ];

  const responses = await Promise.all(
    categories.map((category) =>
      fetch(`https://dummyjson.com/products/category/${category}`),
    ),
  );

  const data = await Promise.all(responses.map((res) => res.json()));

  return data.flatMap((item) => item.products);
};
