import Card from "./components/Card";

const fruits = [
  { id: 1337, name: "🍌 banana", color: "yellow" },
  { id: 1338, name: "🍓 strawberry", color: "red" },
  { id: 1339, name: "🫐 whortleberry", color: "blue" },
  { id: 1340, name: "🍊 orange", color: "orange" },
  { id: 1341, name: "🦔 gooseberry", color: "green" },
];
export default function App() {
  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} color={fruit.color} name={fruit.name} />;
      })}
    </div>
  );
}
