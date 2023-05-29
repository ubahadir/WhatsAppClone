import moment from "moment";
import { Meteor } from "meteor/meteor";
// import { MessagesCollection } from "mongodb";
import { Message, MessageType } from "./models";

// if (Meteor.isServer) {
//   Meteor.publish("messages.all", function () {
//     return MessagesCollection.find();
//   });
//   Meteor.methods({
//     "message.insert": function (message) {
//       return MessagesCollection.insert(message);
//     },
//   });
// }

export const DummyMessages: Message[] = [
  {
    chatId: "sadasdasdasdasd",
    content: "Merhaba",
    createdAt: moment().subtract(2, "days").toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: "sadasdasdasdasd",
    content: "Merhaba",
    createdAt: moment().subtract(2, "days").toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: "sadasdasdasdasd",
    content: "Merhaba",
    createdAt: moment().subtract(2, "days").toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: "sadasdasdasdasd",
    content: "Merhaba",
    createdAt: moment().subtract(2, "days").toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: "sadasdasdasdasd",
    content: "Merhaba",
    createdAt: moment().subtract(2, "days").toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: "sadasdasdasdasd",
    content: "Merhaba",
    createdAt: moment().subtract(2, "days").toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: "sadasdasdasdasd",
    content: "Merhaba",
    createdAt: moment().subtract(2, "days").toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: "sadasdasdasdasd",
    content: "Merhaba",
    createdAt: moment().subtract(2, "days").toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: "sadasdasdasdasd",
    content: "Merhaba",
    createdAt: moment().subtract(2, "days").toDate(),
    type: MessageType.TEXT,
  },
  {
    chatId: "sadasdasdasdasd",
    content: "Merhaba",
    createdAt: moment().subtract(2, "days").toDate(),
    type: MessageType.TEXT,
  },
];
