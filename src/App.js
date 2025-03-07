import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout.js/Navbar";
import Products from "./pages/Products.js";
import Cart from "./pages/Cart.js";
import Home from "./pages/Home.js";
import ProductDetail from "./pages/productDetail.js";
import { CartContext } from "./store/cartcontext.js";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  const [cartitems, setcartitems] = useState([]);
  const [count, setcount] = useState(0);
    const[alert,setalert]=useState(false);

  const addtocart = (item) => {
    let newitem = cartitems.find((product) => {
      return product.id === item.id;
    });

    if (newitem) {
      newitem.quantity = newitem.quantity + 1;

      const ubdatedcartitems = cartitems.map((pro) => {
        return pro.id === item.id ? newitem : pro;
      });
      setcartitems(ubdatedcartitems);
    } else {
      setcartitems([...cartitems, { ...item, quantity: 1 }]);
      Swal.fire({
        title: "the product was added succefully",
        width: 600,
        padding: "3em",
        color: "#716add",
        background:
          "#fff url(https://sweetalert2.github.io/#downloadimages/trees.png)",
        backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/#downloadimages/nyan-cat.gif")
        left top
        no-repeat
      `,
      });
    }
    setcount(count + 1);
  };

  const handledelete=(items)=>{

    const deleteditems=cartitems.filter((item)=>{
return items.id!==item.id
    })
    setcartitems(deleteditems);
    setalert(true);
  }
  return (
    <>
      <BrowserRouter>
        <CartContext.Provider
          value={{ cartitems, setcartitems, count, setcount, addtocart,handledelete,alert ,setalert}}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/productDetail/:id"
              element={<ProductDetail />}></Route>
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
