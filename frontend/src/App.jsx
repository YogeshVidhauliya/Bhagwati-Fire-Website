import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // <-- import here
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Enquiry from "./pages/Enquiry";
import Training from "./pages/Training"; // ✅ Add this line
import EnquiryDashboard from "./pages/EnquiryDashboard";
import AdminLogin from "./pages/AdminLogin";
import FilteredProducts from "./pages/FilteredProducts";
import ProtectedRoute from "./pages/ProtectRoute";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="app">
      <TopBar />
      <Navbar />
      <ScrollToTop /> {/* <-- add here, inside Router implicitly */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/filtered-products/:category" element={<FilteredProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/training" element={<Training />} /> {/* NEW */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/enquiries-dashboard"
            element={
              <ProtectedRoute>
                <EnquiryDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
