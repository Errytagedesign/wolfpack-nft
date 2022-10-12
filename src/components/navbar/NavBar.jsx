import React, { useState } from "react";
import { Link } from "react-router-dom";

// icons
import { BsChevronDown } from "react-icons/bs";

// styles
import "./NavBar.scss";

// images
import images from "../exports/images";

function NavBar() {
  const [navbar, setNavbar] = useState(true);

  const handleNav = () => {
    setNavbar(!navbar);
    console.log("here");
  };

  return (
    <section className="nav-container">
      <nav className="d-flex container flex-row align-items-center justify-content-between pt-3">
        {/* Logo */}
        <section className="col-8 col-md-3 d-flex flex-row align-items-center logo">
          <img className="col-3" src={images.Logo} alt=" Wolf Pack Logo" />
          <h2> WolfPack Herd </h2>
        </section>
        <div
          className={` col-12 col-9 d-flex flex-column flex-lg-row ${
            navbar ? " displayNav" : "navMove"
          }`}
        >
          <aside className="col-12 col-lg-10 d-flex flex-column flex-lg-row  ">
            {/* nav Links */}
            <section className="col-12 col-lg-7 d-flex flex-column flex-lg-row justify-content-end align-items-center">
              {/* explore */}
              <section className=" nav-items d-flex flex-column ">
                <p>
                  {" "}
                  Explore <BsChevronDown className="icon" />{" "}
                </p>
                <div className="dropdown-lists ">
                  <Link className="dropdown-list-items" to="/mintnft">
                    <img src={images.MintNft} alt="" /> M int NFT
                  </Link>
                  <Link className="dropdown-list-items" to="/ivorysavings">
                    <img src={images.Ivory} alt="" /> Ivory Savings
                  </Link>
                  <Link className="dropdown-list-items" to="/mintnft">
                    <img src={images.CryptoGift} alt="" /> Crypto Gift Card
                  </Link>
                  <Link className="dropdown-list-items" to="/mintnft">
                    <img src={images.NfcSaving} alt="" /> NFC Saving Promo
                  </Link>
                  <Link className="dropdown-list-items" to="/mintnft">
                    <img src={images.DefiCalendar} alt="" /> Defi Calendar
                  </Link>
                  <Link className="dropdown-list-items" to="/mintnft">
                    <img src={images.Dox} alt="" /> Dox.me
                  </Link>
                  <Link className="dropdown-list-items" to="/mintnft">
                    <img src={images.MusciNft} alt="" /> Music NFT
                  </Link>
                </div>
              </section>

              {/* stats */}
              <section className=" nav-items d-flex flex-column ">
                <p>
                  {" "}
                  Stats <BsChevronDown className="icon" />{" "}
                </p>
                <div className="dropdown-lists ">
                  <Link className="dropdown-list-items" to="/mintnft">
                    <img src={images.TopApy} alt="" /> Top APY
                  </Link>
                  <Link className="dropdown-list-items" to="/mintnft">
                    <img src={images.Trending} alt="" /> Trending
                  </Link>
                </div>
              </section>

              {/* Asset */}
              <section className=" nav-items d-flex flex-column ">
                <p>
                  {" "}
                  Asset <BsChevronDown className="icon" />{" "}
                </p>
                <div className="dropdown-lists ">
                  <Link className="dropdown-list-items" to="/mintnft">
                    <img src={images.WhitePaper} alt="" /> White Paper
                  </Link>
                  <Link className="dropdown-list-items" to="/mintnft">
                    <img src={images.MintProcess} alt="" />
                    Mint Process
                  </Link>
                  <Link className="dropdown-list-items" to="/mintnft">
                    <img src={images.HelpCenter} alt="" />
                    Help Center
                  </Link>
                </div>
              </section>
            </section>

            {/* profile and btn */}
            <section className="col-12 col-lg-4 d-flex flex-column flex-lg-row justify-content-around align-items-center">
              <div>
                {" "}
                <img src={images.Profile} alt="" />{" "}
              </div>
              <div>
                {" "}
                <Link className="Btn btn-black btn-normal m-3 d-flex flex-row align-items-center">
                  <img src={images.Walleticon} alt="" />
                  Connect Wallet{" "}
                </Link>
              </div>
            </section>
          </aside>
        </div>
        {/* Hambuger icon */}
        <div onClick={handleNav} className={navbar ? "ham" : "open"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </section>
  );
}

export default NavBar;
