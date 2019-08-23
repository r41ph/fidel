import React from "react";
import "./App.scss";
import Header from "./Header/Header";
import Transactions from "./Transactions/Transactions";

function App() {
  return (
    <div className="f-app-wrapper">
      <Header />
      <Transactions />
    </div>
  );
}

export default App;
