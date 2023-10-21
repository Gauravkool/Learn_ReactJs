import { useState } from "react";
function BgChanger() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2">
        <div className="flex flex-wrap justify-center gap-2 bg-white rounded-2xl px-3 py-1">
          <button
            className="outline-none px-4 py-1 text-white rounded-2xl shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 text-white rounded-2xl shadow-lg"
            style={{ backgroundColor: "Orange" }}
            onClick={() => setColor("Orange")}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 text-white rounded-2xl shadow-lg"
            style={{ backgroundColor: "Purple" }}
            onClick={() => setColor("Purple")}
          >
            Purple
          </button>
          <button
            className="outline-none px-4 py-1 text-white rounded-2xl shadow-lg"
            style={{ backgroundColor: "Gray" }}
            onClick={() => setColor("Gray")}
          >
            Gray
          </button>
          <button
            className="outline-none px-4 py-1 text-white rounded-2xl shadow-lg"
            style={{ backgroundColor: "Violet" }}
            onClick={() => setColor("Violet")}
          >
            Violet
          </button>
          <button
            className="outline-none px-4 py-1 text-white rounded-2xl shadow-lg"
            style={{ backgroundColor: "Indigo" }}
            onClick={() => setColor("Indigo")}
          >
            Indigo
          </button>
          <button
            className="outline-none px-4 py-1 text-white rounded-2xl shadow-lg"
            style={{ backgroundColor: "Blue" }}
            onClick={() => setColor("Blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 text-white rounded-2xl shadow-lg"
            style={{ backgroundColor: "Green" }}
            onClick={() => setColor("Green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 text-white rounded-2xl shadow-lg"
            style={{ backgroundColor: "SeaGreen" }}
            onClick={() => setColor("SeaGreen")}
          >
            SeaGreen
          </button>
        </div>
      </div>
    </div>
  );
}
export default BgChanger;
