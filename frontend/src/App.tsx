import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PlaceOrder from "./pages/PlaceOrder";
import OrderHistory from "./pages/OrderHistory";
import MatchOrders from "./pages/MatchOrders";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/history" element={<OrderHistory />} />
        <Route path="/match" element={<MatchOrders />} />
      </Routes>
    </>
  );
}
