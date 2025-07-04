import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

//commen
import Loader from "./commen/Loader";

//Pages
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Table from "./pages/Table";

//Pages - UIElements
import Alerts from "./pages/UiElements/Alerts";
import Analytic from "./pages/Dashboard/Analytic";
import ECommerce from "./pages/Dashboard/eCommerce";
import Glides from "./pages/Dashboard/Glides";

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        {/* Page */}
        <Route
          index
          element={
            <>
              <Analytic />
            </>
          }
        />

        <Route
          path="/dashboard/ecommerce"
          element={
            <>
              <ECommerce />
            </>
          }
        />

        <Route
          path="/dashboard/glides"
          element={
            <>
              <Glides />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <Profile />
            </>
          }
        />

        <Route
          path="/table"
          element={
            <>
              <Table />
            </>
          }
        />
        <Route
          path="/setting"
          element={
            <>
              <Setting />
            </>
          }
        />

        <Route
          path="/ui/alerts"
          element={
            <>
              <Alerts />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
