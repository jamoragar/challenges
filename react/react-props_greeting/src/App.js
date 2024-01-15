import "./styles.css";

export default function App() {
  return <Greeting name="Javier" />;
}

function Greeting(props) {
  const { name } = props;
  return <h2>Hello, {name}!</h2>;
}
