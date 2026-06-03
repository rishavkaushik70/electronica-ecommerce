import { useEffect, useState } from "react";
import { getCurrentLocation } from "../services/locationService";
import { toast } from "react-toastify";

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchLocation = async () => {
    try {
      setLoading(true);
      const data = await getCurrentLocation();
      setLocation(data);
    } catch (error) {
      console.error("Location fetch failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return { location, loading, fetchLocation };
};

export default useLocation;
