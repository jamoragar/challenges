import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">My title!</h2>
      <label htmlFor="myInput">My Input</label>
      <input id="myInput" type="text" name="myInput" />
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/Mega_Man"
      >
        Mega Man
      </a>
    </article>
  );
}
