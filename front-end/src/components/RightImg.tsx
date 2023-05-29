import React from "react";

import StyledRightImg from "../elements/StyledRightImg";

const RightImg = (props: any): JSX.Element => {
  return (
    <StyledRightImg right={props.right}>
      <img
        alt="bg"
        className="rightImg--image"
        src="/welcome-placeholder.jpeg"
      />
      <h3 className="rightImg--title">WhatsApp uygulamasına hoşgeldiniz</h3>
      <div className="rightImg--div">
        <p className="rightImg--p">{props.messageText}</p>
        <div className="rightImg--divider" />
      </div>
      {props.children}
    </StyledRightImg>
  );
};

export default RightImg;
