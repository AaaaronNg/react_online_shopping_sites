import React, { Component } from "react";
import Header from "../component/Header_footer/Hearder";
import Footer from "../component/Header_footer/Footer";
import DialogSuccess from "../component/Register_login/dialogSuccess";

class Layout extends Component {
  render() {
    return (
      <div>
        <DialogSuccess />
        <Header />
        <div>{this.props.children}</div>

        <Footer />
      </div>
    );
  }
}

export default Layout;
