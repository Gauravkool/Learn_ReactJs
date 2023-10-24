import Cart from "./component/card";
import ColorChnager from "./component/bgChanger";
import Counter from "./component/counter";
import BgChanger from "./component/bgChanger";
import PasswordGenerator from "./component/passwordGenerator";
import CurrencyApp from "./component/CurrencyApp";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./component/Login";
import Profile from "./component/Profile";
import ThemeApp from "./component/ThemeApp";

function App() {
  return (
    <>
      {/* <Counter />
      <Cart username="Monali" btnText="View Profile"/>
      <Cart username="Gupta" btnText="View Details"/> */}
      {/* <BgChanger/> */}
      {/* <PasswordGenerator/> */}
      {/* <CurrencyApp/> */}

      {/* <UserContextProvider>
        <div className="text-center my-5">
          <Login />
          <Profile />
        </div>
      </UserContextProvider> */}
      <ThemeApp />
    </>
  );
}

export default App;
