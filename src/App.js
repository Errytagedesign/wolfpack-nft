import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import { NavBar, HomePage, Footer, Fab } from "./components/exports/allComps";

// style
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import "aos/dist/aos.css";

function App() {
  const AOS = require("aos");
  useEffect(() => {
    AOS.init();
  }, [AOS]);
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
      </Router>
      <Router>
        <div className="fab">
          <Fab />
        </div>
      </Router>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </main>
      <Router>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
