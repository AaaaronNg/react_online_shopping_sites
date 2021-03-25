import "./index.css";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
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
              <li class="nav-item pe-5 ">
                <a class="nav-link " href="#">
                  Acoustic
                </a>
              </li>
              <li class="nav-item pe-5">
                <a class="nav-link" href="#">
                  Bass
                </a>
              </li>
              <li class="nav-item pe-5">
                <a class="nav-link" href="#">
                  Amps
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
