import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Nav from "../Components/Nav";
import { detailData } from "../MockData/DetailData";
import { sampleMap } from "../MockData/SampleMap";
import { hotelListUrl } from "../Config";
import Aside from "../Components/DetailComponents/Aside";
import DetailItems from "../Components/DetailComponents/DetailItems";
import HotelCalendar from "../Components/DetailComponents/HotelCalendar";

const DetailPage = () => {
  const [toggle, setToggle] = useState();
  const [toggleInput, setToggleInput] = useState("추천 순");
  let [pageNumber, setPageNumber] = useState(1);
  const [facility, setFacility] = useState();
  const [sequence, setSequence] = useState("");
  const [hotelData, setHotelData] = useState();
  const [loading, setLoading] = useState();
  const [hotelCount, setHotelCount] = useState(0);
  const [isToggleClick, setIsToggelClick] = useState(false);

  useEffect(() => {
    const facilityName = sessionStorage.getItem("facilityName");
    const checkIn = sessionStorage.getItem("startDate");
    const checkOut = sessionStorage.getItem("endDate");

    setLoading(false);

    fetch(
      `${hotelListUrl}/hotel?page=${pageNumber}&facilities=${facilityName}${sequence}&checkin=${checkIn}&checkout=${checkOut}`
    )
      .then((res) => res.json())
      .then((res) => {
        res.message === "NotExistData" && window.location.reload();
        res.message === "NotExistData" &&
          alert("요청하신 호텔정보가 존재하지 않습니다.");
        setHotelData(res.data);
        setHotelCount(Math.ceil(res.hotel_count / 30));
        setLoading(true);
      });

    window.scrollTo(0, 0);
  }, [sequence, pageNumber, isToggleClick]);

  useEffect(() => {
    const facilityName = sessionStorage.getItem("facilityName");
    const facilityChecked = sessionStorage.getItem("facilityChecked");

    !facilityName && setFacility(facilityChecked);
  }, [facility]);

  const rowPriceHandler = () => {
    setToggleInput("요금(낮은순)");
    setToggle(false);
    setSequence("&row_price=1");
    setPageNumber(1);
    !isToggleClick ? setIsToggelClick(true) : setIsToggelClick(false);
  };

  const recommendationHandler = () => {
    setToggleInput("추천 순");
    setToggle(false);
    setSequence("");
    setPageNumber(1);
    !isToggleClick ? setIsToggelClick(true) : setIsToggelClick(false);
  };

  const userRatingHandler = () => {
    setToggleInput("여행자 평가");
    setToggle(false);
    setSequence("&user_rating=1");
    setPageNumber(1);
    !isToggleClick ? setIsToggelClick(true) : setIsToggelClick(false);
  };

  const pageBtnHandler = (e) => {
    const { name } = e.target;
    const isPlus = name === "plus";
    let numberPageParse = parseInt(pageNumber);

    if (!isPlus && numberPageParse <= 1) return;
    if (isPlus && pageNumber >= hotelCount) return;

    isPlus ? (numberPageParse += 1) : (numberPageParse -= 1);
    setPageNumber(numberPageParse);

    window.scrollTo(0, 0);
  };

  const pageMoveHandler = (e) => {
    const { name } = e.target.dataset;
    setPageNumber(parseInt(name));

    if (toggleInput === "추천 순") {
      setToggle(false);
      setSequence("");
    } else if (toggleInput === "요금(낮은순)") {
      setToggle(false);
      setSequence("&row_price=1");
    } else if (toggleInput === "여행자 평가") {
      setToggle(false);
      setSequence("&user_rating=1");
    }
  };

  const pageSumNumber = [];

  for (let i = 1; i <= hotelCount; i++) {
    pageSumNumber.push(i);
  }

  return (
    <>
      <Nav />
      <CategoryContainer>
        <CenterContainer>
          {detailData.categoryText.map(({ name, index }) => (
            <span key={index} className="categoryText">
              {name}
            </span>
          ))}
        </CenterContainer>
      </CategoryContainer>
      <InnerContainer>
        <CenterContainer>
          <div className="betweenContainer">
            <span className="innerText">
              미국 {">"} 하와이 {">"} 하와이 섬 {">"} 하와이 섬 호텔
            </span>
            <span className="innerText">베스트 하와이 섬 호텔</span>
          </div>
        </CenterContainer>
      </InnerContainer>
      <TripPlannerContainer>
        <CenterContainer>
          <RowContainer>
            <Link to="/map" className="mapContainer">
              <Img alt="google  map" src={sampleMap} />
              <div className="mapBtn">
                <div className="mapImgContainer">
                  <Img alt="location" src="/images/pin.png" />
                </div>
                지도보기
              </div>
            </Link>
            <div className="calendarContainer">
              <H1 className="calendarTitle">하와이 섬 호텔 및 최고의 숙소</H1>
              <HotelCalendar />
            </div>
          </RowContainer>
        </CenterContainer>
      </TripPlannerContainer>
      <Main>
        <CenterContainer>
          <RowContainer>
            <Aside />
            <ItemSection>
              <ItemFilter>
                <div className="filterContainer">
                  <span>
                    하와이 섬에서 344개의 시설 중 20개의 시설을 이용할 수 있니다
                  </span>
                  <span className="toggleFilterContainer">
                    <p className="sortOrder">정렬순서: </p>
                    <div
                      className="toggleDefaultFilter"
                      onClick={() =>
                        toggle ? setToggle(false) : setToggle(true)
                      }
                    >
                      {toggleInput}
                      {toggle ? (
                        <i className="fas fa-chevron-circle-down" />
                      ) : (
                        <i className="fas fa-chevron-circle-up" />
                      )}
                    </div>
                    <ToggleContainer toggle={toggle}>
                      <div className="toggle" onClick={userRatingHandler}>
                        여행자 평가
                      </div>
                      <div
                        className="toggle"
                        onClick={(pageNumber) =>
                          recommendationHandler(pageNumber)
                        }
                      >
                        추천 순
                      </div>
                      <div className="toggle" onClick={rowPriceHandler}>
                        요금 (낮은순)
                      </div>
                      <div
                        className="toggle"
                        onClick={() => setToggleInput("도심까지의 거리")}
                      >
                        도심까지의 거리
                      </div>
                    </ToggleContainer>
                  </span>
                </div>
                <div className="adviceContainer">
                  <p className="advice">
                    트립어드바이저에 지불하는 금액이 표시된 가격 순서에 미치는
                    영향입니다. 객실 유형은 다를 수 있습니다
                  </p>
                </div>
                <div className="recentList">
                  <p className="recentText">하와이 섬에서 최근에 본 것</p>
                </div>
                <DetailItems hotelData={hotelData} loading={loading} />
                <HotelPagination>
                  <button
                    className="prevBtn"
                    name="minus"
                    onClick={(e) => pageBtnHandler(e)}
                  >
                    이전
                  </button>
                  <ul className="hotelPageList">
                    {pageSumNumber.map((i) => (
                      <PageNumber
                        key={i}
                        data-name={i}
                        back={pageNumber === i ? "#e0e0e0" : "white"}
                        onClick={(e) => pageMoveHandler(e)}
                      >
                        {i}
                      </PageNumber>
                    ))}
                  </ul>
                  <button
                    className="nextBtn"
                    name="plus"
                    onClick={(e) => pageBtnHandler(e)}
                  >
                    다음
                  </button>
                </HotelPagination>
              </ItemFilter>
            </ItemSection>
          </RowContainer>
        </CenterContainer>
      </Main>
    </>
  );
};

export default withRouter(DetailPage);

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const H1 = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CenterContainer = styled.div`
  width: 1280px;
  display: flex;
  align-items: center;
`;

const RowContainer = styled.div`
  display: flex;
`;

const CategoryContainer = styled.div`
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgb(224, 224, 224);
  border-bottom: 1px solid rgb(224, 224, 224);
  font-size: 14px;

  .categoryText {
    height: 42px;
    padding: 12px;
  }
`;

const InnerContainer = styled.div`
  height: 44px;
  display: flex;
  justify-content: center;

  .betweenContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .innerText {
      color: rgb(140, 140, 140);
    }
  }
`;

const TripPlannerContainer = styled.div`
  height: 162px;
  border-bottom: 1px solid rgb(224, 224, 224);
  display: flex;
  justify-content: center;

  .mapContainer {
    width: 294px;
    height: 136px;
    position: relative;
    border: 1px solid black;
    cursor: pointer;

    .mapBtn {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      position: absolute;
      border: 2px solid black;
      border-radius: 3px;
      background-color: white;
      padding: 8px 16px;
      font-size: 14px;
      font-weight: bold;

      .mapImgContainer {
        width: 16px;
        height: 16px;
        margin-right: 5px;
      }
    }
  }

  .calendarContainer {
    margin-left: 24px;

    .calendarTitle {
      font-size: 32px;
    }
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
`;

const ItemSection = styled.section`
  width: 910px;
  margin: 12px 24px;
`;

const ItemFilter = styled.div`
  font-size: 16px;

  .filterContainer {
    display: flex;
    justify-content: space-between;

    .toggleFilterContainer {
      position: relative;
      display: flex;

      .sortOrder {
        margin: auto 4px;
      }

      .toggleDefaultFilter {
        width: 200px;
        height: 40px;
        border: 1px solid #e0e0e0;
        background-color: white;
        padding: 0 10px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
      }
    }
  }

  .adviceContainer {
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;

    .advice {
      font-size: 11px;
      border-bottom: 1px dotted black;
    }
  }

  .recentList {
    padding: 12px 16px;
    margin: 12px 0;
    background-color: white;
    border: 1px solid #e0e0e0;
    font-size: 14px;
    font-weight: bold;

    .recentText {
      height: 34px;
      padding: 10px 0;
    }
  }
`;

const ToggleContainer = styled.div`
  width: 201px;
  top: 40px;
  left: 75px;
  font-size: 14px;
  padding: 10px 0;
  border: 1px solid #e0e0e0;
  background-color: white;
  position: absolute;
  z-index: 999;
  cursor: pointer;
  visibility: ${(props) => (props.toggle ? "" : "hidden")};

  .toggle {
    padding: 10px;
    cursor: pointer;

    &:hover {
      color: white;
      background-color: #8c8c8c;
    }
  }
`;

const HotelPagination = styled.div`
  height: 77px;
  border: 1px solid #e0e0e0;
  padding: 16px 24px;
  margin-top: 16px;
  background-color: white;
  display: flex;
  justify-content: space-between;

  .prevBtn {
    width: 62px;
    height: 36px;
    border: 1px solid black;
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
    opacity: 0.5;
  }

  .nextBtn {
    width: 62px;
    height: 36px;
    border: 1px solid black;
    border-radius: 3px;
    color: white;
    background-color: black;
    font-size: 14px;
    font-weight: bold;
  }

  .hotelPageList {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const PageNumber = styled.li`
  width: 40px;
  height: 40px;
  text-align: center;
  padding: 8px 0;
  background-color: ${(props) => props.back};
`;
