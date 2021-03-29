import React, { Component } from "react";
import FormField from "../utils/Form/formField";
import { update, generateData, isFormValid } from "../utils/Form/formActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { registerUser } from "../../actions/user_actions";

import { Modal } from "bootstrap";

class Register extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formdata: {
      email: {
        element: "input_register_email",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Email address",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
        validationMessage: "This field is required",
      },
      name: {
        element: "input_name",
        value: "",
        config: {
          name: "name_input",
          type: "text",
          placeholder: "Enter your firstname",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "This field is required",
      },
      lastname: {
        element: "input_lastname",
        value: "",
        config: {
          name: "lastname_input",
          type: "text",
          placeholder: "Enter your lastname",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "This field is required",
      },
      password: {
        element: "input_register_password",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "This field is required",
      },
      confirmPassword: {
        element: "input_confirmPassword",
        value: "",
        config: {
          name: "confirmPassword",
          type: "password",
          placeholder: "confirm your password",
        },
        validation: {
          required: true,
          confirm: "password", // that is ref
        },
        valid: false,
        touched: false,
        validationMessage: "This field is required",
      },
    },
  };
  submitForm = (event) => {
    // this.props -> coming from routes.js

    event.preventDefault();

    let dataToSubmit = generateData(this.state.formdata, "register");
    let formIsValid = isFormValid(this.state.formdata, "register");
    console.log("formIsValid", formIsValid);
    if (formIsValid) {
      this.props
        .dispatch(registerUser(dataToSubmit))
        .then((response) => {
          console.log(response.payload);
          if (response.payload.success) {
            console.log(response.payload.success);
            let modal = new Modal(document.getElementById("exampleModal"));
            modal.show();
            this.setState({ forError: false, formSuccess: true });

            setTimeout(() => {
              modal.hide();
              this.props.history.push("/login");
            }, 3000);
          } else {
            this.setState({ forError: true });
          }
        })
        .catch((e) => {
          this.setState({ formError: true });
        });
    } else {
      this.setState({
        formError: true,
      });
    }
  };

  updateForm = (element) => {
    const newFormdata = update(element, this.state.formdata, "register");
    this.setState({
      formError: false,
      formdata: newFormdata,
    });
  };

  render() {
    console.log("register render");
    return (
      <div>
        <div class="container">
          <div class="row py-5 mt-4 align-items-center">
            <div class="col-md-5 pr-lg-5">
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
              <form onSubmit={(event) => this.submitForm(event)}>
                {/* First Name */}
                <FormField
                  id={"name"} // firstName
                  formdata={this.state.formdata.name} // formdata
                  change={(element) => {
                    //  function to update the form
                    this.updateForm(element);
                  }}
                />

                {/* last name */}
                <FormField
                  id={"lastname"} // firstName
                  formdata={this.state.formdata.lastname} // formdata
                  change={(element) => {
                    //  function to update the form
                    this.updateForm(element);
                  }}
                />

                {/* Email Address */}
                <FormField
                  id={"email"} // email
                  formdata={this.state.formdata.email} // formdata
                  change={(element) => {
                    //  function to update the form
                    this.updateForm(element);
                  }}
                />

                {/* password */}
                <FormField
                  id={"password"} // firstName
                  formdata={this.state.formdata.password} // formdata
                  change={(element) => {
                    //  function to update the form
                    this.updateForm(element);
                  }}
                />

                {/* confirm password */}
                <FormField
                  id={"confirmPassword"} // firstName
                  formdata={this.state.formdata.confirmPassword} // formdata
                  change={(element) => {
                    //  function to update the form
                    this.updateForm(element);
                  }}
                />

                {this.state.formError ? (
                  <p class="text-danger">check your data</p>
                ) : null}

                {/* submit button */}
                <div class="form-group col-lg-12 mx-auto mb-0">
                  <a
                    onClick={(event) => this.submitForm(event)}
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
                    <span class="fw-bold text-white">
                      Continue with Facebook
                    </span>
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
                    <span class="fw-bold text-white">
                      Continue with Twitter
                    </span>
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
  }
}

export default connect()(withRouter(Register));
