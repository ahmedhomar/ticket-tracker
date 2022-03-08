import { useState } from "react";
import "./Buttons.scss";

const Buttons = ({ imagesArr }) => {
  const [counter, setCounter] = useState(0);

  // take away from the counter/ image array index
  // but if we get to -1, we want to set it to 3 again
  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(imagesArr.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  // add to the counter/ image array index
  // but if we get to 4, we want to set it to 0 again
  const handleIncrement = () => {
    if (counter === imagesArr.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  return (
    <div className="carousel">
      <img
        src={leftArrow}
        alt=""
        className="carousel__arrow carousel__arrow--left"
        onClick={handleDecrement}
      />
      <img src={imagesArr[counter]} className="carousel__image" alt="" />
      <img
        src={rightArrow}
        alt=""
        className="carousel__arrow carousel__arrow--right"
        onClick={handleIncrement}
      />
    </div>
  );
};

export default Buttons;
