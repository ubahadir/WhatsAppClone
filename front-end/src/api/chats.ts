import { Chat } from "./models";
import moment from "moment";

export const dummyChats: Chat[] = [
  {
    title: "",
    picture: "",
    participants: ["213123", "12312312"],
    lastMessage: {
      content: "Merhaba nasılsın?",
      createdAt: moment().toDate(),
    },
  },
  {
    title: "",
    picture: "",
    participants: ["213123", "12312312"],
    lastMessage: {
      content: "Merhaba nasılsın?",
      createdAt: moment().subtract(1, "days").toDate(),
    },
  },
  {
    title: "",
    picture: "",
    participants: ["213123", "12312312"],
    lastMessage: {
      content: "Merhaba nasılsın?",
      createdAt: moment().toDate(),
    },
  },
  {
    title: "",
    picture: "",
    participants: ["213123", "12312312"],
    lastMessage: {
      content: "Merhaba nasılsın?",
      createdAt: moment().toDate(),
    },
  },
  {
    title: "",
    picture: "",
    participants: ["213123", "12312312"],
    lastMessage: {
      content: "Merhaba nasılsın?",
      createdAt: moment().toDate(),
    },
  },
  {
    title: "",
    picture: "",
    participants: ["213123", "12312312"],
    lastMessage: {
      content: "Merhaba nasılsın?",
      createdAt: moment().toDate(),
    },
  },
];
