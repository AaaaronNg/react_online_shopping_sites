import React, { Component } from "react";
import Header from "../component/Header_footer/Hearder";
import Footer from "../component/Header_footer/Footer";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>{this.props.children}</div>

        <Footer />
      </div>
    );
  }
}

export default Layout;
