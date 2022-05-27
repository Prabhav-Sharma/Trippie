import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "a81caa3a-a643-4841-85ee-79272b22a4a0",
    fullName: "Sherlock Holmes",
    username: "Iamsherlocked",
    password: "sherlock123",
    email: "sherlock@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolio: "https://www.arthurconandoyle.com/sherlockholmes.html",
    about: "The Name Is Sherlock Holmes, and the Address Is 221B Baker Street.",
    profileImg:
      "https://res.cloudinary.com/carsmart/image/upload/v1653580579/Trippie/sherlock_ckpxxl.jpg",
  },

  {
    _id: "dfb7a1e0-cd02-489d-ab70-7e40b49441cc",
    fullName: "Prabhav Sharma",
    username: "prabhavsharmaa",
    password: "trial@123",
    email: "prabhav@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolio: "https://prabhavsharma.netlify.app/",
    about:
      "neoG Team captain 🚀• Learning React • MERN Stack Web Developer • Literature Major • Comic • (he/him)  • Vive la résistance",
    profileImg:
      "https://pbs.twimg.com/profile_images/1231267389108416513/cmhTnYFm_400x400.jpg",
  },
  {
    _id: "99132487-1567-4cc8-bbc2-7fc5b8ae675c",
    fullName: "Prateek Sharma",
    username: "sharmajiKaLadka",
    password: "trial@123",
    email: "prateek@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolio: "https://www.linkedin.com/in/prateek-sharma-b77118138/",
    about:
      "A result-oriented professional with more than 5 years experience in Management,Data analysis & Insurance . Seeking assignments in management consulting and Strategic roles. ",
    profileImg:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFeaYmPW8y2fQ/profile-displayphoto-shrink_400_400/0/1648568811994?e=1658966400&v=beta&t=Ug0XAb0J5GS_m-JOydwnv_DnKdkf6LACivlB3UlL8XI",
  },
  {
    _id: "e91b1fbc-bb75-417d-bae9-f323a19a6c9",
    fullName: "Prerna Sharma",
    username: "inspirus",
    password: "trial@123",
    email: "prerna@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolio: "https://www.linkedin.com/in/prernasharma30/",
    about:
      "I'm currently a Junior Research Fellow and visiting faculty in finance at the school of management and liberal studies of The Northcap University. ",
    profileImg:
      "https://media-exp1.licdn.com/dms/image/C4D03AQHScfQxLQO0Nw/profile-displayphoto-shrink_400_400/0/1652718474670?e=1658966400&v=beta&t=8U_eVHJaf8WEHil819h6-wvnvL2XoLDtTFNz5m1hdoM",
  },
  {
    _id: "3e723f53-64de-4bc4-8011-5d7985dd0dd6",
    fullName: "Sukanya Sen",
    username: "sukanyasen530",
    password: "trial@123",
    email: "sukanya@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolio: "https://twitter.com/Sukanya71873255",
    about:
      "MERN Stack Web Developer, learning  @neogcamp. Anime Geek Love to design and making my designs alive through code",
    profileImg: "https://avatars.githubusercontent.com/u/76467704?v=4",
  },
  {
    _id: "93602bd7-c49b-40cb-8347-72abc87ddc88",
    fullName: "Tanay Pratap",
    username: "tanaypratap",
    password: "trial@123",
    email: "tanay@neog.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolio: "https://twitter.com/tanaypratap",
    about:
      "Founder @invactHQ | x @Microsoft | Fixing education | Mentored 100+ students to first tech job | Tweets: Tech, Education, Career, Metaverse and Startups.",
    profileImg: "https://avatars.githubusercontent.com/u/10216863?v=4",
  },
  {
    _id: "1775f4c1-635b-4f9d-bebb-77748441633f",
    fullName: "🦋",
    username: "roarofthefiire",
    password: "trial@123",
    email: "pratty@neog.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolio: "https://twitter.com/roarofthefiire",
    about:
      "if the stars were edible,\n and our hearts were never full/\ncould we live with just a taste?",
    profileImg:
      "https://pbs.twimg.com/profile_images/1506667570900119552/oG9bEyO7_400x400.jpg",
  },
  {
    _id: "2e5d35ca-e3d3-4b4a-922a-a56d030a900e",
    fullName: "Guest",
    username: "guest",
    password: "guest@123",
    email: "guest@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    portfolio: "https://github.com/Prabhav-Sharma?tab=repositories",
    about:
      "I'm a guest here, looking for a forever home (permanent role), woof woof xD",

    profileImg:
      "https://camo.githubusercontent.com/e6f31db76aa258d4e26be8464f2dff9796d5cf59185976df02dd80ae6a60cc9e/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f7075672e737667",
  },
];
