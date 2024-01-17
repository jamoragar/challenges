import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley(props) {
  const { isHappy } = props;

  return <h1>{isHappy ? "😄" : "😓"}</h1>;
}
