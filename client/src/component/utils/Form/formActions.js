export const validate = (element, formdata = []) => {
  let error = [true, ""];

  console.log(element.validation.email);

  // first check the validation of email
  if (element.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(element.value);

    const message = `${!valid ? "Must be a valid email" : ""}`;
    error = !valid ? [valid, message] : error;
  }
  // second check the requried
  if (element.validation.required) {
    const valid = element.value.trim() !== "";

    const message = `${!valid ? "This field is required" : ""}`;
    error = !valid ? [valid, message] : error;
  }

  return error;
};

export const update = (element, formdata, formName) => {
  const newFormdata = {
    ...formdata,
  };
  const newElement = {
    ...newFormdata[element.id],
  };

  newElement.value = element.event.target.value;

  if (element.blur) {
    let validData = validate(newElement, formdata);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
  }

  newElement.touched = element.blur;
  newFormdata[element.id] = newElement;

  return newFormdata;
};

export const generateData = (formdata, formName) => {
  let dataToSubmit = {};

  for (let key in formdata) {
    dataToSubmit[key] = formdata[key].value; // formdata[key] -> email/password
  }
  return dataToSubmit;
};

export const isFormValid = (formdata, formName) => {
  let formIsValid = true;
  for (let key in formdata) {
    formIsValid = formdata[key].valid && formIsValid; // use object data to check validation of form
  }
  return formIsValid;
};
