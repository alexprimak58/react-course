import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("Copy");

  // we need this to just create a ref
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";
    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    // writeText - I am basically writing to others keyboard while they are clicking
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    setTimeout(() => {
      setCopy("Copy");
    }, 2000);
    setCopy("Copied");
  };
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text "
          value={password}
          className="outline-none w-full py-1 px-3 text-gray-800"
          placeholder="Password"
          readOnly
          // once we have done a reference,this input is available in any place in our code
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          {copy}
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="curson-poiner"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label className="text-white" htmlFor="length">
            Length {length}
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            name=""
            id=""
          />
          <label className="text-white" htmlFor="number">
            Numbers
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            name=""
            id=""
          />
          <label className="text-white" htmlFor="number">
            Chars
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
