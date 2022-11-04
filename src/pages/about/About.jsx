import React from "react";
import images from "../../components/exports/images";
import "./About.scss";

function About() {
  return (
    <main className="about d-flex flex-column">
      <section className="hero-container d-flex justify-content-center align-items-center text-center">
        <h2> About Wolfpackherd </h2>
      </section>

      <div className="container body d-flex flex-column align-items-center p-4 p-lg-0">
        {/* Who we are */}
        <section className="d-flex flex-column flex-lg-row justify-content-between align-items-center mt-5">
          <article className="col-12 col-lg-5">
            <h4>Who we are</h4>
            <p>
              {" "}
              NFTs are creating a situation where transactions are automated
              without recourse to humans. This is naturally changing traditional
              operating systems of all kinds. <br /> <br />
              WolfPackHerd is a globalized network on the BNB blockchain and
              will continue to evolve with the blockchain. With WolfPackHerd,
              the development team wants to show the world that the shared
              progression of success is possible through the new digital age.{" "}
              <br /> <br />
              WolfPackHerd will develop opportunities through products,
              services, tools, and resources that will promote the evolution of
              passive income using cryptocurrency.
              <br />
              WolfPackHerd using proven NFT solutions will help to create new
              job spaces in the crypto ecosystem and grow with a large
              community.
            </p>
          </article>

          <aside className="col-12 col-lg-7 p-1 p-lg-5">
            <img className="col-12" src={images.think} alt="" />
          </aside>
        </section>

        {/* Our Goals */}
        <section className="d-flex flex-column flex-lg-row justify-content-between align-items-center mt-5">
          <article className="col-12 col-lg-5 order-0 order-lg-1">
            <h4>Our Goals</h4>
            <p>
              WolPackHerd seeks to create a community that is constantly being
              rewarded for holding NFTs. Every holder will benefit from the
              project financially by receiving stable coins on a short and
              long-term basis.
              <br /> <br />
              To achieve this, the project will focus on diversifying and taking
              it a notch up to more than just crypto by proposing voting rights
              to NFT holders.
              <br /> <br />
              The project aims to build a revenue basket for everyone and will
              embark on rounded crypto funds in real-world businesses and
              services, thus generating revenue for holders. WolfPackHerd will
              focus on creating high-quality revenue paths in the crypto space
              and beyond
            </p>
          </article>

          <aside className="col-12 col-lg-7 p-1 p-lg-5 order-1 order-lg-0">
            <img className="col-12" src={images.sharedgoal} alt="" />
          </aside>
        </section>

        {/* Community Vote */}
        <section className="d-flex flex-column flex-lg-row justify-content-between align-items-center community-container">
          <article className="col-12 col-lg-6 ">
            <div className="vote">
              <h4>Community Vote </h4>
            </div>
            <h2>
              Owning our NFT token gives members of our community voting rights.{" "}
            </h2>
            <p>
              Decisions on community growth and direction will be decided by
              members of our community via votes.
            </p>
          </article>

          <aside className="col-12 col-lg-5 ">
            <img className="col-12" src={images.Illustrator} alt="" />
          </aside>
        </section>

        {/* support us*/}
        <section className="d-flex flex-column support-container">
          <h4>Support Us </h4>

          <p>
            {" "}
            A huge part of this project is our donation towards Saving Elephants
            and Habitat Worldwide. We believe in creating a sustainable future
            where elephants can thrive. Hence, we urge you to join us in making
            donations to the International Elephant Foundation.
            <br /> <br />
            Your donation will go towards creating a sustainable future for
            elephants. IEF generates and effectively invests resources to
            support elephant conservation, education, research, and management
            programs worldwide. For every donation, you get an NFT in return for
            your generous contribution. Help us save Elephants from probable
            extinction before it becomes inevitable
            <br /> <br />
            If you like our project and want to support our work, you can donate
            here.
            <br /> <br />
            BTC: <strong>
              {" "}
              3R1kd5ZvfiUTV6rcVG5xuiWn5KFPscicGX{" "}
            </strong> <br /> <br />
            ETH: <strong>
              {" "}
              0x263C09e02fDf5f36a99C5898DD21F88B24a5Ee2d{" "}
            </strong>{" "}
            <br /> <br />
            XRP: <strong>
              {" "}
              rLBS2LytjifykTytPQeqDdvFCDnLG3nunq{" "}
            </strong> <br /> <br />{" "}
          </p>
        </section>
      </div>
    </main>
  );
}

export default About;
