import React from "react";
import Card from "../utils/card";

const CardBlockShop = (props) => {
  const renderCards = () =>
    props.list ? (
      props.list.map((card) => (
        <Card key={card._id} {...card} grid={props.grid} />
      ))
    ) : (
      <div>Loading...</div>
    );
  return (
    <>
      <div class="row">{renderCards()}</div>
    </>
  );
};

export default CardBlockShop;
