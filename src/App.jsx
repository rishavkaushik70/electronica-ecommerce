import { Outlet } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import useLocation from "./hooks/useLocation";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./store/productSlice";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { location, loading, fetchLocation } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <>
      <ScrollToTop />
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
