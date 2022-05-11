import { EMAIL_REGEX } from "./constants";

const validateSignupFields = (
  password,
  fullName,
  username,
  confirmPassword,
  email
) => {
  if (!EMAIL_REGEX.test(email)) {
    alert("Invalid email address");
    return false;
  }

  if (
    password.trim().length === 0 ||
    fullName.trim().length === 0 ||
    username.trim().length === 0
  ) {
    alert("Fields can't be empty");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords don't match");
    return false;
  }
  return true;
};

export { validateSignupFields };
