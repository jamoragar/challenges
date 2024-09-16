import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "🍎 Apple", color: "red" },
    { id: 2, name: "🍌 Banana", color: "yellow" },
    { id: 3, name: "🍇 Grapes", color: "purple" },
    { id: 4, name: "🍊 Orange", color: "orange" },
    { id: 5, name: "🍓 Strawberry", color: "red" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} {...fruit} />;
      })}
    </div>
  );
}
