import React from "react";
import "./App.css";

import Modal from "./components/Modal/Modal";
import List from "./components/List/List";
import Backdrop from "./components/Backdrop/Backdrop";

function App() {
  return (
    <div className="App">
      <h1>React Animations 101</h1>
      <Modal />
      <Backdrop />
      <button className="Button">Open Modal</button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;
