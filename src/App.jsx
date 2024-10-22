import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Card from "./components/card/Card";

function App() {
  const [toDo, setToDo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addNew = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setToDo([...toDo, inputValue]);
      setInputValue("");
    }
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [darkMode]);

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>მოგესალმებით </h1>
      <form className="form" onSubmit={addNew}>
        <h1>To Do</h1>
        <div>
          <input
            placeholder="To Do"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">დამატება</button>
        </div>
        <ul>
          {toDo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </form>

      <div className="container">
        <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
        <button onClick={toggleTheme}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      <div className="counter-container">
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <div>
        <Card
          title="Beautiful Sunset"
          image="https://picsum.photos/200/300"
          description="A breathtaking view of the sunset over the hills."
        />
      </div>
    </div>
  );
}

export default App;
