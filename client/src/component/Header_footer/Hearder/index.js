import "./index.css";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import React, { Component } from "react";
import { logoutUser } from "../../../actions/user_actions";

class Header extends Component {
  state = {
    page: [
      {
        name: "Home",
        linkTo: "/",
        public: true,
      },
      {
        name: "Guitars",
        linkTo: "/shop",
        public: true,
      },
    ],
    user: [
      {
        name: "My Cart",
        linkTo: "/user/cart",
        public: false,
      },
      {
        name: "My Account",
        linkTo: "/user/dashboard",
        public: false,
      },
      {
        name: "Log in",
        linkTo: "/login",
        public: true,
      },
      {
        name: "Log out",
        linkTo: "/user/logout",
        public: false,
      },
    ],
  };

  logOutHandler = () => {
    this.props.dispatch(logoutUser()).then((response) => {
      if (response.payload.success) {
        this.props.history.push("/");
      }
    });
  };

  defaultLink = (item, i) =>
    item.name === "Log out" ? (
      <li class="nav-item pe-5 ">
        <Link
          onClick={() => this.logOutHandler()}
          key={i}
          class="nav-link link-light fw-bold"
        >
          {item.name}
        </Link>
      </li>
    ) : (
      <li class="nav-item pe-5 ">
        <Link to={item.linkTo} key={i} class="nav-link link-light fw-bold">
          {item.name}
        </Link>
      </li>
    );

  showLinks = (type) => {
    let list = [];
    if (this.props.user.userData) {
      type.forEach((item) => {
        if (!this.props.user.userData.isAuth) {
          //console.log(this.props.user.userData.isAuth);
          if (item.public === true) {
            list.push(item);
          }
        } else {
          if (item.name !== "Log in") {
            list.push(item);
          }
        }
      });
    }

    return list.map((item, i) => {
      if (item.name !== "My Cart") {
        return this.defaultLink(item, i);
      } else {
        return this.cartLink(item, i);
      }
    });
  };

  cartLink = (item, i) => {
    const user = this.props.user.userData;
    return (
      <li class="nav-item pe-5 ">
        <Link to={item.linkTo} key={i} class="nav-link link-light fw-bold ">
          {item.name}

          <span class="badge bg-danger rounded-pill ms-2">
            {user.cart ? user.cart.length : 0}
          </span>
        </Link>
      </li>
    );
  };

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                {/* dropdown menu */}
                <li class="nav-item dropdown pe-5">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>

                {/* acoustic */}
                {this.showLinks(this.state.page)}
                {this.showLinks(this.state.user)}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStatToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStatToProps)(withRouter(Header));
