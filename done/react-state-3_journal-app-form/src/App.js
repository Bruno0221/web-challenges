import "./App.css";
import { EntriesSection, initialEntries } from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function handleAddNewEntry(data) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([{ id: uid(), date: date, ...data }, ...entries]);
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddNewEntry={handleAddNewEntry} />
        <EntriesSection entries={entries} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
