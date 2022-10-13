import React from "react";
import { Link } from "react-router-dom";
import images from "../exports/images";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer d-flex flex-column">
      <main className="d-flex flex-column flex-lg-row  justify-content-between">
        {/* Logo */}
        <section className="col-12 col-md-8 logo col-lg-4 d-flex flex-column text-center text-lg-start mx-auto">
          <div className="d-flex flex-row col-10 col-md-6 col-lg-12 mx-auto align-items-center ">
            <div>
              {" "}
              <img
                className="col-12"
                src={images.Logo}
                alt=" Wolf Pack Logo"
              />{" "}
            </div>
            <h2> WolfPack Herd </h2>{" "}
          </div>
          <p>
            {" "}
            Discover valuable digital arts with WolfPackHerd. Buy,sell,stop
            losses and earn more. We do the Defi for you!Blaaaaaaaaaaaaaaaaaaaa
          </p>
        </section>

        <section className="d-flex flex-wrap justify-content-between col-12 col-lg-7">
          {/* company */}
          <aside className="d-flex align-content-center col-5 col-lg-3 flex-column ">
            <h4> Company </h4>
            <Link to="/about">About</Link>
            <Link to="/careers"> Careers</Link>
            <Link to="/donate"> Donate </Link>
            <Link to="/contact"> Contact us </Link>
          </aside>

          {/* services */}
          <aside className="d-flex col-5 col-lg-3  flex-column ">
            <h4> Services </h4>
            <Link to="/about">NFT Arts</Link>
            <Link to="/careers"> Elephant Money</Link>
            <Link to="/donate"> Music NFT player </Link>
            <Link to="/contact"> Crypto Giftcard </Link>
            <Link to="/contact"> Defi Calendar </Link>
            <Link to="/contact"> Dox.me </Link>
            <Link to="/contact"> NFC savings promo card </Link>
          </aside>
          {/* Support */}
          <aside className="d-flex col-5 col-lg-3  flex-column ">
            <h4> Support </h4>
            <Link to="/about">Help center</Link>
            <Link to="/careers"> Account informations</Link>
            <Link to="/donate"> Settings</Link>
            <Link to="/contact"> FAQ </Link>
          </aside>
          <aside className="d-flex col-5 col-lg-3  flex-column ">
            <h4> Resources </h4>
            <Link to="/about">Mint process</Link>
            <Link to="/careers"> Whitepaper</Link>
            <Link to="/donate"> Partners </Link>
            <Link to="/contact"> API Docs </Link>
            <Link to="/contact"> Documentation </Link>
            <Link to="/contact"> Github </Link>
            <Link to="/contact"> Newsletter </Link>
            <Link to="/contact"> Tutorial </Link>
          </aside>
        </section>
      </main>

      <article className="d-flex flex-column flex-lg-row justify-content-between align-items-center text-center text-lg-start">
        <small> 2022 Wolfpackherd Network,inc. All rights reserved</small>
        <div className="d-flex col-8 col-md-3 mt-3 mt-lg-0 flex-row justify-content-between">
          <small> Terms of use</small>
          <small> Privacy policy</small>
        </div>
      </article>
    </div>
  );
}

export default Footer;