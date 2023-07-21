import Footer from "./components/footer/Footer";
import Navigation from "./components/navbar/Navigation";
import Home from "./components/pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
<BrowserRouter>
  <Navigation/>
  <Routes className="py-20">
    <Route exact path ="/" element= {<Home/>} />
  </Routes>
</BrowserRouter>

  );
}

export default App;
