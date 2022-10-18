import React, { useState } from "react";
import { Link } from "react-router-dom";

// icons
import { BsChevronDown } from "react-icons/bs";

// styles
import "./NavBar.scss";

// images
import images from "../exports/images";
import ConnectWallet from "../connectWallet/ConnectWallet";

function NavBar() {
  const [navbar, setNavbar] = useState(true);
  const [showConnectWallet, setShowConnectWallet] = useState(true);

  const [dropDownExplore, setDropDownExplore] = useState(true);
  const [dropDownStats, setDropDownStats] = useState(true);
  const [dropDownAsset, setDropDownAsset] = useState(true);

  const handleExploreDropdown = () => {
    setDropDownExplore((current) => !current);
  };
  const handleStatsDropdown = () => {
    setDropDownStats((current) => !current);
  };
  const handleAssetDropdown = () => {
    setDropDownAsset((current) => !current);
  };

  const handleNav = () => {
    setNavbar(!navbar);
  };

  const handleConnectWallet = () => {
    setShowConnectWallet(!showConnectWallet);
  };

  const NavLinks = [
    {
      explore: [
        { name: "Mint NFT", icon: images.MintNft },
        { name: "Ivory Savings", icon: images.NfcSaving },
        { name: "Crypto Gift Card", icon: images.CryptoGift },
        { name: " NFC Saving Promo", icon: images.Ivory },
        { name: "Defi Calendar", icon: images.DefiCalendar },
        { name: "Dox.me", icon: images.Dox },
        { name: "Music NFT", icon: images.MusciNft },
      ],

      stats: [
        { name: "Top APY", icon: images.TopApy },
        { name: "Trending", icon: images.Trending },
      ],

      asset: [
        { name: "White Paper", icon: images.WhitePaper },
        { name: "Mint Process", icon: images.MintProcess },
        { name: "Help Center", icon: images.HelpCenter },
      ],
    },
  ];

  // console.log(NavLinks[0].explore);

  return (
    <section className="nav-container">
      <nav className="d-flex container flex-row align-items-center justify-content-between pt-3">
        {/* Logo */}
        <section className="col-8 col-md-3 d-flex flex-row align-items-center logo">
          <img src={images.Logo} alt=" Wolf Pack Logo" />
          <h2> WolfPack Herd </h2>
        </section>
        <div
          className={` col-12 col-9 d-flex flex-column flex-lg-row ${
            navbar ? " displayNav" : "navMove"
          }`}
        >
          <aside className="col-12 col-lg-10 d-flex flex-column flex-lg-row  ">
            {/* nav Links */}
            <section className="col-12 col-lg-7 d-flex flex-column flex-lg-row justify-content-end ">
              {/* explore */}
              <div className=" nav-items d-flex flex-column ">
                <p onClick={handleExploreDropdown}>
                  Explore <BsChevronDown className="icon" />
                </p>
                <div
                  className={`dropdown-lists ${
                    dropDownExplore
                      ? "show-dropdown-lists"
                      : "hide-dropdown-lists"
                  }`}
                >
                  {NavLinks[0].explore.map((item) => (
                    <Link className="dropdown-list-items" to="/mintnft">
                      <img src={item.icon} alt="" /> {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* stats */}
              <div className=" nav-items d-flex flex-column ">
                <p onClick={handleStatsDropdown}>
                  {" "}
                  Stats <BsChevronDown className="icon" />{" "}
                </p>
                <div
                  className={`dropdown-lists ${
                    dropDownStats
                      ? "show-dropdown-lists"
                      : "hide-dropdown-lists"
                  }`}
                >
                  {NavLinks[0].stats.map((item) => (
                    <Link className="dropdown-list-items" to="/mintnft">
                      <img src={item.icon} alt="" /> {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Asset */}
              <div className=" nav-items d-flex flex-column ">
                <p onClick={handleAssetDropdown}>
                  {" "}
                  Asset <BsChevronDown className="icon" />{" "}
                </p>
                <div
                  className={`dropdown-lists ${
                    dropDownAsset
                      ? "show-dropdown-lists"
                      : "hide-dropdown-lists"
                  }`}
                >
                  {NavLinks[0].asset.map((item) => (
                    <Link className="dropdown-list-items" to="/mintnft">
                      <img src={item.icon} alt="" /> {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* profile and btn */}
            <section className="col-12 col-lg-4 d-flex flex-column flex-lg-row justify-content-around align-items-center">
              <div>
                {" "}
                <img src={images.Profile} alt="" />{" "}
              </div>
              <div onClick={handleConnectWallet}>
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

      <div className={showConnectWallet ? "d-none" : "d-block"}>
        <ConnectWallet />
      </div>
    </section>
  );
}

export default NavBar;
