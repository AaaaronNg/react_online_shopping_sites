import React, { Component } from "react";
import { connect } from "react-redux"; // check user correct email and password
import FormField from "../utils/Form/formField";
import { update, generateData, isFormValid } from "../utils/Form/formActions";
import { loginUser } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";

class LoginComm extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      email: {
        element: "input_email",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Email address hello",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      password: {
        element: "input_password",
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
        validationMessage: "",
      },
    },
  };

  updateForm = (element) => {
    const newFormdata = update(element, this.state.formdata, "login");
    this.setState({
      formError: false,
      formdata: newFormdata,
    });
    console.log(this.state);
  };

  submitForm = (event) => {
    // this.props -> coming from routes.js
    event.preventDefault();
    let dataToSubmit = generateData(this.state.formdata, "login");
    let formIsValid = isFormValid(this.state.formdata, "login");
    if (formIsValid) {
      this.props.dispatch(loginUser(dataToSubmit)).then((response) => {
        if (response.payload.loginSuccess) {
          console.log(response.payload);
          console.log(this.props);
          this.props.history.push("/user/dashboard");
        } else {
          this.setState({ formError: true });
        }
      });
    } else {
      this.setState({
        formError: true,
      });
    }
  };
  render() {
    return (
      <div>
        <form
          onSubmit={(event) => {
            this.submitForm(event);
          }}
        >
          <FormField
            id={"email"} //email
            formdata={this.state.formdata.email} // formdata
            change={(element) => {
              //  function to update the form
              this.updateForm(element);
            }}
          />

          <FormField
            id={"password"}
            formdata={this.state.formdata.password}
            change={(element) => {
              this.updateForm(element);
            }}
          />
          {/* remember me */}
          <div class="input-group col-lg-6 px-4 mb-4">
            <input
              class="form-check-input rounded"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            ></input>

            <p class="text-muted ps-2">Remember me</p>
          </div>

          {this.state.formError ? (
            <p class="text-danger">check your data</p>
          ) : null}
          {/* login button */}
          <div class="form-group col-lg-12 pb-4 d-flex justify-content-center">
            <a
              onClick={(event) => this.submitForm(event)}
              class="btn active col-11 btn-lg bg-primary"
            >
              <span class="fw-bold text-white">LOGIN</span>
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(withRouter(LoginComm));
