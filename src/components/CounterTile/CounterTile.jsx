import { useState } from "react";
import "./CounterTile.scss";

const CounterTile = () => {
  const [counter, setCounter] = useState(0);
  const handleDecrement = () => {
    counter === 0 ? setCounter(0) : setCounter(counter - 1);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="counter-tile">
      <h2 className="counter-tile__heading"> Counter </h2>
      <div className="counter-tile__display"> {counter}</div>
      <button
        className="counter-tile__button counter-tile__button--plus"
        onClick={handleIncrement}
      >
        {" "}
        +{" "}
      </button>
      <button
        className="counter-tile__button counter-tile__button--minus"
        onClick={handleDecrement}
      >
        {" "}
        -{" "}
      </button>
    </div>
  );
};

export default CounterTile;
