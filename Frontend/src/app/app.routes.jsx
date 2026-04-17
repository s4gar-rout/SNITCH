import { createBrowserRouter } from "react-router";
import Register from "../features/auth/pages/Register";
import Login from "../features/auth/pages/Login";
import SellerProductUpload from "../features/product/pages/SellerProductUpload";
import ProductDashboard from "../features/product/pages/ProductDashboard";
import ProductDetail from "../features/product/pages/ProductDetail";
import Cart from "../features/cart/pages/Cart";
import Shipping from "../features/checkout/pages/Shipping";
import Payment from "../features/checkout/pages/Payment";
import OrderConfirmation from "../features/checkout/pages/OrderConfirmation";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <ProductDashboard />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout/shipping",
    element: <Shipping />,
  },
  {
    path: "/checkout/payment",
    element: <Payment />,
  },
  {
    path: "/checkout/order-confirmation",
    element: <OrderConfirmation />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/product/details",
    element: <ProductDetail />,
  },
  {
    path: "/seller/product-upload",
    element: <SellerProductUpload />,
  },
]);
