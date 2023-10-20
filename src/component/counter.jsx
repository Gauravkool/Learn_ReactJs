import { useState } from "react";
function Counter() {
  const [counter, setCounter] = useState(0);
  function handleAdd() {
    if (counter < 5) setCounter(counter + 1);
  }
  function handleRemove() {
    if (counter > 0) setCounter(counter - 1);
  }
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-red-700 font-semibold"> Couter value : {counter}</h1>
      <button
        onClick={handleAdd}
        className="bg-indigo-700 text-white px-2 py-1 rounded-md w-32"
      >
        Increament {counter}
      </button>
      <button
        onClick={handleRemove}
        className="bg-indigo-700 text-white px-2 py-1 rounded-md w-32"
      >
        Decreament {counter}
      </button>
    </div>
  );
}
export default Counter;
