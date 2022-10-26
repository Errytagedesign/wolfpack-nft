import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../../exports/images";
import "./Fab.scss";

function Fab() {
  const [openFab, setOpenFab] = useState(true);

  const handleFab = () => {
    setOpenFab((current) => !current);
  };

  return (
    <div className="fab-container d-flex flex-column">
      <section className=" fab-items-container">
        <Link className={openFab ? "fab-items-close" : "fab-items-open"}>
          {" "}
          <img src={images.contact} alt="action button" />{" "}
        </Link>
        <Link className={openFab ? "fab-items-close" : "fab-items-open"}>
          {" "}
          <img src={images.faq} alt="action button" />{" "}
        </Link>
      </section>
      <Link className="p-3 d-flex" onClick={handleFab}>
        {" "}
        <img
          style={{ transition: "all" }}
          src={openFab ? images.plus : images.cancel}
          alt="action button"
        />{" "}
      </Link>
    </div>
  );
}

export default Fab;
