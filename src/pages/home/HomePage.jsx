import React from "react";
import "./HomePage.scss";

import Slider from "react-slick";
// import { motion } from "framer-motion";

// comps
import { HeroSection } from "../../components/exports/allComps";
import images from "../../components/exports/images";
import NftCollection from "../../components/constants/nftcollection/NftCollection";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
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

const nftCardsImages = [
  { pic: images.nft01 },
  { pic: images.nft02 },
  { pic: images.nft03 },
  { pic: images.nft04 },
  { pic: images.nft05 },
  { pic: images.nft06 },
  { pic: images.nft07 },
  { pic: images.nft08 },
  { pic: images.nft09 },
  { pic: images.nft10 },
  { pic: images.nft11 },
  { pic: images.nft12 },
  { pic: images.nft13 },
  { pic: images.nft14 },
  { pic: images.nft15 },
  { pic: images.nft16 },
  { pic: images.nft17 },
  { pic: images.nft18 },
  { pic: images.nft19 },
];

const NftCards = [
  {
    id: 1,
    title: "Alien Trunk NFT",
    desc: "Alien Trunk NFT is the leader of the pack and the rarest NFT in our collection. Holding this NFT gives users access to whitelist spots on all future projects.",
    qty: "Quantity",
    qtyValue: "2000",

    floor: "Floor Price",
    floorValue: "3.69BNB",

    apy: "APY Earning",
    apyValue: "%4",
    pic: images.alien,
  },
  {
    id: 2,
    title: "Armor Trunk NFT",
    desc: "Armor Trunk NFT is the second most valuable NFT in our collection and it bequeaths holders' preferences for whitelist spots on future projects after Alien Trunk Holders.",

    qtyValue: "3000",
    floorPrice: "1.84BNB",
    apyValue: "%3",
    pic: images.armor,
  },
  {
    id: 3,
    title: "eTrunk NFT",
    desc: "eTrunk NFT is the most numerous NFT in our collection and opens holders to exclusive airdrops, dividends from yields and nodes, and more.",
    qtyValue: "5000",
    floorPrice: "0.92BNB",
    apyValue: "%2.5",
    pic: images.etrunk,
  },
  {
    id: 4,
    title: "War Trunk NFT",
    desc: "Holding this NFT opens users to juicy discounts, exclusive airdrops, and more.    ",
    qtyValue: "2000",
    floorPrice: "0.46BNB",
    apyValue: "%2",
    pic: images.war,
  },
  {
    id: 5,
    title: "WWar II Trunk NFT",
    desc: "Holding this NFT opens users to juicy discounts, exclusive airdrops, and more.    ",
    qtyValue: "2000",
    floorPrice: "0.0037BNB",
    apyValue: "No Earning",
    pic: images.warii,
  },
];

function HomePage() {
  return (
    <div className="home d-flex flex-column">
      <HeroSection />

      <section className="slider home-containers d-none d-lg-block ">
        <Slider className="" {...settings}>
          {nftCardsImages.map((nft) => (
            <img
              className="col-12 mx-auto"
              src={nft.pic}
              alt="wolfpackherd nft cards"
            />
          ))}
        </Slider>
      </section>

      <section className="wolf-pack home-containers d-flex flex-column flex-md-row align-items-center justify-content-between">
        <article className="col-12 col-md-7">
          <h2> WolfPackHerd ! an NFT and More </h2>
          <p>
            {" "}
            We are building an all-class asset that is operated on the BNB
            Smartchain by everyday people and offers scalability,
            sustainability, and trustability.{" "}
          </p>
        </article>

        <aside className="col-12 col-md-4 text-center">
          {" "}
          <img className="col-8 mx-auto" src={images.emptyframe} alt="" />{" "}
        </aside>
      </section>

      <section className="nft-collections home-containers d-flex flex-column align-items-center justify-content-between">
        <article className="col-12">
          <h2> NFT’s TRUNK Collection </h2>
          <p>
            {" "}
            WolfPackHerd consists of 5 distinctive NFT collections that can
            mutate when bridging to other networks making them rarer. All our
            NFTs are unique but bequeath users with different levels of
            opportunity.{" "}
          </p>
        </article>

        <section className="d-flex flex-wrap">
          {NftCards.map((card) => (
            <div className=" p-2 col-12 col-md-4">
              <NftCollection
                key={card.id}
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
      </section>
    </div>
  );
}

export default HomePage;
