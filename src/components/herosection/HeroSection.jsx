import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";

// styles
import "./HeroSection.scss";

// images
import images from "../exports/images";

const HeroSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

function HeroSection() {
  return (
    <main className="hero">
      <div className="container hero-header d-flex flex-column flex-lg-row">
        <section
          data-aos="fade-left"
          data-aos-duration="5000"
          className="col-12 col-lg-6 title-container"
        >
          <h2 data-aos="fade-left" data-aos-duration="5000">
            Coding Meta Staking Cards, compatible with ERC-6551 on the
            WolfPackHerd High-end Marketplace!
          </h2>
          <Link data-aos="fade-left" className="Btn btn-black btn-normal">
            Contribute to coding
          </Link>
        </section>

        {/* NFT collectibles for web screen */}
        <section className="Nft-container col-12 col-md-6">
          <img src={images.heronft} alt="wolfpackherd nft" />

          {/* <img src={images.NftCard2} alt="wolfpackherd nft" />
          <img src={images.NftCard1} alt="wolfpackherd nft" />
          <img src={images.NftCard3} alt="wolfpackherd nft" /> */}
        </section>

        {/* NFT collectibles for mobile screen */}
        <Slider {...HeroSettings} className="d-block d-lg-none slider-mobile">
          <div>
            <img src={images.NftCard3} alt="wolfpackherd nft" />
          </div>
          <div>
            <img src={images.NftCardMobile1} alt="wolfpackherd nft" />
          </div>
          <div>
            <img src={images.NftCardMobile2} alt="wolfpackherd nft" />
          </div>
        </Slider>
      </div>

      <div className="spinner">
        <div className="circle">
          <motion.img
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.1,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                rotate: 360,
                transition: {
                  type: "spring",
                  opacity: {
                    delay: 1,
                  },
                  scale: {
                    delay: 1,
                    duration: 0.6,
                  },
                  rotate: {
                    repeat: Infinity,
                    duration: 10.4,
                    ease: "linear",
                  },
                },
              },
            }}
            src={images.Circle1}
            alt="spinner"
          />
        </div>

        <div className="circle">
          <motion.img
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.1,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                rotate: -360,
                transition: {
                  type: "spring",
                  opacity: {
                    delay: 1,
                  },
                  scale: {
                    delay: 1,
                    duration: 0.6,
                  },
                  rotate: {
                    repeat: Infinity,
                    duration: 10.4,
                    ease: "linear",
                  },
                },
              },
            }}
            src={images.Circle2}
            alt="spinner"
          />
        </div>

        <div className="circle">
          <motion.img
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.1,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                rotate: 360,
                transition: {
                  type: "spring",
                  opacity: {
                    delay: 1,
                  },
                  scale: {
                    delay: 1,
                    duration: 0.6,
                  },
                  rotate: {
                    repeat: Infinity,
                    duration: 10.4,
                    ease: "linear",
                  },
                },
              },
            }}
            src={images.Circle3}
            alt="spinner"
          />
        </div>

        <div className="circle">
          <motion.img
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.1,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                rotate: -360,
                transition: {
                  type: "spring",
                  opacity: {
                    delay: 1,
                  },
                  scale: {
                    delay: 1,
                    duration: 0.6,
                  },
                  rotate: {
                    repeat: Infinity,
                    duration: 10.4,
                    ease: "linear",
                  },
                },
              },
            }}
            src={images.Circle4}
            alt="spinner"
          />
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
