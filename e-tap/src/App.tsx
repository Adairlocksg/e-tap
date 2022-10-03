import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./input.css";
import Router from "./Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <section className="flex">
          <Sidebar />
          <Router />
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
