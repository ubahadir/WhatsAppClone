import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TutorialDataService from "./TutorialService";
import { contactList } from "../Data";
import StyledContactListComponent from "../elements/StyledContactListComponent";
import { Chat } from "../api/models";
import _ from "lodash";
// import { TutorialsList } from "./ConversationComponents";

const ContactComponent = (props) => {
  const { userData, onChatClick, id, value } = props;
  return (
    <div
      className="ContactItem"
      data-value="1234"
      onClick={onChatClick}
      key={userData.number}
      id={userData.name}
    >
      <img src={userData.profilePic} className="ProfileIcon" />
      <div className="ContactInfo">
        <span className="ContactName">{userData.name}</span>
        <span className="MessageText">{userData.number}</span>
      </div>
      <span className="MessageText">10:04 PM</span>
    </div>
  );
};

// var elems = document
//   .getElementById("Babam")
//   .querySelectorAll('div[id][data-value="1234"]');
// for (var i = 0; i < elems.length; i++) {
//   console.log(elems[i].id);
// }
// const ContactComponent = ({ userData }) => {
//   return (
//     <div className="ContactItem">
//       <img src={userData.profilePic} className="ProfileIcon" />
//       <div className="ContactInfo">
//         <span className="ContactName">{userData.name}</span>
//         <span className="MessageText">Hello</span>
//       </div>
//       <span className="MessageText">10:04 PM</span>
//     </div>
//   );
// };

const ContactListComponent = (props: any): JSX.Element => {
  const [people, setPerson] = useState([]);

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const retrieveTutorials = () => {
    TutorialDataService.getPerson()
      .then((response) => {
        setPerson(response.data);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const { onChatClick } = props;
  // const newChat: Chat = _.find(props.chats, { _id });
  // console.log("selected chat after", newChat);
  // setSelectedChat(newChat);
  // };
  return (
    <StyledContactListComponent>
      <div className="Container">
        <div className="ProfileInfoDiv">
          <img className="ProfileImage" src="/profile/pp3.jpeg" alt="No pp" />
        </div>
        <div className="SearchBox">
          <div className="SearchContainer">
            <img className="SearchIcon" src={"/search-icon.svg"} />
            <input
              className="SearchInput"
              placeholder="Search or start new chat"
            />
          </div>
        </div>
        {people.map((person) => {
          return (
            <ContactComponent userData={person} onChatClick={onChatClick} />
          );
        })}
      </div>
    </StyledContactListComponent>
  );
};

export default ContactListComponent;
