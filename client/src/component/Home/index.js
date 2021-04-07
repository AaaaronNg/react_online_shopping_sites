import React, { Component } from "react";
import HomeSlider from "./home_slider";
import HomePromotion from "./home_promotion";
import CardBlock from "../utils/card_block";

import { connect } from "react-redux";

import {
  getProductsByArrival,
  getProductsBySell,
} from "../../actions/product_actions";

class Home extends Component {
  componentDidMount() {
    console.log("componentDidMount in  Home", this.props);
    this.props.dispatch(getProductsBySell());
    console.log("finish bySell");
    this.props.dispatch(getProductsByArrival());
    console.log("dispatched in Home");
  }

  render() {
    console.log("render Home");
    return (
      <div>
        <HomeSlider />
        <HomePromotion />
        <CardBlock title="New Arrival" list={this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps in home", state.products, state.user);
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(Home);
