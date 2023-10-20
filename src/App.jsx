import Cart from "./component/card";
import Counter from "./component/counter";

function App() {
  return (
    <>
      <Counter />
      <Cart username="Monali" btnText="View Profile"/>
      <Cart username="Gupta" btnText="View Details"/>
    </>
  );
}

export default App;
