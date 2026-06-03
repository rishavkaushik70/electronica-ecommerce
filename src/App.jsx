import { Outlet } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import useLocation from "./hooks/useLocation";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./store/productSlice";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const { location, loading, fetchLocation } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    window.scrollTo(0, 0);
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
      <ScrollToTop
        smooth
        color="white"
        style={{
          backgroundColor: "#fa2d37",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Footer />{" "}
    </>
  );
}

export default App;
