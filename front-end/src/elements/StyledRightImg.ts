import styled, { css } from "styled-components";

const StyledRightImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #f7f9fa;
  ${(props) =>
    props.right &&
    css`
      width: 100%;
      height: 100%;
    `}
  .rightImg--image {
    width: 25rem;
    height: 25rem;
    margin-bottom: 2.8rem;
  }
  .rightImg--title {
    font-size: 3.2rem;
    margin-bottom: 1.8rem;
    color: #4b5961;
    font-weight: 300;
    // {props => props.theme.rightImg.color.bgGrey}
  }

  .rightImg--div {
    margin-bottom: 3rem;
    width: 42rem;
  }

  .rightImg--p {
    text-align: center;
    color: #4b5961;
    font-size: 1.4rem;
    line-height: 2rem;
    margin-bottom: 3.4rem;
  }

  .rightImg--divider {
    width: 100%;
    height: 0.2rem;
    background: #4b5961;
    margin-bottom: 0.1rem;
  }
`;

export default StyledRightImg;
