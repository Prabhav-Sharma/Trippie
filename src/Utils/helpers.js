import { EMAIL_REGEX } from "./constants";

const validateSignupFields = (
  password,
  fullName,
  username,
  confirmPassword,
  email
) => {
  console.log(email);
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

const searchForUsers = (users, search) => {
  if (search.trim().length === 0) return [];

  return users
    .filter(
      (user) =>
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.fullName.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 3);
};

const getLatestFeed = (posts, pageNumber) => {
  return [...posts]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, pageNumber * 5);
};

const likeFormatter = (likeCount) => {
  if (likeCount >= 1000000) return `${(likeCount / 1000000).toFixed(1)}m`;
  else if (likeCount >= 1000) return `${(likeCount / 1000).toFixed(1)}k`;
  else return likeCount;
};

export { validateSignupFields, searchForUsers, getLatestFeed, likeFormatter };
