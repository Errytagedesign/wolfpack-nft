import React from "react";

import Slider from "react-slick";

// styles
import "./Explore.scss";

// images
import images from "../../components/exports/images";
// import { Link } from "react-router-dom";
import NftCollection from "../../components/constants/nftcollection/NftCollection";
import NftMint from "../../components/constants/nftmint/NftMint";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
  ],
};

const NftMobileSliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const nftCardsImages = [
  {
    title: "Alien Trunk",
    meta: "Alien Trunk  (2) ",
    floor: "3.69BNB ",
    pic: images.mint01,
  },
  {
    title: "Alien Trunk",
    meta: "Alien Trunk  (2) ",
    floor: "3.69BNB ",
    pic: images.mint02,
  },
  {
    title: "Alien Trunk",
    meta: "Alien Trunk  (2) ",
    floor: "3.69BNB ",
    pic: images.mint03,
  },
  {
    title: "Alien Trunk",
    meta: "Alien Trunk  (2) ",
    floor: "3.69BNB ",
    pic: images.mint04,
  },
  {
    title: "Alien Trunk",
    meta: "Alien Trunk  (2) ",
    floor: "3.69BNB ",
    pic: images.mint05,
  },
  {
    title: "Alien Trunk",
    meta: "Alien Trunk  (2) ",
    floor: "3.69BNB ",
    pic: images.mint06,
  },
  {
    title: "Alien Trunk",
    meta: "Alien Trunk  (2) ",
    floor: "3.69BNB ",
    pic: images.mint07,
  },
  {
    title: "Alien Trunk",
    meta: "Alien Trunk  (2) ",
    floor: "3.69BNB ",
    pic: images.mint08,
  },
  {
    title: "Alien Trunk",
    meta: "Alien Trunk  (2) ",
    floor: "3.69BNB ",
    pic: images.mint09,
  },
  {
    title: "Alien Trunk",
    meta: "Alien Trunk  (2) ",
    floor: "3.69BNB ",
    pic: images.mint10,
  },
  {
    title: "Alien Trunk",
    meta: "Alien Trunk  (2) ",
    floor: "3.69BNB ",
    pic: images.mint11,
  },
  {
    title: "Alien Trunk",
    meta: "Alien Trunk  (2) ",
    floor: "3.69BNB ",
    pic: images.mint12,
  },
  {
    title: "Alien Trunk",
    meta: "Alien Trunk  (2) ",
    floor: "3.69BNB ",
    pic: images.mint13,
  },
  {
    title: "Alien Trunk",
    meta: "Alien Trunk  (2) ",
    floor: "3.69BNB ",
    pic: images.mint14,
  },
  {
    title: "Alien Trunk",
    meta: "Alien Trunk  (2) ",
    floor: "3.69BNB ",
    pic: images.mint15,
  },
  {
    title: "Alien Trunk",
    meta: "Alien Trunk  (2) ",
    floor: "3.69BNB ",
    pic: images.mint16,
  },
];

const NftCards = [
  {
    id: 1,
    title: "Alien Trunk NFT",
    desc: "Alien Trunk NFT is the leader of the pack and the rarest NFT in our collection. Holding this NFT gives users access to whitelist spots on all future projects.",

    qtyValue: "2000",
    floorPrice: "$1000 BUSD",

    apyValue: "%96",
    pic: images.alien,
  },
  {
    id: 2,
    title: "Armor Trunk NFT",
    desc: "Armor Trunk NFT is the second most valuable NFT in our collection and it bequeaths holders' preferences for whitelist spots on future projects after Alien Trunk Holders.",

    qtyValue: "3000",
    floorPrice: "$500 BUSD",

    apyValue: "%72",
    pic: images.armor,
  },
  {
    id: 3,
    title: "eTrunk NFT",
    desc: "eTrunk NFT is the most numerous NFT in our collection and opens holders to exclusive airdrops, dividends from yields and nodes, and more.",

    qtyValue: "5000",
    floorPrice: "$250 BUSD",

    apyValue: "%60",
    pic: images.etrunk,
  },
  {
    id: 4,
    title: "War Trunk NFT",
    desc: "Holding this NFT opens users to juicy discounts, exclusive airdrops, and more.    ",

    qtyValue: "2000",
    floorPrice: "$125 BUSD",

    apyValue: "%48",
    pic: images.war,
  },
  {
    id: 5,
    title: "WWar II Trunk NFT",
    desc: "Holding this NFT opens users to juicy discounts, exclusive airdrops, and more.    ",

    qtyValue: "2000",
    floorPrice: "$65 BUSD",

    apyValue: "No Earning",
    pic: images.warii,
  },
];

function Explore() {
  return (
    <main className="explore">
      <div className=" explore-hero p-2 p-md-5">
        <section
          data-aos="fade-left"
          data-aos-duration="5000"
          className=" col-12 col-lg-6 title-container"
        >
          <h2 data-aos="fade-left" data-aos-duration="5000">
            WolfPackHerd NFT <br /> <span> Marketplace </span>
          </h2>
          <p> 12,000 NFTs Available For Mint </p>
        </section>

        {/* NFT collectibles for web screen */}
        <section data-aos="zoom-in" className=" Elephant ">
          <img src={images.elephantExplore} alt="wolfpackherd nft" />
        </section>
      </div>
      <section className="nft-container d-flex flex-column flex-lg-row justify-content-between align-items-center">
        <article className="col-12 col-lg-4 text-center text-lg-start">
          <h2> NFT’s TRUNK Collection </h2>
          <p>
            {" "}
            WolfPackHerd consists of 5 distinctive NFT collections that can
            mutate when bridging to other networks making them rarer. All our
            NFTs are unique but bequeath users with different levels of
            opportunity.{" "}
          </p>
        </article>

        <section className="d-flex flex-wrap col-12 d-flex d-lg-none">
          {NftCards.map((card, index) => (
            <div key={index} className=" p-2 col-12">
              <NftCollection
                title={card.title}
                imageUrl={card.pic}
                apy={card.apyValue}
                floor={card.floorPrice}
                qty={card.qtyValue}
                desc={card.desc}
              />
            </div>
          ))}
        </section>

        {/* Mobile Slider */}

        <Slider
          className="d-none d-lg-block col-12 col-md-7 "
          {...NftMobileSliderSettings}
        >
          {NftCards.map((card, id) => (
            <div key={id} className="p-2 ">
              <NftCollection
                title={card.title}
                imageUrl={card.pic}
                apy={card.apyValue}
                floor={card.floorPrice}
                qty={card.qtyValue}
                desc={card.desc}
              />
            </div>
          ))}
        </Slider>
      </section>

      <section className="d-none d-lg-block mint-container">
        <Slider className="" {...settings}>
          {nftCardsImages.map((nft, index) => (
            <div key={index} className=" p-1 col-12">
              <NftMint
                title={nft.title}
                floor={nft.floor}
                meta={nft.meta}
                imageUrl={nft.pic}
              />
            </div>
          ))}
        </Slider>
      </section>
    </main>
  );
}

export default Explore;
