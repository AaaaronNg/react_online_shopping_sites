import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    name: "My account",
    linkTo: "/user/dashboard",
  },
  {
    name: "User information",
    linkTo: "/user/user_profile",
  },
  {
    name: "My cart",
    linkTo: "/user/cart",
  },
];

const UserLayout = (props) => {
  const generateLinks = (links) =>
    links.map((item, i) => {
      if (item.name === "My account") {
        return (
          <li class="nav-item p-2 ">
            <Link to={item.linkTo} key={i} class="link-dark fw-bold">
              <span>
                <i class="bi bi-person-circle pe-2"></i>
              </span>
              {item.name}
            </Link>
          </li>
        );
      } else if (item.name === "User information") {
        return (
          <li class="nav-item p-2 ">
            <Link to={item.linkTo} key={i} class="link-dark fw-bold">
              <span>
                <i class="bi bi-info-circle pe-2 "></i>
              </span>
              {item.name}
            </Link>
          </li>
        );
      } else {
        return (
          <li class="nav-item p-2 ">
            <Link to={item.linkTo} key={i} class="link-dark fw-bold">
              <span class="text-dark">
                <i class="bi bi-bag pe-2"></i>
                {item.name}
              </span>
            </Link>
          </li>
        );
      }
    });

  return (
    <div>
      <div class="row">
        <nav class="col-md-3 col-lg-2 d-md-block bg-secondary sidebar collapse">
          <div class="position-sticky pt-3">
            <ul class="nav flex-column">{generateLinks(links)}</ul>
          </div>
        </nav>
        {props.children}
      </div>
    </div>
  );
};

export default UserLayout;
