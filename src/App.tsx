import React from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/cart";

function App() {
  return (
    // <div className="App">
    //   <Product />
    // </div>
    <React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/productlist" element={<ProductList />} />
					<Route path="/product" element={<Product />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</Router>
		</React.Fragment>
  );
}

export default App;
