import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Footer from "./components/Common/Footer/Footer";
import Header from "./components/Common/Header/Header";
import Home from "./components/User/Home/Home";
import Login from "./components/Login/Login";
import Order from "./components/User/Order/Order";
import Detail from "./components/User/Order/OrderDetail/Detail";
import ProductDetails from "./components/User/Product/ProductDetails";
import SignUp from "./components/SignUp/SignUp";
import AddProduct from "./components/Admin/AddProduct/AddProduct";
import DeleteProduct from "./components/Admin/DeleteProduct/DeleteProduct";
import CartList from "./components/User/Cart/CratList/CartList";
import CartDetails from "./components/User/Cart/CartDetails/CartDetails";
import PageNotFound from "./components/NotFound/PageNotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productDetail/:id" element={<ProductDetails />} />
        <Route path="/order" element={<Order />} />
        <Route path="/OrderDatil/:id" element={<Detail />} />
        <Route path="/cart" element={<CartList/>} />
        <Route path="/cartDatil/:id" element={<CartDetails />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/deleteProduct" element={<DeleteProduct />} />
        <Route path="*" element={<PageNotFound/>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
