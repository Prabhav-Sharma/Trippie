import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    fullName: "Adarsh Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    email: "adarshBalika@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    _id: uuid(),
    fullName: "Guest",
    username: "guest",
    password: "guest@123",
    email: "guest@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg:
      "https://camo.githubusercontent.com/e6f31db76aa258d4e26be8464f2dff9796d5cf59185976df02dd80ae6a60cc9e/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f7075672e737667",
  },
  {
    _id: uuid(),
    fullName: "Prabhav Sharma",
    username: "prabhavsharmaa",
    password: "trial@123",
    email: "prabhav@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg: "https://avatars.githubusercontent.com/u/88072012?s=48&v=4",
  },
  {
    _id: uuid(),
    fullName: "Prateek Sharma",
    username: "sharmajiKaLadka",
    password: "trial@123",
    email: "prateek@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    _id: uuid(),
    fullName: "Prerna Sharma",
    username: "inspirus",
    password: "trial@123",
    email: "prerna@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg:
      "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
  },
  {
    _id: uuid(),
    fullName: "Sukanya Sen",
    username: "sukanyasen530",
    password: "trial@123",
    email: "sukanya@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg: "https://avatars.githubusercontent.com/u/76467704?v=4",
  },
  {
    _id: uuid(),
    fullName: "Tanay Pratap",
    username: "tanaypratap",
    password: "trial@123",
    email: "tanay@neog.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg: "https://avatars.githubusercontent.com/u/10216863?v=4",
  },
];
