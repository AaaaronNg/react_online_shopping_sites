import React from "react";

const FormField = ({ formdata, change, id }) => {
  const renderTemplate = () => {
    let formTemplate = null;

    switch (formdata.element) {
      case "input_name":
        formTemplate = (
          <div class="input-group col-lg-6 mb-4">
            <div class="input-group-prepend">
              <span class="input-group-text bg-white px-4 border-md border-right-0">
                <i class="bi bi-person text-muted"></i>
              </span>
            </div>
            <input
              {...formdata.config}
              onBlur={(event) => change({ event, id, blur: true })} // update the form -> check input empty or not
              onChange={(event) => change({ event, id })} // update the form
              class={
                formdata.validation && !formdata.valid
                  ? "form-control bg-white border-left-0 border-md is-invalid"
                  : "form-control bg-white border-left-0 border-md"
              }
            />
            <div
              class={
                formdata.validation && !formdata.valid
                  ? "invalid-feedback"
                  : "valid-feedback"
              }
            >
              {formdata.validationMessage}
            </div>
          </div>
        );
        break;
      case "input_lastname":
        formTemplate = (
          <div class="input-group col-lg-6 mb-4">
            <div class="input-group-prepend">
              <span class="input-group-text bg-white px-4 border-md border-right-0">
                <i class="bi bi-person text-muted"></i>
              </span>
            </div>
            <input
              {...formdata.config}
              onBlur={(event) => change({ event, id, blur: true })} // update the form -> check input empty or not
              onChange={(event) => change({ event, id })} // update the form
              class={
                formdata.validation && !formdata.valid
                  ? "form-control bg-white border-left-0 border-md is-invalid"
                  : "form-control bg-white border-left-0 border-md "
              }
            />
            <div
              class={
                formdata.validation && !formdata.valid
                  ? "invalid-feedback"
                  : "valid-feedback"
              }
            >
              {formdata.validationMessage}
            </div>
          </div>
        );
        break;
      case "input_register_password":
        formTemplate = (
          <div class="input-group col-lg-6 mb-4">
            <div class="input-group-prepend">
              <span class="input-group-text bg-white px-4 border-md border-right-0">
                <i class="bi bi-lock"></i>
              </span>
            </div>
            <input
              {...formdata.config}
              onBlur={(event) => change({ event, id, blur: true })} // update the form -> check input empty or not
              onChange={(event) => change({ event, id })} // update the form
              class={
                formdata.validation && !formdata.valid
                  ? "form-control bg-white border-left-0 border-md is-invalid"
                  : "form-control bg-white border-left-0 border-md"
              }
            />
            <div
              class={
                formdata.validation && !formdata.valid
                  ? "invalid-feedback"
                  : "valid-feedback"
              }
            >
              {formdata.validationMessage}
            </div>
          </div>
        );
        break;
      case "input_register_email":
        formTemplate = (
          <div class="input-group col-lg-12 mb-4">
            <div class="input-group-prepend">
              <span class="input-group-text bg-white px-4 border-md border-right-0">
                <i class="bi bi-envelope-fill text-muted"></i>
              </span>
            </div>
            <input
              {...formdata.config}
              onBlur={(event) => change({ event, id, blur: true })} // update the form -> check input empty or not
              onChange={(event) => change({ event, id })} // update the form
              class={
                formdata.validation && !formdata.valid
                  ? "form-control bg-white border-left-0 border-md is-invalid"
                  : "form-control bg-white border-left-0 border-md "
              }
            />
            <div
              class={
                formdata.validation && !formdata.valid
                  ? "invalid-feedback"
                  : "valid-feedback"
              }
            >
              {formdata.validationMessage}
            </div>
          </div>
        );
        break;
      case "input_confirmPassword":
        formTemplate = (
          <div class="input-group col-lg-6 mb-4">
            <div class="input-group-prepend">
              <span class="input-group-text bg-white px-4 border-md border-right-0">
                <i class="bi bi-lock"></i>
              </span>
            </div>
            <input
              {...formdata.config}
              onBlur={(event) => change({ event, id, blur: true })} // update the form -> check input empty or not
              onChange={(event) => change({ event, id })} // update the form
              class={
                formdata.validation && !formdata.valid
                  ? "form-control bg-white border-left-0 border-md "
                  : "form-control bg-white border-left-0 border-md "
              }
            />
            <div
              class={
                formdata.validation && !formdata.valid
                  ? "invalid-feedback"
                  : "valid-feedback"
              }
            >
              {formdata.validationMessage}
            </div>
          </div>
        );
        break;
      case "input_email":
        formTemplate = (
          <div class="input-group col-lg-12 mb-4 px-4">
            <span class="input-group-text bg-white px-4 border-md border-right-0">
              <i class="bi bi-envelope-fill text-muted"></i>
            </span>
            <input
              {...formdata.config}
              value={formdata.value} //
              onBlur={(event) => change({ event, id, blur: true })} // update the form -> check input empty or not
              onChange={(event) => change({ event, id })} // update the form
              class={
                formdata.validation && !formdata.valid
                  ? "form-control bg-white border-left-0 border-md is-invalid"
                  : "form-control bg-white border-left-0 border-md"
              }
            />
            <div
              class={
                formdata.validation && !formdata.valid
                  ? "invalid-feedback"
                  : "valid-feedback"
              }
            >
              {formdata.validationMessage}
            </div>
          </div>
        );
        break;
      case "input_password":
        formTemplate = (
          <div class="input-group col-lg-6 mb-2 px-4">
            <span class="input-group-text bg-white px-4 border-md border-right-0">
              <i class="bi bi-lock"></i>
            </span>

            <input
              {...formdata.config}
              onBlur={(event) => change({ event, id, blur: true })} // update the form -> check input empty or not
              onChange={(event) => change({ event, id })} // update the form
              class={
                formdata.validation && !formdata.valid
                  ? "form-control bg-white border-left-0 border-md is-invalid"
                  : "form-control bg-white border-left-0 border-md is-valid"
              }
            />
            <div
              class={
                formdata.validation && !formdata.valid
                  ? "invalid-feedback"
                  : "valid-feedback"
              }
            >
              {formdata.validationMessage}
            </div>
          </div>
        );
        break;
      default:
        formTemplate = null;
    }

    return formTemplate;
  };
  return <div>{renderTemplate()}</div>;
};

export default FormField;
