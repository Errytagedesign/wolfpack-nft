import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components

// style
import "./App.css";
import "aos/dist/aos.css";

function App() {
  const AOS = require("aos");
  useEffect(() => {
    AOS.init();
  }, [AOS]);
  return (
    <div className="App">
      {" "}
      hello wolfpack
      <header></header>
      <main>
        <Router>
          <Routes>
            <Route />
          </Routes>
        </Router>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
