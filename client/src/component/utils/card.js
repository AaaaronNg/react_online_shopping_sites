import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  byArrivalimg = (props) => {
    switch (props.name) {
      case "AZ2040":
        return `${process.env.PUBLIC_URL}/assets/new_arrival/arrival1.jpeg`;
      case "Roadcore":
        return `${process.env.PUBLIC_URL}/assets/new_arrival/arrival2.jpeg`;
      case "JEM UV7":
        return `${process.env.PUBLIC_URL}/assets/new_arrival/arrival3.jpeg`;
      case "TELE-ub23":
        return `${process.env.PUBLIC_URL}/assets/new_arrival/arrival4.jpeg`;
      default:
        return `${process.env.PUBLIC_URL}/assets/shop/gray.jpeg`;
    }
  };

  render() {
    const props = this.props;

    return (
      <>
        <div class="col-sm-12 col-md-6  col-lg-3 p-3">
          <div class="card  h-100 w-100">
            <div class="card-body text-dark">
              <div class="container">
                <img
                  class="pb-4 w-100"
                  src={this.byArrivalimg(props)}
                  alt={props.name}
                />
              </div>

              <h5 class="card-title d-flex justify-content-center">
                {props.brand.name}
              </h5>
              <h6 class="card-subtitle mb-2 text-muted d-flex justify-content-center">
                {props.name}
              </h6>
              <p class="card-text d-flex justify-content-center">
                ${props.price}
              </p>
              <Link to={"/shop"} style={{ textDecoration: "none" }}>
                <a class="btn btn-secondary d-flex justify-content-center link-light fw-bold ">
                  shop now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
