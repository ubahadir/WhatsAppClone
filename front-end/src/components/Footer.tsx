import React from "react";

import StyledFooter from "../elements/StyledFooter";
import FontAwesome from "react-fontawesome";

const Footer = (props: any): JSX.Element => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [iconName, setIconName] = React.useState<string>("microphone");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    const name: string = e.target.value !== "" ? "paper-plane" : "microphone";
    setIconName(name);
  };
  const handleClick = (): void => {
    if (iconName === "mictophone") {
      return;
    }
    props.onSend(inputValue);
    setInputValue("");
    setIconName("microphone");
  };
  return (
    <StyledFooter>
      <FontAwesome className="iconFooter" name="smile" />
      <label className="message--label">
        <input
          className="message--input"
          placeholder="Type a message"
          value={inputValue}
          onChange={handleChange}
        />
      </label>
      <FontAwesome
        className="iconFooter"
        name={iconName}
        onClick={handleClick}
      />
    </StyledFooter>
  );
};

export default Footer;
