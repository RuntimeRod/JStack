import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//ReactDOM.render(<h1>Ola mundo</h1>, document.getElementById("root"));
//Antigo

// NOVO
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
