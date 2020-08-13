import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../Components/Nav";
import BtnMenu from "../Components/BtnMenu";
import SelSlide from "../Components/SelSlide";
import { mainData } from "../MockData/MainData";
import styled from "styled-components";

const Main = () => {
  const [toggle, setToggle] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(mainData.searchData);
  const excludeColumns = ["id", "imgUrl"];

  const onToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(mainData.searchData);
    else {
      const filteredData = mainData.searchData.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  useEffect(() => {
    const localToken = localStorage.getItem("tripadvisor-token");
  });

  return (
    <>
      <Nav />
      <BtnMenu />
      <MainContainer>
        <MainSearchWrap>
          <p className="searchCaption">
            <span>나만의 멋진 여행을 찾아보세요</span>
          </p>
          <MainSerachBox>
            <button>
              <img alt="search" src="/images/search.png" />
            </button>
            <input
              className={toggle ? "on" : "off"}
              onFocus={onToggle}
              onBlur={onToggle}
              onChange={(e) => handleChange(e.target.value)}
              value={searchText}
              type="text"
              placeholder="어디로 가시나요?"
            />
            <div
              className="modalWrap"
              onFocus={onToggle}
              onBlur={onToggle}
              style={{ display: toggle ? "flex" : "none" }}
            >
              <button>
                <img alt="search" src="/images/search.png" />
              </button>
              <ul className="searchList">
                {data.map((search, idx) => (
                  <li className="list" key={idx}>
                    <img alt="place" src={search.imgUrl} />
                    <p className="listInfo">
                      <span className="placeName">{search.name}</span>
                      <span className="nationName">{search.country}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </MainSerachBox>
          <img alt="pic" src="/images/home.png" />
        </MainSearchWrap>
        <MakePlan>
          <TitleWrap>
            <span>계속 계획을 세우세요</span>
            <div></div>
          </TitleWrap>
          <RecentBox>
            <h2>최근 검색</h2>
            <div className="btnWrap">
              <button className="recentPlace">
                <img alt="gps" src="/images/gps.png" />
                <div>
                  <p className="placeName">{mainData.searchData[0].name}</p>
                  <p className="cityName">{mainData.searchData[0].country}</p>
                </div>
              </button>
              <button className="recentHotel">
                <img alt="gps" src="/images/search.png" />
                <div>
                  <p className="hotelName">
                    {mainData.searchData[0].name}의 호텔
                  </p>
                  <p className="period">9월 30일~ 10월 1일</p>
                </div>
              </button>
            </div>
          </RecentBox>
          <IdeaBanner>
            <div className="leftSide">
              <p>여행 아이디어 저장</p>
              <p>
                여행을 만들어 모든 여행 아이디어를 저장하고 정리하고 지도에서
                확인하세요
              </p>
              <div className="ideaBtnWrap">
                <button>여행 만들기</button>
              </div>
            </div>
            <div className="rightSide"></div>
          </IdeaBanner>
          <SelSlide key={mainData.slideData.id} data={mainData.slideData[0]} />
          <CardBanner>
            <TitleWrap>
              <span>나만의 멋진 여행을 지원하세요</span>
              <div></div>
            </TitleWrap>
            <div className="cardWrap">
              <div className="reviewCard">
                <div className="cardImgWrap">
                  <img
                    alt="reviewCard"
                    src="https://static.tacdn.com/img2/brand/feed/covid_support_war.jpeg"
                  />
                </div>
                <div className="cardCaption">
                  <p>여행 경험을 공유하세요.</p>
                  <p>리뷰 작성</p>
                </div>
              </div>
              <div className="giftCard">
                <div className="cardImgWrap">
                  <img
                    alt="giftCard"
                    src="https://static.tacdn.com/img2/brand/feed/covid_support_gift_card2.svg"
                  />
                </div>
                <div className="cardCaption">
                  <p>방문하고 싶은 음식점을 도와주세요.</p>
                  <p>기프트 카드 구매</p>
                </div>
              </div>
              <div className="bookCard">
                <div className="cardImgWrap">
                  <img
                    alt="bookCard"
                    src="https://static.tacdn.com/img2/brand/feed/covid_support_virtual_tours.jpeg"
                  />
                </div>
                <div className="cardCaption">
                  <p>집에서 전 세계를 둘러보세요.</p>
                  <p>가상 체험 예약</p>
                </div>
              </div>
            </div>
          </CardBanner>
          <TripBanner>
            <TitleWrap>
              <span>다음 여행 꿈꿔보세요</span>
              <div></div>
            </TitleWrap>
            <SelSlide
              key={mainData.slideData.id}
              data={mainData.slideData[1]}
            />
          </TripBanner>
        </MakePlan>
        <AwardBanner>
          <div className="awardWrap">
            <div className="logoCaption">
              <img
                alt="awlLogo"
                src="https://static.tacdn.com/img2/travelers_choice/TC_logomark_solid_cream.svg"
              />
              <h2>2020 Travellers' Choice Award</h2>
              <button>수상자 보기</button>
            </div>
            <img alt="award" src="/images/award.jpeg" />
          </div>
        </AwardBanner>
        <MainBotMenu>
          <div className="botMenuWrap">
            {mainData.footMenu.map((footmenu, idx) => (
              <div key={idx}>
                <p className="footMenu">{footmenu.menu}</p>
                {footmenu.list.map((menulist, i) => (
                  <p key={i}>{menulist}</p>
                ))}
              </div>
            ))}
          </div>
        </MainBotMenu>
      </MainContainer>
    </>
  );
};

export default withRouter(Main);

const MainContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainSearchWrap = styled.form`
  width: 1280px;
  height: 352px;
  margin: 0 auto;
  background-color: #c9f2e3;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .searchCaption {
    width: 850px;
    height: 80px;
    margin: 8px 0 24px;
    line-height: 40px;

    span {
      width: 425px;
      text-align: left;
      font-size: 36px;
      font-weight: 900;
      display: flex;
    }
  }

  img {
    width: 585px;
    height: 389px;
    object-fit: contain;
    position: absolute;
    right: 0;
    bottom: -70px;
  }
`;

const MainSerachBox = styled.div`
  width: 850px;
  height: 60px;
  margin: 0 auto;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 42px;
    height: 38px;
    position: absolute;
    top: -68px;
    left: -4px;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 20px;
      height: auto;
      object-fit: contain;
    }
  }

  .off {
    width: 850px;
    height: 60px;
    padding: 12px 40px 12px 52px;
    border-radius: 8px;
    cursor: auto;
    outline: none;
    position: relative;

    ::placeholder {
      font-size: 14px;
      color: #8c8c8c;
    }
  }

  .on {
    width: 850px;
    height: 60px;
    padding: 12px 40px 12px 52px;
    background-color: white;
    border-bottom: none;
    border-radius: 12px 12px 0 0;
    cursor: auto;
    outline: none;
    z-index: 1000;
    position: relative;

    ::placeholder {
      font-size: 14px;
      color: #8c8c8c;
    }
  }

  .modalWrap {
    width: 850px;
    height: 480px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 999;
    overflow: auto;
    position: absolute;
    top: 18px;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    ::-webkit-scrollbar {
      display: none;
    }

    .searchList {
      width: 100%;
      position: absolute;
      top: 42px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;

      .list {
        width: 100%;
        height: 62px;
        padding: 6px 18px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;

        &:hover {
          background-color: #f2f2f2;
        }

        img {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          position: absolute;
          top: 10px;
          left: 18px;
          object-fit: cover;
        }

        p {
          width: 500px;
          height: 42px;
          position: absolute;
          top: 10px;
          left: 78px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;

          .placeName {
            font-size: 16px;
            font-weight: 700;
          }

          .nationName {
            font-size: 14px;
            color: #8c8c8c;
          }
        }
      }
    }
  }
`;

const MakePlan = styled.div`
  margin-top: 128px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TitleWrap = styled.div`
  width: 1280px;
  height: 45px;
  margin-bottom: 42px;
  position: relative;
  display: flex;
  justify-content: center;

  span {
    height: 45px;
    margin: 0 auto;
    padding: 0 12px;
    background-color: white;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 0.02em;
  }

  div {
    width: 1280px;
    height: 26.5px;
    border-top: 2px solid black;
    position: absolute;
    bottom: 0;
    z-index: -1;
  }
`;

const RecentBox = styled.div`
  width: 1280px;
  height: 140px;
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  h2 {
    font-size: 28px;
  }
  .btnWrap {
    width: 1280px;
    height: 89px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    button {
      width: 196px;
      height: 73px;
      padding: 16px;
      margin-right: 16px;
      border-radius: 12px;
      border: 2px solid #e0e0e0;
      display: flex;
      justify-content: space-around;
      align-items: center;

      img {
        width: 24px;
        height: 24px;
        object-fit: contain;
      }

      div {
        height: 37px;
        text-align: left;

        p:nth-child(1) {
          height: 19px;
          margin-bottom: 2px;
          font-size: 16px;
          font-weight: 600;
        }

        p:nth-child(2) {
          font-size: 12px;
          height: 16px;
        }
      }
    }

    .recentPlace {
      width: 144px;
    }
  }
`;

const IdeaBanner = styled.div`
  width: 1280px;
  height: 214px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;

  div {
    width: 640px;
    height: 214px;
  }

  .leftSide {
    background-color: #ff5d5d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p:nth-child(1) {
      width: 576px;
      height: 40px;
      margin-bottom: 12px;
      font-size: 32px;
      font-weight: 900;
    }
    p:nth-child(2) {
      width: 576px;
      height: 20px;
      margin-bottom: 24px;
      font-size: 16px;
    }
    .ideaBtnWrap {
      width: 576px;
      height: 54px;

      button {
        width: 119px;
        height: 54px;
        padding: 6px 0;
        background-color: black;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 700;
        color: white;

        &:hover {
          transition: 0.2s linear;
          background-color: #474747;
        }
      }
    }
  }

  .rightSide {
    background: url(https://static.tacdn.com/img2/brand/trips/image_trips_card_medium.png)
      100% no-repeat;
  }
`;

const CardBanner = styled.div`
  width: 1280px;

  .cardWrap {
    width: 1280px;
    height: 360px;
    margin-bottom: 80px;
    display: flex;
    justify-content: space-between;

    div {
      width: 394px;
      height: 360px;
      background-color: #faf1ed;

      .cardImgWrap {
        width: 394px;
        height: 263px;
        overflow: hidden;

        img {
          width: 394px;
          height: 263px;
          object-fit: cover;
        }
      }

      .cardCaption {
        width: 394px;
        height: 97px;
        padding: 28px 32px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        p:nth-child(1) {
          font-size: 18px;
        }

        p:nth-child(2) {
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
  }
`;

const TripBanner = styled.div`
  width: 1280px;
`;

const AwardBanner = styled.div`
  width: 100%;
  background-color: #004f32;

  .awardWrap {
    width: 1280px;
    height: 600px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logoCaption {
      width: 320px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      img {
        width: 188px;
        height: 118px;
        margin: 0 66px 32px;
      }

      h2 {
        margin-bottom: 64px;
        text-align: center;
        font-size: 54px;
        font-weight: 900;
        line-height: 48px;
        color: white;
      }

      button {
        width: 118px;
        height: 42px;
        padding: 10px 16px;
        background-color: black;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        color: white;
      }
    }
  }
`;

const MainBotMenu = styled.div`
  width: 100%;
  background-color: #faf1ed;

  .botMenuWrap {
    width: 1280px;
    height: 207px;
    padding: 32px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly
    align-items: center;

    div {
      width: 193px;
      height: 207px;

      p:nth-child(1){
        height: 19px;
        margin-bottom: 6px;
        font-size: 16px;
        font-weight: 700;
        line-height: 120%;
      }

      p:nth-child(n+2) {
        margin-bottom: 6px;
        font-size: 14px;
        font-weight: 400;

        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
`;
