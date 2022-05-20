import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: new Date("11/24/2019"),
    updatedAt: formatDate(),
    userId: "a81caa3a-a643-4841-85ee-79272b22a4a0",
    profileImg:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.",
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
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: new Date("11/24/2019"),
    updatedAt: formatDate(),
    userId: "a81caa3a-a643-4841-85ee-79272b22a4a0",
    profileImg:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.",
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
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: new Date("11/24/2019"),
    updatedAt: formatDate(),
    userId: "a81caa3a-a643-4841-85ee-79272b22a4a0",
    profileImg:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.",
    likes: {
      likeCount: 0,
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
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: new Date("11/24/2019"),
    updatedAt: formatDate(),
    userId: "a81caa3a-a643-4841-85ee-79272b22a4a0",
    profileImg:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.",
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
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: new Date("11/24/2019"),
    updatedAt: formatDate(),
    userId: "a81caa3a-a643-4841-85ee-79272b22a4a0",
    profileImg:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.",
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
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "prabhavsharmaa",
    createdAt: new Date("11/24/2019"),
    updatedAt: formatDate(),
    userId: "dfb7a1e0-cd02-489d-ab70-7e40b49441cc",
    profileImg:
      "https://pbs.twimg.com/profile_images/1231267389108416513/cmhTnYFm_400x400.jpg",
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.",
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
  },
];
