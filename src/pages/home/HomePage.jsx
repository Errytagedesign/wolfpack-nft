import React from "react";
import "./HomePage.scss";

import Slider from "react-slick";
// import { motion } from "framer-motion";

// comps
import { HeroSection } from "../../components/exports/allComps";
import images from "../../components/exports/images";
import NftCollection from "../../components/constants/nftcollection/NftCollection";
import { Link } from "react-router-dom";
import {
  nft2Image,
  nft3Image,
  nft4Image,
  nft5Image,
  nftImage,
} from "../../assets/newImages";

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

const settingMaker = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 900,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ],
};

const setting3 = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const NftMobileSliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
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
    title: "50/50 Metacards",
    desc: "50/50 Metacard is the leader of the pack and the rarest Meta in our collection. Holding this Metacard gives users access to whitelist spots on all future projects.",
    qtyValue: "2000",
    floorPrice: "0.250 BNB",
    apyValue: "50%/50%",
    pic: nftImage,
  },
  {
    id: 2,
    title: "50/50 Metacards",
    desc: "Armor Trunk Metacard is the second most valuable Meta in our collection and it bequeaths holders' preferences for whitelist spots on future projects after Leaders  of the pack.",
    qtyValue: "3000",
    floorPrice: "0.250 BNB",
    apyValue: "50%/50%",
    pic: nft2Image,
  },
  {
    id: 3,
    title: "35/50 Metacards",
    desc: "35/50 Meta is the most numerous Metacard in our collection and opens holders to exclusive airdrops & access to yield staking.",
    qtyValue: "5000",
    floorPrice: "0.250 BNB",
    apyValue: "35%/50%",
    pic: nft3Image,
  },
  {
    id: 4,
    title: "25/50 Metacards",
    desc: "War Trunk Metacards are veteran and holding this Metacard opens users to juicy discounts, exclusive airdrops & access to yield staking.",
    qtyValue: "1000",
    floorPrice: "0.250 BNB",
    apyValue: "25%/50%",
    pic: nft4Image,
  },
  {
    id: 5,
    title: "10/50 Metacards",
    desc: "Wolrd War 2 Trunk Metacards  are first defenders and holding this Metacard opens users to juicy discounts, exclusive airdrops & access to yield staking.",
    qtyValue: "1000",
    floorPrice: "0.250 BNB",
    apyValue: "10%/50%",
    pic: nft5Image,
  },
];

const partnersLogo = [
  { logo: images.partners1 },
  { logo: images.partners5 },
  { logo: images.partners2 },
  { logo: images.partners3 },
  { logo: images.partners4 },
  { logo: images.partners8 },
  { logo: images.partners6 },
  { logo: images.partners7 },
];

const makersLogo = [
  { logo: images.makers1 },
  { logo: images.makers2 },
  { logo: images.makers3 },
  { logo: images.makers4 },
  { logo: images.makers5 },
  { logo: images.makers6 },
];
const marketPlace = [
  { logo: images.Elephant1 },
  { logo: images.Elephant2 },
  { logo: images.Elephant3 },
  { logo: images.Elephant4 },
];

function HomePage() {
  return (
    <div className="home d-flex flex-column">
      <HeroSection />

      {/* Start Web slider section  */}
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
      {/* End Web slider section  */}

      {/* Start Wolfpack descriptions section  */}

      <section className="wolf-pack home-containers d-flex flex-column flex-md-row align-items-center justify-content-between">
        <article
          data-aos="fade-left"
          data-aos-duration="2000"
          className="col-12 col-md-7 text-center text-md-start"
        >
          <h2>WolfPackHerd! Creating A High-End Marketplace </h2>
          <p className="desktopParagraph">
            A comprehensive NFT/Metacard Marketplace that operates on multiple
            chains and collects trading fees. The fees are shared 50/50 between
            Trunk Metacard holders and the DAO Staking Treasury Wallet, offering
            potential 25x returns when trading volume reaches $150,000,000. The
            DAO Staking Treasury Wallet offers a strategic APY earnings from
            trading fees & listed revenue's to metacard holders.{" "}
          </p>
          <p className="mobileParagraph">
            A comprehensive high-end NFT-Metacard Marketplace that operates on
            multiple chains and collects trading fees. read more{" "}
          </p>
        </article>

        <aside
          data-aos="fade-right"
          data-aos-duration="2000"
          className="col-12 col-md-4 text-center"
        >
          <figure>
            <img
              className="col-8 mx-auto"
              src={images.emptyframe}
              alt="“CashFlow For All” Bankteller"
            />
            <figcaption>
              <Link to="/whitepaper">
                “CashMoney For All” In Thy Blockchain Thy Trust
              </Link>
            </figcaption>
          </figure>
        </aside>
      </section>

      {/* End Wolfpack descriptions section  */}

      {/* Start Wolfpack NFT Collection section  */}

      <section className="nft-collections home-containers d-flex flex-column justify-content-between">
        <article className="col-12 text-center">
          <h2> WPH Metacard Collections </h2>
          <p>
            Wolfpackherd 5 distinctive metacard collections are designed to
            bridge the gap between different networks. As users engage with
            these collections and contribute to the platform's growth the
            metacards become even more valuable, allowing users to accumulate
            part time trading fees associated with the marketplace on specific
            EVMs with different levels of opportunity for the holders.
          </p>
        </article>

        <section className="d-flex flex-wrap col-12 d-none d-lg-flex">
          {NftCards.map((card) => (
            <div className=" p-2 col-4">
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

        {/* Mobile Slider */}

        <Slider className="d-block d-lg-none" {...NftMobileSliderSettings}>
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
        </Slider>
        <div className="nftAvatar">
          <h4>
            “Buy with BNB” <br /> Tap on metacards
          </h4>
          <img src={images.guyMan} alt="" />
        </div>
      </section>

      {/* End Wolfpack NFT Collection section  */}

      {/* Start of DOnate  section  */}

      <section className="donate d-flex flex-column flex-lg-row align-items-center justify-content-between justify-content-lg-around">
        <div className="col-12 col-lg-6 order-1 order-lg-0 ">
          {" "}
          <Slider className="" {...setting3}>
            {marketPlace.map((ui) => (
              <figure className="">
                <img className="" src={ui.logo} alt="wolfpackherd nft cards" />
              </figure>
            ))}
          </Slider>
          <div className="d-block mt-5 text-center d-lg-none">
            <Link data-aos="fade-left" className="Btn btn-black btn-normal">
              WolfPackHerd High-End Marketplace For Metacards
            </Link>
          </div>
        </div>

        <div className="donate-title d-flex order-0 order-lg-1 flex-column col-12 col-lg-5 mb-5 mb-lg-0">
          <h3
            data-aos="fade-right"
            data-aos-duration="2000"
            className="heading-medium text-white"
          >
            Metacard Smart Wallets
          </h3>
          <p data-aos="fade-right" data-aos-duration="2000">
            Our marketplace will be designed to leverage the advanced features
            of the ERC-6551 token standard. This standard provides NFTs with a
            new identity in the world of finance, enabling engaging performance
            and unlocking new possibilities for asset utilization and value
            creation.Trading fees shared with early backers and MetaCard holders
            that contributes to development to benefit from marketplace success
            (12000 Spots).
          </p>{" "}
          <div className="d-none d-lg-block">
            <Link data-aos="fade-left" className="Btn btn-black btn-normal">
              High-End Marketplace For Metacards
            </Link>
          </div>
        </div>
      </section>

      {/* End of DOnate  section  */}

      {/* Start of Partners  section  */}

      <section className="partners home-containers d-flex flex-column align-items-center justify-content-center">
        <h4 className="mb-5"> Our Connections </h4>
        <div className="d-flex flex-wrap align-items-center justify-content-center gap-2">
          {partnersLogo.map((partner) => (
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="col-3 col-md-2"
            >
              <img
                className="col-12 mx-auto"
                src={partner.logo}
                alt="wolfpackherd nft cards"
              />
            </div>
          ))}
        </div>
      </section>

      {/* End of Partners  section  */}

      {/* Start of Newsletter  section  */}

      <section
        data-aos="zoom-in"
        className="newsletter home-containers d-flex flex-column align-items-center"
      >
        <article className="d-flex flex-column flex-lg-row justify-content-between text-center text-lg-start">
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="col-12 col-lg-4"
          >
            <h3> Newsletters</h3>
            <p>
              {" "}
              Don’t miss Wolfpackherd updates! Join our mailing list to stay in
              the loop with our newest feature.{" "}
            </p>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="col-12 col-lg-7"
          >
            <input
              type="email"
              placeholder="Email"
              className="form-control p-3"
            />
          </div>
        </article>
        <div className="mt-5">
          <Link data-aos="fade-left" className="Btn btn-black btn-normal">
            {" "}
            Subscribe{" "}
          </Link>
        </div>
        <figure className="guyMan col-5 col-md-3">
          <img src={images.guyMan} alt="" />
        </figure>
      </section>
      <section className="d-flex flex-column  justify-content-center">
        <h4 className="mb-5 text-center"> Yield Makers </h4>

        <Slider className="" {...settingMaker}>
          {makersLogo.map((partner) => (
            <figure className="">
              <img
                className=""
                src={partner.logo}
                alt="wolfpackherd nft cards"
              />
            </figure>
          ))}
        </Slider>
      </section>

      {/* End of Newsletter  section  */}
    </div>
  );
}

export default HomePage;
