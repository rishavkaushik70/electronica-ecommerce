export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
          );

          const data = await response.json();
          resolve({
            latitude,
            longitude,
            address: data.address,
          });
        } catch (error) {
          reject(error);
        }
      },
      (error) => reject(error),
    );
  });
};
