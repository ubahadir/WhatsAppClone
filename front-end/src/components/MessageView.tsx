import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Tracker } from "meteor/tracker";

import StyledMessageView from "../elements/StyledMessageview";
import Header from "./Header";
import Avatar from "./Avatar";
import Footer from "./Footer";
import MessageBox from "./MessageBox";
import moment from "moment";
import { Chat, MessageType } from "../api/models";
// import { MessagesCollection } from "../api/messages";

const db = require("../back-end/models");
const db2 = require("../back-end/models");
const Tutorial2 = db.tutorials2;
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

const icons: string[] = ["search", "paperclip", "ellispsi-v"];

const MessageView = (props: any): JSX.Element => {
  //selectedChat tanımlanıyor
  const selectedChat: Chat = props.selectedChat;
  //messages tanımlanıyor
  // let messages: Message[];

  // const handleSend = (content: string): void => {
  //   const msg = {
  //     id: selectedChat._id;
  //     index:
  //     message:
  //     messageid:
  //     msgdate:
  //     msghour:
  //     msgperson:
  //     name:
  //     number:
  //     chatId: selectedChat._id,
  //     content,
  //     createdAt: moment().toDate(),
  //     senderId: "userid1", //Meteor.userId(),
  //     type: MessageType.TEXT,
  //     read: false,
  //   };
  return (
    <StyledMessageView>
      <Header iconClass="greyIcon" icons={icons}>
        <Avatar avatar_url />
        <div className="headerMsg--container">
          <span className="headerMsg--title">{selectedChat.title}</span>
          <span className="headerMsg--sbTitle">en ligne</span>
        </div>
      </Header>
      <MessageBox selectedChat={selectedChat} messages={props.messages} />
      {/* <Footer /> */}
    </StyledMessageView>
  );
};

export default MessageView;

// export default withTracker((selectedChat) => {
//   return {
//     messages2: MessagesCollection.find({ chatId: selectedChat._id }).fetch(),
//   };
// });
// MessageView;
