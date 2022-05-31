import {
  EMAIL_REGEX,
  EMAIL_ACTION,
  USERNAME_ACTION,
  PASSWORD_ACTION,
  CONFIRM_PASSWORD_ACTION,
  FULL_NAME_ACTION,
  PROFILE_IMG_ACTION,
  ABOUT_ACTION,
  PORTFOLIO_ACTION,
} from "./constants";

import { toast } from "react-toastify";

const authFormReducer = (state, action) => {
  switch (action.type) {
    case FULL_NAME_ACTION:
      return { ...state, fullName: action.payload.fullName };
    case EMAIL_ACTION:
      return { ...state, email: action.payload.email };
    case USERNAME_ACTION:
      return { ...state, username: action.payload.username };
    case PASSWORD_ACTION:
      return { ...state, password: action.payload.password };
    case CONFIRM_PASSWORD_ACTION:
      return { ...state, confirmPassword: action.payload.confirmPassword };
    default:
      return state;
  }
};

const validateSignupFields = (
  password,
  fullName,
  username,
  confirmPassword,
  email
) => {
  if (username.length < 4) {
    toast.warn("Username must be more than 3 characters");
    return false;
  }

  if (!EMAIL_REGEX.test(email)) {
    toast.warn("Invalid email address");
    return false;
  }

  if (
    password.trim().length === 0 ||
    fullName.trim().length === 0 ||
    username.trim().length === 0
  ) {
    toast.warn("Fields can't be empty");
    return false;
  }

  if (password !== confirmPassword) {
    toast.warn("Passwords don't match");
    return false;
  }
  return true;
};

const getSortedFeed = (posts, pageNumber, sortBy) => {
  let feed = [...posts];
  switch (sortBy.toUpperCase()) {
    case "LATEST":
      return feed
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .slice(0, pageNumber * 5);

    case "OLDEST":
      return feed
        .sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        )
        .slice(0, pageNumber * 5);

    case "TRENDING":
      return feed
        .sort((a, b) => b.likes.likeCount - a.likes.likeCount)
        .slice(0, pageNumber * 5);

    default:
      return feed.slice(0, pageNumber * 5);
  }
};

const unitFormatter = (number) => {
  if (number >= 1000000) return `${(number / 1000000).toFixed(1)}m`;
  else if (number >= 1000) return `${(number / 1000).toFixed(1)}k`;
  else return number;
};

const urlSchemeRemover = (url) => url.replace(/^http(s)?:\/\/(w{3}.)?/, "");

const urlSchemeRegexMatcher = (url) => /^http(s)?:\/\//.test(url);

const editModalReducer = (state, action) => {
  switch (action.type) {
    case FULL_NAME_ACTION:
      return { ...state, fullName: action.payload };
    case PROFILE_IMG_ACTION:
      return { ...state, profileImg: action.payload };
    case PORTFOLIO_ACTION:
      console.log(action.payload);
      return { ...state, portfolio: action.payload };
    case ABOUT_ACTION:
      return { ...state, about: action.payload };
    default:
      return state;
  }
};

const queryUsers = (users, query) => {
  if (query.trim().length === 0) return [];

  return users
    .filter(
      (user) =>
        user.username.toLowerCase().includes(query.toLowerCase()) ||
        user.fullName.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 3);
};

const queryPosts = (posts, query) => {
  if (query.trim().length === 0) return [];

  return posts.filter((post) =>
    post.text.toLowerCase().includes(query.toLowerCase())
  );
};

const debounce = (func) => {
  let timer;
  return function (...args) {
    let context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
      func.apply(context, args);
    }, 500);
  };
};

export {
  validateSignupFields,
  getSortedFeed,
  unitFormatter,
  urlSchemeRemover,
  editModalReducer,
  authFormReducer,
  urlSchemeRegexMatcher,
  queryPosts,
  queryUsers,
  debounce,
};
