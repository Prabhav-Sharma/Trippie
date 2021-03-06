const EMAIL_REGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9]+$/;

//AuthForm actions
const EMAIL_ACTION = "EMAIL";
const USERNAME_ACTION = "USERNAME";
const PASSWORD_ACTION = "PASSWORD";
const CONFIRM_PASSWORD_ACTION = "CONFIRM_PASSWORD";
const FULL_NAME_ACTION = "FULL_NAME";

//EditProfile actions
const PROFILE_IMG_ACTION = "PROFILE_IMG";
const ABOUT_ACTION = "ABOUT";
const PORTFOLIO_ACTION = "PORTFOLIO";

//Fallback image
const FALLBACK_IMG =
  "https://res.cloudinary.com/carsmart/image/upload/v1653567329/Trippie/fallback_uhzw7n.jpg";

export {
  EMAIL_REGEX,
  EMAIL_ACTION,
  USERNAME_ACTION,
  PASSWORD_ACTION,
  CONFIRM_PASSWORD_ACTION,
  FULL_NAME_ACTION,
  PROFILE_IMG_ACTION,
  ABOUT_ACTION,
  PORTFOLIO_ACTION,
  FALLBACK_IMG,
};
