import styled, { css } from "styled-components";

const StyedContactListComponent = styled.div`
  .Container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    flex: 0.8;
  }
  .ProfileInfoDiv {
    display: flex;
    flex-direction: row;
    background: #ededed;
    padding: 15px;
  }
  .ProfileImage {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .SearchBox {
    display: flex;
    background: #f6f6f6;
    padding: 10px;
    width: 50vh;
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
  .ContactItem {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #f2f2f2;
    background: white;
    cursor: pointer;
    padding: 15px 12px;
  }

  .ProfileIcon {
    width: 38px;
    height: 38px;
  }
  .ContactName {
    width: 100%;
    font-size: 16px;
    color: black;
  }
  .MessageText {
    width: 20%;
    font-size: 14px;
    margin-top: 3px;
    color: rgba(0, 0, 0, 0.8);
  }
  .ContactInfo {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 19px;
  }
`;

export default StyedContactListComponent;
