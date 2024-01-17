import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("console log of my button :D");
  }
  return (
    <Button
      color={"green"}
      disabled={false}
      text={"My new button"}
      onHandleClick={handleClick}
    />
  );
}

function Button(props) {
  const { color, disabled, text, onHandleClick } = props;

  // function handleClick() {
  //   console.log("console log of my button :D");
  // }

  return (
    <button
      type="button"
      style={{ backgroundColor: color }}
      disabled={disabled}
      // onClick={() => console.log("console log of my button :D")}
      // onClick={handleClick}
      onClick={onHandleClick}
    >
      {text}
    </button>
  );
}
