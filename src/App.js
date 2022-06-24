import "./App.css";

import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Bookkepper!</h1>
      <nav
      style={{
        borderBottom: "1px solic #ccc",
      }}
      >
        <Link to="/invoices">invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
}

export default App;
