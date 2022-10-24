import React from "react";
import images from "../exports/images";

import "./ConnectWallet.scss";

function ConnectWallet() {
  const WalletData = [
    {
      name: "Metamask",
      desc: "Connect to your Metamask",
      imageUrl: images.metamask,
    },
    {
      name: "WalletConnect",
      desc: "Connect to youe Wallet",
      imageUrl: images.walletconnect,
    },
    {
      name: "Binance Chain",
      desc: "Connect  to your Binance Chain Wallet",
      imageUrl: images.binance,
    },
    {
      name: "Coinbase Wallet",
      desc: "Scan with Coinbase Wallet to Connect",
      imageUrl: images.coinbase,
    },
  ];

  return (
    <div className="popUp-container">
      <section className="d-flex flex-wrap justify-content-between">
        {WalletData.map((item, i) => (
          <article key={i} className="text-center col-12 col-lg-6 ">
            <img src={item.imageUrl} alt="wallet icons" />
            <h2> {item.name} </h2>
            <p> {item.desc} </p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ConnectWallet;
