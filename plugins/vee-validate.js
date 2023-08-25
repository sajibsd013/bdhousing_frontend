import { extend } from "vee-validate";
import { alpha, confirmed, email, length, min, numeric, required,max } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required"
});

extend("numeric", {
  ...numeric,
  message: "This Value must be numeric"
});


extend("alpha", {
  ...alpha,
  message: "This field must only contain alphabetic characters"
});

extend("email", {
  ...email,
  message: "This field must be a valid email"
});

extend("confirmed", {
  ...confirmed,
  message: "This field confirmation does not match"
});

extend("length", {
  ...length,
  message: "This field must have {length} digit"
});

extend("min", {
  ...min,
  message: "The field must be at least {length} characters"
});

extend("max", {
  ...max,
  message: "The field must be at least {length} characters"
});




