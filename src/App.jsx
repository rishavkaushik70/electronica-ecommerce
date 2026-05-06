import { Outlet } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import useLocation from "./hooks/useLocation";

function App() {
  const { location, loading, fetchLocation } = useLocation();

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
    </>
  );
}

export default App;
