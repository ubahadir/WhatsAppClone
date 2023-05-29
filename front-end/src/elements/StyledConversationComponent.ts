import styled, { css } from "styled-components";

const StyledConversationComponent = styled.div`
  .Container {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 2;
    background: #f6f7f8;
  }
  .ProfileHeader {
    display: flex;
    flex-direction: row;
    background: #ededed;
    padding: 15px;
    align-items: center;
    gap: 10px;
  }
  .SearchContainer {
    display: flex;
    flex-direction: row;
    background: white;
    border-radius: 16px;
    width: 100%;
    padding: 20px 0;
  }
  .SearchIcon {
    width: 28px;
    height: 28px;
    padding-left: 10px;
  }
  .SearchInput {
    width: 100%;
    outline: none;
    border: none;
    padding-left: 15px;
    font-size: 17px;
    margin-left: 10px;
  }
  .ProfileImage {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .ChatBox {
    display: flex;
    background: #f0f0f0;
    padding: 10px;
    align-items: center;
    bottom: 0;
  }

  .EmojiImage {
    width: 30px;
    height: 28px;
    opacity: 0.4;
    padding-left: 10px;
    cursor: pointer;
  }
  .MessageContainer {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #e5ddd6;
  }

  .MessageDiv {
    justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
    display: flex;
    margin: 5px 16px;
  }

  .Message {
    background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
    max-width: 50%;
    color: #303030;
    padding: 8px 10px;
    font-size: 19px;
  }
`;

export default StyledConversationComponent;
