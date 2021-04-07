import React from "react";
import CardBlockShop from "../utils/card_block_shop";

const LoadmoreCard = (props) => {
  return (
    <>
      <CardBlockShop list={props.products} size={props.size} />
      {props.size > 0 && props.size >= props.limit ? (
        <div class="container d-flex justify-content-center">
          <a
            class="btn btn-primary d-flex justify-content-center"
            onClick={() => props.loadMore()}
            role="button"
          >
            Load more
          </a>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default LoadmoreCard;
