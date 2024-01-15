import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={10} valueB={15} />;
}

function Sum(props) {
  const { valueA, valueB } = props;
  const result = valueA + valueB;
  return (
    <h3>
      {valueA} + {valueB} = {result}
    </h3>
  );
}
