import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./Comopnents/layout/DashboardLayout";
import Dashboard from "./Comopnents/dashboard/Dashboard";
import CardDetailPage from "./Comopnents/dashboard/CardDetailPage";
import Home from "./Comopnents/sidebarPages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/card/:id" element={<CardDetailPage />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
