import React from "react";
import "./HomePage.scss";

import Slider from "react-slick";
// import { motion } from "framer-motion";

// comps
import { HeroSection } from "../../components/exports/allComps";
import images from "../../components/exports/images";

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

const nftCards = [
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

function HomePage() {
  return (
    <div className="home d-flex flex-column">
      <HeroSection />

      <section className="slider d-none d-lg-block ">
        <Slider className="" {...settings}>
          {nftCards.map((nft) => (
            <img
              className="col-12 mx-auto"
              src={nft.pic}
              alt="wolfpackherd nft cards"
            />
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default HomePage;
