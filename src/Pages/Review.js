import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Modal from "../Components/Modal";
import { hotelListUrl } from "../Config";
import styled from "styled-components";

const Review = () => {
  const [show, setShow] = useState(false);
  const [datas, setDatas] = useState([]);

  const handleChangeShow = (id) => {
    const showData = datas.map((data) => {
      if (id === data.id) {
        data.isShow = true;
      } else {
        data.isShow = false;
      }
      return data;
    });
    setDatas(showData);
    setShow(true);
  };

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("kakao-token"));
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(`${hotelListUrl}/review?user=수호`, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        const newData = res.review_list.map((data) => {
          data.isShow = false;
          return data;
        });
        setDatas(newData);
      });
  }, []);

  return (
    <ReviewBody>
      <Nav />
      <ReviewContainer>
        <div className="profileWrap">
          <div className="profileInfo">
            <img
              alt="profileImg"
              src="https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e3/1f/default-avatar-2020-46.jpg"
            />
            <div className="userWrap">
              <p className="userInfo">
                <span className="userName">
                  {datas.length && datas[0].user}
                </span>
                <span className="userTag">
                  @{datas.length && datas[0].user}
                </span>
              </p>
              <div className="userDetail">
                <p className="posting">
                  <span>포스팅</span>
                  <span>6</span>
                </p>
                <p className="followers">
                  <span>팔로워</span>
                  <span>1</span>
                </p>
                <p className="following">
                  <span>팔로잉</span>
                  <span>0</span>
                </p>
              </div>
            </div>
          </div>
          <div className="infoBtnWrap">
            <button className="followBtn">
              <img alt="follow" src="/images/follow.png" />
              <span>팔로우</span>
            </button>
            <button className="chatBtn">
              <img alt="chat" src="/images/chat.png" />
            </button>
            <button className="etcBtn">
              <img alt="etc" src="/images/etc.png" />
            </button>
          </div>
        </div>
        <ul className="profileTab">
          <li className="feedsTab">활동 피드</li>
          <li className="feedImgTab">사진</li>
          <li className="feedReviewTab">리뷰</li>
          <li className="feedBadgeTab">배지</li>
          <li className="feedMapTab">여행 지도</li>
        </ul>
        <Link to="/postreview">
          <PostReviewBtn>리뷰 등록하기</PostReviewBtn>
        </Link>
      </ReviewContainer>
      <FeedWrap>
        <div className="feedSideMenu">
          <ul className="sideList">
            <li className="sideTitle">소개</li>
            <li className="sidePlace">
              <img alt="place" src="/images/gpsk.png" />
              하와이, 미국
            </li>
            <li className="sideDate">
              <img alt="date" src="/images/calendar.png" />
              2016년 6월에 가입함
            </li>
          </ul>
        </div>
        <FeedCardWrap>
          {datas.length &&
            datas.map((data, index) => (
              <Feeds key={index}>
                <div className="feedHead">
                  <img
                    className="headIcon"
                    alt="userIcon"
                    src="https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e3/1f/default-avatar-2020-46.jpg"
                  />
                  <div className="feedInfo">
                    <p>
                      <span>{datas.length && datas[0].user}</span>님이 리뷰를
                      작성했습니다.
                    </p>
                    <p>2018년 6월</p>
                  </div>
                </div>
                <div className="mainFeed">
                  <button
                    className="feedImgWrap"
                    onClick={() => handleChangeShow(data.id)}
                    type="button"
                  >
                    {data.media.length > 0 ? (
                      <>
                        {!data.media[0].includes("mp4") ? (
                          <img
                            className="feedMainImg"
                            alt="successUpload"
                            src={data.media}
                          />
                        ) : (
                          <video className="feedMainVod" controls name="media">
                            <source src={data.media} type="video/mp4"></source>
                          </video>
                        )}
                      </>
                    ) : (
                      <div className="noImg">
                        <p>등록된 이미지가 없습니다.</p>
                      </div>
                    )}
                  </button>
                </div>
              </Feeds>
            ))}
          {show && <Modal setShow={setShow} datas={datas} />}
        </FeedCardWrap>
      </FeedWrap>
    </ReviewBody>
  );
};

export default withRouter(Review);

const ReviewBody = styled.div`
  width: 100%;
  background-color: #f2f2f2;
`;

const ReviewContainer = styled.div`
  width: 1280px;
  height: 233px;
  margin: 24px auto;
  background-color: white;
  position: relative;

  .profileWrap {
    width: 1280px;
    height: 186px;
    margin: 0 auto;
    padding: 24px 24px 0;
    display: flex;
    justify-content: center;

    .profileInfo {
      width: 987px;
      height: 126px;
      display: flex;

      img {
        width: 126px;
        height: 126px;
        margin-right: 12px;
        border-radius: 100%;
        cursor: pointer;
      }

      .userWrap {
        width: 849px;
        height: 126px;
        display: flex;
        flex-direction: column;

        .userInfo {
          width: 849px;
          height: 46px;
          margin-bottom: 15px;
          display: flex;
          flex-direction: column;

          .userName {
            font-size: 24px;
            font-weight: 700;
          }

          .userTag {
            font-size: 14px;
            color: #8c8c8c;
          }
        }

        .userDetail {
          width: 849px;
          height: 65px;
          display: flex;

          p {
            width: 60px;
            height: 56px;
            margin-right: 48px;
            padding: 4px 3px;
            font-size: 18px;
            font-weight: 700;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        }
      }
    }

    .infoBtnWrap {
      width: 197px;
      height: 126px;
      display: flex;
      justify-content: center;

      button {
        width: 52px;
        height: 37px;
        border: 1px solid #e0e0e0;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 14px;
          height: 14px;
          margin: 0 3px 0 4px;
        }
      }

      .followBtn {
        width: 93px;
        height: 37px;
        border-right: 0;
        text-align: center;
        line-height: 40px;

        img {
          margin-left: 0;
        }

        span {
          font-size: 14px;
          font-weight: 700;
        }
      }

      .chatBtn {
        border-right: 0;
      }
    }
  }

  .profileTab {
    width: 1280px;
    height: 47px;
    padding: 0 12px;
    display: flex;
    align-items: center;

    li {
      height: 46px;
      padding: 0 12px;
      text-align: center;
      line-height: 46px;
      font-size: 14px;

      &:hover,
      &:focus {
        font-weight: 700;
        border-bottom: 2px solid #00aa6c;
      }
    }
  }
`;

const PostReviewBtn = styled.button`
  width: 197px;
  height: 37px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  position: absolute;
  bottom: 24px;
  right: 48px;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    transition: 0.2s linear;
    background-color: #00aa6c;
    border: 1px solid #00aa6c;
    color: white;
  }
`;

const FeedWrap = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  .feedSideMenu {
    width: 25%;
    height: 146px;
    margin-right: 24px;
    padding: 24px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    .sideList {
      width: 242px;
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      li {
        margin-bottom: 14px;
        font-size: 14px;
        color: #474747;
        display: flex;
        align-items: center;

        img {
          width: 16px;
          height: 16px;
          margin-right: 8px;
          object-fit: contain;
        }
      }

      .sideTitle {
        font-size: 16px;
        font-weight: 700;
        color: black;
      }
    }
  }
`;

const FeedCardWrap = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Feeds = styled.form`
  width: 600px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .feedHead {
    width: 100%;
    height: 69px;
    background-color: white;
    padding: 12px 24px;
    display: flex;
    align-items: center;

    .headIcon {
      width: 42px;
      height: 42px;
      margin-right: 8px;
      border-radius: 100%;
    }

    .feedInfo {
      height: 36px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      p:nth-child(1) {
        font-size: 14px;
        color: #474747;

        span {
          font-weight: 700;
          color: black;
        }
      }

      p:nth-child(2) {
        font-size: 12px;
        color: #8c8c8c;
      }
    }
  }
  .mainFeed {
    width: 100%;
    height: auto;
    position: relative;

    .feedImgWrap {
      width: 600px;
      height: auto;
      margin-bottom: 60px;

      .feedMainImg {
        width: 100%;
        height: auto;
        object-fit: contain;
      }

      .feedMainVod {
        width: 100%;
        height: auto;
        object-fit:contain;
      }

      .noImg {
        width: 600px;
        height: 400px;
        background-color: #333;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          font-size 15px;
          font-weight: 700;
          color: white;
        }
      }
    }

    .slick-prev,
    .slick-next {
      width: 40px;
      height: 40px;
      padding-right: 50px;
      line-height: 0;
      z-index: 9999;
      outline: none;
      cursor: pointer;

      :before {
        content: none;
        border-radius: 100%;
      }
    }

    .slick-prev {
      background: url(/images/moprev.png) no-repeat;
      background-size: contain;
      position: absolute;
      left: -80px;
    }

    .slick-next {
      background: url(/images/monext.png) no-repeat;
      background-size: contain;
      position: absolute;
      right: -80px;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
