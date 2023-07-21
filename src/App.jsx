import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navbar/Navigation";
import CartContainer from "./components/pages/cart/CartContainer";
import Home from "./components/pages/home/Home";

function App() {


  return (
<BrowserRouter>
  {/* <Navigation/> */}
  <Routes className="py-20">
    
    <Route element={<Navigation/>}>
    <Route exact path ="/" element= {<Home/>} />
    <Route exact path ="/cart" element= {<CartContainer/>} />
    <Route exact path ="/about" element= {<Home/>} />
    </Route>
    <Route path ="*" element= {<h1>404- Not found</h1>} />
  </Routes>
</BrowserRouter>

  );
}

export default App;
