import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import ThemeProvider from "./theme";
// layouts
import DashboardLayout from "./layouts/dashboard";
import UserPage from "./pages/admin/UserPage";
import LoginPage from "./pages/admin/LoginPage";
import ProductsPage from "./pages/admin/ProductsPage";
import OrderPage from "./pages/admin/OrderPage";
import DashboardAppPage from "./pages/admin/DashboardAppPage";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="app" element={<DashboardAppPage />} />
              <Route path="user" element={<UserPage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="order" element={<OrderPage />} />
            </Route>
            <Route path="/admin-login" element={<LoginPage />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
