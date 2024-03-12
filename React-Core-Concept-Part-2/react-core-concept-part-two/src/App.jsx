import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";
// import "./Friends.css";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }

  const clickSecondVersion = () => {
    alert("Second Version of Button Clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>React Core Concepts ( Part 2 )</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={clickSecondVersion}>Click Version Two</button>
      <button onClick={() => addToFive(3)}>Click Version Three</button>
    </>
  );
}

export default App;
