import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./Comopnents/layout/DashboardLayout";
import Dashboard from "./Comopnents/dashboard/Dashboard";
import CardDetailPage from "./Comopnents/dashboard/CardDetailPage";
import { useState } from "react";
function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route
              exact
              path="/"
              element={<Dashboard data={data} setData={setData} />}
            />
            <Route path="/card/:id" element={<CardDetailPage data={data} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
