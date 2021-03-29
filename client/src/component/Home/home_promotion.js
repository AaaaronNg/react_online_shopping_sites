import React from "react";

const HomePromotion = (props) => {
  const promotion = [
    {
      title: "acoustic",
      img: `${process.env.PUBLIC_URL}/assets/promotion/acoustic.jpeg`,
      linkTo: "/shop",
    },
    {
      title: "bass",
      img: `${process.env.PUBLIC_URL}/assets/promotion/bass.jpeg`,
      linkTo: "/shop",
    },
    {
      title: "electric",
      img: `${process.env.PUBLIC_URL}/assets/promotion/electric.jpeg`,
      linkTo: "/shop",
    },
  ];

  const product = (title) => {
    if (title === "acoustic") {
      return (
        <>
          <h5>Acoustic</h5>
          <p>
            Its strings vibrate a sound board on a resonant body to project a
            sound wave through the air.
          </p>
        </>
      );
    } else if (title === "bass") {
      return (
        <>
          <h5>Bass</h5>
          <p>
            The bass guitar, electric bass or simply bass, is the lowest-pitched
            member of the guitar family.
          </p>
        </>
      );
    }

    return (
      <>
        <h5>Electric Guitar</h5>
        <p>
          An electric guitar is a guitar that requires external amplification in
          order to be heard at typical performance volumes.
        </p>
      </>
    );
  };

  const generatePro = () =>
    promotion
      ? promotion.map((item, i) => (
          <div class="col-md-4" key={i}>
            <img class="w-100 pb-4" src={item.img} alt={item.title} />
            {product(item.title)}
            <a class="btn btn-secondary" linkTo={item.linkTo} role="button">
              shop now
            </a>
          </div>
        ))
      : null;

  return (
    <div>
      <div class="row px-5">{generatePro()}</div>
    </div>
  );
};

export default HomePromotion;
