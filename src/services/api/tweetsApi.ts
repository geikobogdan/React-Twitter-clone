//import { TweetsState } from "./../../store/ducks/tweets/contracts/state";
//import axios from "axios";

export const TweetsApi = {
  fetchTweets():any  {         //Promise<TweetsState["items"]>
const data = [
  {
    "_id": "604fa61187c6c7039b992a4e",
    "text": "Aute mollit fugiat fugiat ullamco magna. Anim consequat ad eiusmod mollit nisi dolore proident labore nostrud sint. Minim ipsum velit elit incididunt qui aliquip duis. Aute magna aliqua ex dolor proident irure voluptate qui. Amet quis occaecat ut ut irure deserunt cillum.",
    "user": {
      "fullname": "Morgan  Gardner ",
      "username": "noel",
      "avatarUrl": "https://source.unsplash.com/random/100x100?1"
    }
  },
  {
    "_id": "604fa6119283fcf6a9f939e6",
    "text": "Qui mollit nulla voluptate occaecat dolor commodo nisi nulla. Amet non laboris quis adipisicing cillum exercitation mollit magna in exercitation non incididunt minim ad. Cillum non sint anim et consectetur fugiat excepteur ad sint qui. Reprehenderit voluptate ullamco duis proident occaecat nulla quis ad irure reprehenderit anim sit et qui. Quis veniam mollit mollit magna.",
    "user": {
      "fullname": "Lilia  Goff ",
      "username": "lelia",
      "avatarUrl": "https://source.unsplash.com/random/100x100?1"
    }
  },
  {
    "_id": "604fa6111897a8acc17d2bca",
    "text": "Sint eu aliqua qui veniam. Magna consectetur laboris ex culpa elit anim officia do sit. Adipisicing nulla dolor dolor officia commodo ex incididunt Lorem velit et Lorem dolore consectetur eiusmod. Cillum consectetur dolor est irure Lorem mollit aute anim voluptate in tempor ipsum culpa. Sunt sit in est excepteur est.",
    "user": {
      "fullname": "Lamb  Robles ",
      "username": "consuelo",
      "avatarUrl": "https://source.unsplash.com/random/100x100?2"
    }
  },
  {
    "_id": "604fa6117b6f357cda1582b1",
    "text": "Enim nostrud aliquip et sunt deserunt aliquip proident. Anim magna in consequat pariatur dolor. Consequat deserunt veniam dolor aliqua nulla amet amet eu est. Nisi anim ea esse duis id. Nostrud voluptate excepteur quis mollit velit.",
    "user": {
      "fullname": "Salinas  Guzman ",
      "username": "nicholson",
      "avatarUrl": "https://source.unsplash.com/random/100x100?4"
    }
  },
  {
    "_id": "604fa6114cfb5e01b827b784",
    "text": "Irure quis nostrud officia est incididunt velit deserunt eu. Dolore est mollit incididunt amet dolore laborum sunt. Dolore deserunt reprehenderit dolore ut velit laboris labore. Qui adipisicing ad anim reprehenderit velit quis nisi voluptate irure cillum est. Anim proident minim enim ea nulla aliqua officia cillum mollit.",
    "user": {
      "fullname": "Blankenship  Farley ",
      "username": "angelia",
      "avatarUrl": "https://source.unsplash.com/random/100x100?2"
    }
  }
]

    return data;
  },
};


//return axios.get("https://trycode.pw/c/7GDHN.json").then(({ data }) => data);