import "./styles.css";

function Greeting({ name }) {
  return <h1>Hello, {name ? (name = name) : (name = "Coach");}</h1>;
}

export default function App() {
  return <Greeting name="Maxime" />;
}
