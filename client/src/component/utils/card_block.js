import React from "react";
import Card from "./card";

const CardBlock = (props) => {
  const renderCards = () =>
    props.list.products.byArrival ? (
      props.list.products.byArrival.map((card, i) => <Card key={i} {...card} />)
    ) : (
      <div>Loading...</div>
    );

  // const renderCards = () => {
  //   props.list.products.byArrival
  //     ? props.list.products.byArrival.map((card, i) => {
  //         console.log(card, i);
  //       })
  //     : console.log("nothing");
  // };
  // props.list ? props.list.map((card, i) => <div>"card"</div>) : null;

  return (
    <>
      <div class="px-5 py-3">
        <h5 class="d-flex justify-content-center py-5 display-3 fw-bold">
          {props.title}
        </h5>
        <div class="container">
          <div class="row">{renderCards()}</div>
        </div>
      </div>
    </>
  );
};

export default CardBlock;
