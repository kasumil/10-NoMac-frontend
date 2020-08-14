import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const BtnMenu = () => {
  return (
    <BtnMenuContainer>
      <BtnMenuWrap>
        <Link to="/list">
          <BtnList>
            <span>호텔</span>
            <img alt="hotel" src="/images/hotel.png" />
          </BtnList>
        </Link>
        <BtnList>
          <span>즐길거리</span>
          <img alt="entertain" src="/images/ticket.png" />
        </BtnList>
        <BtnList>
          <span>음식점</span>
          <img alt="food" src="/images/fork.png" />
        </BtnList>
        <BtnList>
          <span>항공권</span>
          <img alt="plane" src="/images/plane.png" />
        </BtnList>
        <Link to="/review">
          <BtnList>
            <span>리뷰</span>
            <img alt="review" src="/images/review.png" />
          </BtnList>
        </Link>
      </BtnMenuWrap>
    </BtnMenuContainer>
  );
};

export default withRouter(BtnMenu);

const BtnMenuContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BtnMenuWrap = styled.div`
  width: 1280px;
  height: 84px;
  margin: 0 auto;
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BtnList = styled.button`
  width: 243.2px;
  height: 52px;
  margin-right: 16px;
  padding: 11px 13px;
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :last-child {
    margin: 0;
  }

  &:hover {
    transition: 0.2s linear;
    background-color: #00aa6c;
    border: 1px solid #00aa6c;
    color: white;
  }

  span {
    font-size: 16px;
    font-weight: 700;
  }

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;
