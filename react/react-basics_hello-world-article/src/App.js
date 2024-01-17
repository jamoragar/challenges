import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>What a title!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fuga?
      </p>
    </article>
  );
}
