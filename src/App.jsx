import Cart from "./component/card";
import ColorChnager from "./component/bgChanger";
import Counter from "./component/counter";
import BgChanger from "./component/bgChanger";
import PasswordGenerator from "./component/passwordGenerator";
import CurrencyApp from "./component/CurrencyApp";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Counter />
      <Cart username="Monali" btnText="View Profile"/>
      <Cart username="Gupta" btnText="View Details"/> */}
      {/* <BgChanger/> */}
      {/* <PasswordGenerator/> */}
      {/* <CurrencyApp/> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
