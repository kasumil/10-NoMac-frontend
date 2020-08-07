import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <LeftCaption>
          <div className="topCaption">
            <img alt="logo" src="/images/favicon.png" />
            <div>
              <span>&copy; 2020 TripAdvisor LLC All rights reserved.</span>
              <p>
                <span>이용 약관</span>
                <span>개인정보 취급방침 및 쿠키 정책</span>
                <span>사이트맵</span>
                <span>사이트 운영 방식</span>
              </p>
            </div>
          </div>
          <div className="botCaption">
            <p>
              <span>
                대한민국의 한국어 사용자를 대상으로 하는 트립어드바이저 웹사이트
                버전입니다. 다른 국가 또는 지역에 거주하는 경우 드롭다운
                메뉴에서 해당 국가 또는 지역에 적합한 트립어드바이저 버전을
                선택하세요.
              </span>
              <button>더 알아보기</button>
            </p>
          </div>
        </LeftCaption>
        <RightMenu>
          <select>
            <option>￦ KRW</option>
            <option>$ US</option>
            <option>€ EURO</option>
          </select>
          <select>
            <option>대한민국</option>
            <option>United States</option>
            <option>유럽</option>
          </select>
        </RightMenu>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  background-color: #faf1ed;
  display: flex;
  justify-content: center;
`;

const FooterWrap = styled.div`
  width: 1280px;
  height: 154px;
  padding: 32px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftCaption = styled.div`
  width: 845px;
  height: 90px;

  .topCaption {
    width: 845px;
    height: 40px;
    margin-bottom: 6px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      margin-right: 16px;
      object-fit: contain;
    }

    div {
      span {
        font-size: 12px;
      }

      p {
        width: 468px;
        display: flex;
        justify-content: space-between;
        span {
          font-size: 14px;
          font-weight: 700;
        }
      }
    }
  }

  .botCaption {
    width: 845px;
    height: 32px;
    margin-bottom: 12px;

    p {
      span {
        font-size: 12px;
      }

      button {
        margin-left: 6px;
        font-size: 13px;
        font-weight: 700;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const RightMenu = styled.div`
  width: 410px;
  height: 90px;
  display: flex;
  justify-content: space-between;

  select {
    width: 193px;
    height: 36px;
    padding: 7px 14px;
    background: white url(/images/arrow.jpg) no-repeat 98%;
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    ::-ms-expand {
      display: none;
    }

    option {
      font-size: 14px;
    }
  }
`;
