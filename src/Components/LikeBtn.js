import React, { useState } from "react";
import styled from "styled-components";

const LikeBtn = () => {
  const [likes, setLikes] = useState(false);

  const pressLike = () => {
    setLikes(!likes);
  };

  return (
    <LikeContainer onClick={pressLike}>
      <LikeBtns backUrl={likes} />
    </LikeContainer>
  );
};

export default LikeBtn;

const LikeContainer = styled.button`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 9999;
  position: absolute;
  top: 10px;
  right: 20px;
`;

const LikeBtns = styled.div`
  width: 40px;
  height: 40px;
  background: ${(props) =>
    props.backUrl
      ? `url(/images/fillheart.png) no-repeat center center`
      : `url(/images/emptyheart.png) no-repeat center center`};
  background-size: 50%;
`;
