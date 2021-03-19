import React from "react";

const RegisterLogin = () => {
  return (
    <div>
      <div class="container">
        <div class="row py-5 mt-4 align-items-center">
          <div class="col-md-5 pr-lg-5 ">
            <img
              src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg"
              alt=""
              class="img-fluid mb-3 d-none d-md-block" // responsive img
            ></img>

            <h1>Create an Account</h1>
            <p class="font-italic text-muted mb-0">
              Create a minimal registeration page using Bootstrap 4 HTML form
              elements.
            </p>
          </div>

          {/* Registeration Form */}
          <div class="col-md-7 col-lg-6 ml-auto">
            <form>
              <div class="row">
                {/* First Name */}
                <div class="input-group col-lg-6 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="bi bi-person text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="firstName"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    class="form-control bg-white border-left-0 border-md"
                  ></input>
                </div>
              </div>

              {/* last name */}
              <div class="input-group col-lg-6 mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-white px-4 border-md border-right-0">
                    <i class="bi bi-person text-muted"></i>
                  </span>
                </div>
                <input
                  id="lastName"
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  class="form-control bg-white border-left-0 border-md"
                ></input>
              </div>

              {/* Email Address */}
              <div class="input-group col-lg-12 mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-white px-4 border-md border-right-0">
                    <i class="bi bi-envelope-fill text-muted"></i>
                  </span>
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  class="form-control bg-white border-left-0 border-md"
                ></input>
              </div>

              {/* password */}
              <div class="input-group col-lg-6 mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-white px-4 border-md border-right-0">
                    <i class="bi bi-lock"></i>
                  </span>
                </div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  class="form-control bg-white border-left-0 border-md"
                ></input>
              </div>

              {/* confirm password */}

              <div class="input-group col-lg-6 mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text bg-white px-4 border-md border-right-0">
                    <i class="bi bi-lock"></i>
                  </span>
                </div>
                <input
                  id="passwordConfirmation"
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Confirm Password"
                  class="form-control bg-white border-left-0 border-md"
                ></input>
              </div>
              {/* submit button */}
              <div class="form-group col-lg-12 mx-auto mb-0">
                <a
                  href="#"
                  class="btn btn-primary active btn-block col-12"
                  role="button"
                >
                  Create your Account
                </a>
              </div>
              {/* Divider text */}
              <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                <div class="border-bottom w-100 ml-5"></div>
                <span class="px-2 small text-muted font-weight-bold text-muted">
                  OR
                </span>
                <div class="border-bottom w-100 mr-5"></div>
              </div>
              {/* facebook */}

              <div class="form-group col-lg-12 mx-auto pb-4">
                <a
                  href="#"
                  class="btn active col-12"
                  style={{ backgroundColor: "#303F9F" }}
                >
                  <i
                    class="bi bi-facebook me-2"
                    style={{ backgroundColor: "#303F9F", color: "white" }}
                  ></i>
                  <span class="fw-bold text-white">Continue with Facebook</span>
                </a>
              </div>

              {/* twitter */}
              <div class="form-group col-lg-12 mx-auto mb-4">
                <a
                  href="#"
                  class="btn col-12 active"
                  style={{ backgroundColor: "#29B6F6" }}
                >
                  <i
                    class="bi bi-twitter me-2"
                    style={{ backgroundColor: "#29B6F6", color: "white" }}
                  ></i>
                  <span class="fw-bold text-white">Continue with Twitter</span>
                </a>
              </div>

              <div class="w-100 text-center">
                <p class="text-muted fw-bold">
                  Already Registered?
                  <a href="#" class="text-primary ms-2">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
