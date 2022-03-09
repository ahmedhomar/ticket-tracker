import { useState } from "react";
import "./CounterTiles.scss";

const CounterTiles = () => {
  const [counter, setCounter] = useState(0);
  const handleDecrement = () => {
    counter === 0 ? setCounter(0) : setCounter(counter - 1);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div className="counter-tile">
        <div className="counter-tile__display"> {counter}</div>
        <button className="counter-tile__plus" onClick={handleIncrement}>
          {" "}
          +{" "}
        </button>
        <button className="counter-tile__minus" onClick={handleDecrement}>
          {" "}
          -{" "}
        </button>
      </div>
    </>
  );
};

export default CounterTiles;
