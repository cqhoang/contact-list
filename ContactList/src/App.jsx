import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <>
      <ContactList />
      <h1>Contact List</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
