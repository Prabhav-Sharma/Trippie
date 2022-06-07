import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "6139790d-ba32-4308-a7ec-4c2f35d8be0a",
    text: "just thinking about you 🥰",
    likes: {
      likeCount: 45785,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "roarofthefiire",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userId: "1775f4c1-635b-4f9d-bebb-77748441633f",
    profileImg:
      "https://res.cloudinary.com/carsmart/image/upload/v1654575763/Trippie/UNwomen_AH_Photo_400px_bqb293.jpg",
    image: "https://pbs.twimg.com/media/FTMC48zWYAAVxOB?format=jpg&name=small",
  },
  {
    _id: "e4de2160-3bd2-430c-a4f2-f9fda424e64b",
    text: "The phrase “it’s okay to not be okay” means not to beat yourself up for going through something. \n\n NOT to normalise your mental illness and not seek help. \n\n #MentalHealthAwarenessMonth",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "prabhavsharmaa",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userId: "dfb7a1e0-cd02-489d-ab70-7e40b49441cc",
    profileImg:
      "https://pbs.twimg.com/profile_images/1231267389108416513/cmhTnYFm_400x400.jpg",
    image: "",
  },
  {
    _id: uuid(),
    text: "JavaScript you simple thing ✨",
    likes: {
      likeCount: 67,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "prabhavsharmaa",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userId: "dfb7a1e0-cd02-489d-ab70-7e40b49441cc",
    profileImg:
      "https://pbs.twimg.com/profile_images/1231267389108416513/cmhTnYFm_400x400.jpg",
    image: "https://pbs.twimg.com/media/FTkyMg2UcAApVlv?format=jpg&name=small",
  },
  {
    _id: "10d0c1d4-1e73-4756-909f-d9dd78217ec2",
    text: "You have a grand gift for silence, Watson. It makes you quite invaluable as a companion. \n\n -SH",
    likes: {
      likeCount: 245,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "Iamsherlocked",
    createdAt: new Date("12/18/2021"),
    updatedAt: formatDate(),
    userId: "a81caa3a-a643-4841-85ee-79272b22a4a0",
    profileImg:
      "https://res.cloudinary.com/carsmart/image/upload/v1653580579/Trippie/sherlock_ckpxxl.jpg",
    image: "",
  },
  {
    _id: "0c9e3bc2-7f8b-46e4-9aff-a6b103097d79",
    text: "whatever you do, however you do, there will be N% of people not liking it. so focus on the goal 🎯 & ignore all the negativity!",
    likes: {
      likeCount: 4500,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "sukanyasen530",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userId: "3e723f53-64de-4bc4-8011-5d7985dd0dd6",
    profileImg: "https://avatars.githubusercontent.com/u/76467704?v=4",
    image: "",
  },
  {
    _id: "5516d40d-1687-4c81-be81-446d9f131b2c",
    text: "RCB.❤️‍🔥. That's it. That's the post. 💯.",
    likes: {
      likeCount: 588,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "sharmajiKaLadka",
    createdAt: new Date("5/25/2022"),
    updatedAt: formatDate(),
    userId: "99132487-1567-4cc8-bbc2-7fc5b8ae675c",
    profileImg:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFeaYmPW8y2fQ/profile-displayphoto-shrink_400_400/0/1648568811994?e=1658966400&v=beta&t=Ug0XAb0J5GS_m-JOydwnv_DnKdkf6LACivlB3UlL8XI",
    image: "",
  },
  {
    _id: "542890cc-31b9-454e-9672-fbfddb700921",
    text: "The urge to open up a small chill café with good vibes at a hill station where you’re the super rich owner who just likes to meet people xD",
    likes: {
      likeCount: 1145455,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "prabhavsharmaa",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userId: "dfb7a1e0-cd02-489d-ab70-7e40b49441cc",
    profileImg:
      "https://pbs.twimg.com/profile_images/1231267389108416513/cmhTnYFm_400x400.jpg",
    image: "",
  },
  {
    _id: "76a458dd-f42e-4660-b4b2-653b66d96675",
    text: "I'm not a psychopath, I'm a high-functioning sociopath. Do your research. \n\n -SH",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "Iamsherlocked",
    createdAt: new Date("8/15/2020"),
    updatedAt: formatDate(),
    userId: "a81caa3a-a643-4841-85ee-79272b22a4a0",
    profileImg:
      "https://res.cloudinary.com/carsmart/image/upload/v1653580579/Trippie/sherlock_ckpxxl.jpg",
    image: "",
  },
  {
    _id: "789fab65-e10d-4227-9424-e8d4b644fef7",
    text: "Hard times will always reveal true friends.\n\n – Anonymous",
    likes: {
      likeCount: 849,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "tanaypratap",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userId: "93602bd7-c49b-40cb-8347-72abc87ddc88",
    profileImg: "https://avatars.githubusercontent.com/u/10216863?v=4",
  },
  {
    _id: "5fe859a0-065c-4c70-aed1-338929683410",
    text: "Dear God, what is it like in your funny little brains? It must be so boring! \n\n -SH",
    likes: {
      likeCount: 135,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "Iamsherlocked",
    createdAt: new Date("8/1/2020"),
    updatedAt: formatDate(),
    userId: "a81caa3a-a643-4841-85ee-79272b22a4a0",
    profileImg:
      "https://res.cloudinary.com/carsmart/image/upload/v1653580579/Trippie/sherlock_ckpxxl.jpg",
    image: "",
  },
  {
    _id: "80876aba-38ab-45c7-85bc-1850b14574ad",
    text: "Hope the recruiter likes my projects!",
    likes: {
      likeCount: 2564,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "guest",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userId: "2e5d35ca-e3d3-4b4a-922a-a56d030a900e",
    profileImg:
      "https://camo.githubusercontent.com/e6f31db76aa258d4e26be8464f2dff9796d5cf59185976df02dd80ae6a60cc9e/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f7075672e737667",
    image: "",
  },
  {
    _id: "0e4df9a4-017e-4d8f-8dab-a0ce5e8386bc",
    text: "Some days, you just code till 5AM without even realising!",
    likes: {
      likeCount: 57,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "guest",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userId: "2e5d35ca-e3d3-4b4a-922a-a56d030a900e",
    profileImg:
      "https://camo.githubusercontent.com/e6f31db76aa258d4e26be8464f2dff9796d5cf59185976df02dd80ae6a60cc9e/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f7075672e737667",
    image: "",
  },
  {
    _id: "4f13f899-d002-4633-84f9-c665343d693e",
    text: "'The Universe is full of magical things patiently waiting for out wits to grow sharper!. \n -Eden Phillpots",
    likes: {
      likeCount: 745,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "prabhavsharmaa",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    userId: "dfb7a1e0-cd02-489d-ab70-7e40b49441cc",
    profileImg:
      "https://pbs.twimg.com/profile_images/1231267389108416513/cmhTnYFm_400x400.jpg",
    image: "",
  },
  {
    _id: "1700fe9d-b000-4411-9acb-bcbf9f417af9",
    text: "Deep diving into JS concepts >>> just skimming over the documentation ",
    likes: {
      likeCount: 112,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "prabhavsharmaa",
    createdAt: new Date("11/24/2019"),
    updatedAt: formatDate(),
    userId: "dfb7a1e0-cd02-489d-ab70-7e40b49441cc",
    image: "",
    profileImg:
      "https://pbs.twimg.com/profile_images/1231267389108416513/cmhTnYFm_400x400.jpg",
  },
];
