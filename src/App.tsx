import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
    <div className="f-app-wrapper">
      <Header />
      <Transactions />
    </div>
  );
}

export default App;
