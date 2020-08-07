import React, { useState } from "react";
import styled from "styled-components";

const LikeBtn = () => {
  const [likes, setLikes] = useState(false);

  const pressLike = () => {
    setLikes(!likes ? true : false);
  };

  return (
    <LikeContainer onClick={pressLike}>
      <div className={likes ? "like" : "dislike"}></div>
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
  position: absolute;
  top: 10px;
  right: 20px;

  div {
    width: 40px;
    height: 40px;
  }

  .like {
    background: url(/images/fillheart.png) no-repeat center center;
    background-size: 50%;
  }

  .dislike {
    background: url(/images/heart.png) no-repeat center center;
    background-size: 50%;
  }
`;
