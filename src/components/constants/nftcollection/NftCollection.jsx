import React from "react";
import { Link } from "react-router-dom";
// import images from "../../exports/images";

// styles
import "./NftCollection.scss";

function NftCollection({ imageUrl, title, desc, qty, floor, apy }) {
  return (
    <div className="nft-card-container">
      <Link>
        <div className="nft-card-image">
          <img src={imageUrl} alt="wolfpackherd nft collections" />
        </div>

        <div className="p-3 nft-card-title">
          <h3 className="heading-medium"> {title} </h3>
          <p>{desc}</p>
          <div className="d-flex flex-column nft-card-details">
            {" "}
            <span>
              {" "}
              Quantity: <strong> {qty} </strong>{" "}
            </span>{" "}
            <span>
              {" "}
              Floor price: <strong> {floor} </strong>{" "}
            </span>{" "}
            <span>
              {" "}
              APY Earning: <strong> {apy} </strong>{" "}
            </span>{" "}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default NftCollection;

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="nft-card-container">
<Link>
  <div className="nft-card-image">
    <img src={images.alien} alt="wolfpackherd nft collections" />
  </div>

  <div className="p-3 nft-card-title">
    <h3 className="heading-medium"> Alien Trunk NFT</h3>
    <p>
      Alien Trunk NFT is the leader of the pack and the rarest NFT in our
      collection. Holding this NFT gives users access to whitelist spots
      on all future projects.
    </p>
    <div className="d-flex flex-column nft-card-details">
      {" "}
      <span>
        {" "}
        Quantity: <strong> 2000</strong>{" "}
      </span>{" "}
      <span>
        {" "}
        Floor price: <strong> 3.69BNB</strong>{" "}
      </span>{" "}
      <span>
        {" "}
        APY Earning: <strong>%4</strong>{" "}
      </span>{" "}
    </div>
  </div>
</Link>
</div> */
}
