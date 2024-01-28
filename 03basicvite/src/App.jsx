import { useState } from "react";
import "./App.css";
import Frame from "./components/Frame";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3">Vite with Tailwind</h1>
      <Frame username="Mike" dumptext="hello mir" />
      <Frame username="Mike" />
      <Frame dumptext="helllllllll" />
    </>
  );
}

export default App;
