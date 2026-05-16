import { Outlet } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import useLocation from "./hooks/useLocation";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./store/productSlice";

function App() {
  const { location, loading, fetchLocation } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar
        location={location}
        loading={loading}
        fetchLocation={fetchLocation}
      />
      <main>
        <Outlet />
      </main>
      <Footer />{" "}
    </>
  );
}

export default App;
