import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import {
  NavBar,
  HomePage,
  Footer,
  Fab,
  Explore,
  About,
} from "./components/exports/allComps";

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
      {/* <Router>
        <header>
          <NavBar />
        </header>
      </Router>
      <Router>
        <div className="fab">
          <Fab />
        </div>
      </Router> */}
      <main>
        <Router>
          <header>
            <NavBar />
          </header>
          <div className="fab">
            <Fab />
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <footer>
            <Footer />
          </footer>
        </Router>
      </main>
    </div>
  );
}

export default App;
