import React from "react";
import img from "../../asset/guitarBackground.jpeg";
import "./login.css";
import LoginField from "./loginComm";

const Login = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${img})` }}
        class="bg-cover page-holder"
      >
        <div class="container pt-5">
          <div class="py-5 mt-4 d-flex justify-content-center">
            <div class="card">
              <div class="card-body">
                <p class="h1 text-dark py-5 mb-4 text-center">Login</p>
                <form>
                  {/* email */}
                  {/* password */}
                  <LoginField />
                  {/* remember me */}

                  {/* login */}

                  {/* or */}
                  <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                    <div class="border-bottom w-100 ml-5"></div>
                    <span class="px-2 small text-muted font-weight-bold text-muted">
                      OR
                    </span>
                    <div class="border-bottom w-100 mr-5"></div>
                  </div>
                  {/* facebook */}
                  <div class="form-group col-lg-12 pb-4 d-flex justify-content-center">
                    <a
                      href="#"
                      class="btn active col-11 btn-lg"
                      style={{ backgroundColor: "#303F9F" }}
                    >
                      <i
                        class="bi bi-facebook me-2"
                        style={{ backgroundColor: "#303F9F", color: "white" }}
                      ></i>
                      <span class="fw-bold text-white">
                        Continue with Facebook
                      </span>
                    </a>
                  </div>
                  {/* twitter */}
                  <div class="form-group col-lg-12 pb-4 d-flex justify-content-center">
                    <a
                      href="/test"
                      class="btn active col-11 btn-lg"
                      style={{ backgroundColor: "#29B6F6" }}
                    >
                      <i
                        class="bi bi-twitter me-2"
                        style={{ backgroundColor: "#29B6F6", color: "white" }}
                      ></i>
                      <span class="fw-bold text-white">
                        Continue with Twitter
                      </span>
                    </a>
                  </div>
                </form>
                <div class=" col-lg-12 pb-4 d-flex justify-content-center text-muted fw-bold">
                  <p>Not a member ?</p>
                  <a href="#" class="link-primary ps-2">
                    sign up now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
