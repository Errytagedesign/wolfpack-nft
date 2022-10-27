import React, { useState } from "react";
import { Link } from "react-router-dom";
// import images from "../../exports/images";

import { IconContext } from "react-icons";
import { SiBinance } from "react-icons/si";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// styles
import "./NftMint.scss";
// import { current } from "@reduxjs/toolkit";

function NftMint({ imageUrl, meta, title, floor }) {
  const [heart, setHeart] = useState(true);

  const handleLike = () => {
    setHeart((current) => !current);
  };

  return (
    <div className="mint-card-container d-fex flex-column">
      <div className=" d-flex justify-content-between flex-row">
        {" "}
        <h5> {meta} </h5>{" "}
        <div onClick={handleLike}>
          <IconContext.Provider value={{ size: "22px" }}>
            {heart ? (
              <AiOutlineHeart className="heart" />
            ) : (
              <AiFillHeart className="hearted" />
            )}
          </IconContext.Provider>{" "}
        </div>
      </div>

      <div className="mint-card-image">
        <img src={imageUrl} alt="wolfpackherd nft collections" />
      </div>

      <div
        data-aos="fade-in"
        data-aos-duration="1000"
        className="p-3 mint-card-title"
      >
        <h3 className="heading-medium"> {title} </h3>

        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          className="d-flex flex-column mint-card-details"
        >
          {" "}
          <span>
            <SiBinance /> <strong> {floor} </strong>{" "}
          </span>{" "}
        </div>
      </div>
      <div className="Btn btn-black buy">
        {" "}
        <Link> Buy Now </Link>{" "}
      </div>
    </div>
  );
}

export default NftMint;
