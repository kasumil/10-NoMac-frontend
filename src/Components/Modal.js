import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Modal = ({ datas, setShow }) => {
  return (
    <ModalContainer>
      <div className="overlay">
        <div className="modal">
          <button
            className="modalClose"
            type="button"
            onClick={() => setShow(false)}
          >
            <span>X</span>
          </button>
          <div className="modalBody">
            {datas &&
              datas.map((modalData, index) => {
                if (modalData.isShow) {
                  return (
                    <button
                      className="feedImgWrap"
                      onClick={() => setShow(true)}
                      type="button"
                      key={index}
                    >
                      <FeedBoard>
                        <div className="boardHead" />
                        <ul className="boardCon">
                          <li className="boardUser">
                            <div className="userImgWrap">
                              <img
                                className="userImg"
                                alt="userImg"
                                src="https://media-cdn.tripadvisor.com/media/photo-l/1a/f6/e3/1f/default-avatar-2020-46.jpg"
                              />
                            </div>
                            <p>
                              <span>{modalData.user}</span>
                            </p>
                          </li>
                          <li className="substance">
                            <span>{modalData.title}</span>
                            <span>{modalData.text}</span>
                          </li>
                          <li className="boardDate">
                            <span>체험날짜: 2018년 2월</span>
                          </li>
                          <li className="moreReview">
                            <span>2개의 도움이 되는 리뷰</span>
                          </li>
                          <li className="boardIconWrap">
                            <p>
                              <img alt="like" src="/images/like.png" />
                              도움이 됨
                            </p>
                            <p>
                              <img alt="heart" src="/images/heart.png" />
                              저장
                            </p>
                            <p>
                              <img alt="share" src="/images/share.png" />
                              공유
                            </p>
                          </li>
                        </ul>
                        <div className="aboutPlace">
                          <p className="aboutText">이 장소에 대해</p>
                          <div className="findPlace">
                            <img
                              className="otherPlace"
                              alt="otherPlace"
                              src="/images/hawailhotel.jpg"
                            />
                            <div className="placeInfo">
                              <p className="placeName">{modalData.hotel}</p>
                              <p className="placeDetail">하와이, 미국</p>
                            </div>
                          </div>
                        </div>
                      </FeedBoard>
                      {modalData.media.length > 0 && (
                        <>
                          {!modalData.media[0].includes("mp4") ? (
                            <img
                              className="feedMainImg"
                              alt="feedImg"
                              src={modalData.media}
                            />
                          ) : (
                            <video
                              className="feedMainVod"
                              controls
                              autoPlay
                              name="media"
                            >
                              <source src={modalData.media} type="video/mp4" />
                            </video>
                          )}
                        </>
                      )}
                    </button>
                  );
                }
                return null;
              })}
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default withRouter(Modal);

const ModalContainer = styled.div`
  width: 100%:
  height: 100%;
  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
    background-color: rgba(0, 0, 0, 0.9);
  }
  .modal {
    position: relative;
    z-index: 99;
    width: 1280px;
    margin: 0 auto;
    line-height: 0;
    .modalBody {
      width: 1080px;
      margin: 0 auto;
    }
    .feedImgWrap {
          width: 1080px;
          height: 800px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;

          .feedMainImg {
            width: 600px;
            height: auto;
            object-fit: contain;
            position: absolute;
            left:0;
          }

          .feedMainVod {
            width: 600px;
            height: auto;
            object-fit:contain;
            position: absolute;
            left:0;
          }
        }
    }
  }
  
  .modalClose {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 5px;
    border: 0;
    -webkit-appearance: none;
    background: none;
    z-index: 100;
    font-size: 20px;
    color: white;
    cursor: pointer;
    span {
      font-size: 24px;
      font-weight: 700;
    }
  }
`;

const FeedBoard = styled.div`
  width: 480px;
  height: 800px;
  background-color: white;
  font: initial;
  position: absolute;
  top: 0;
  right: 0;
  cursor: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: center;
  .boardHead {
    width: 480px;
    height: 50px;
    background: url("https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal.svg")
      #00aa67 no-repeat center center;
    background-size: auto 21px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .boardCon {
    width: 480px;
    height: 308px;
    margin-bottom: 8px;
    padding: 24px 24px 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    li {
      width: 432px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      span {
        font-size: 12px;
      }
    }
    .boardUser {
      height: 48px;
      flex-direction: initial;
      align-items: center;
      .userImgWrap {
        width: 42px;
        height: 42px;
        margin-right: 10px;
        border-radius: 100%;
        overflow: hidden;
        .userImg {
          width: 42px;
          height: 42px;
          object-fit: contain;
        }
      }
      p {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        span:nth-child(1) {
          font-size: 14px;
          font-weight: 700;
        }
      }
    }
    .substance {
      height: auto;
      margin-bottom: 10px;
      text-align: left;
      span {
        margin-top: 8px;
      }
      span:nth-child(1) {
        font-size: 18px;
        font-weight: 700;
      }
      span:nth-child(2) {
        font-size: 14px;
      }
    }
    .boardDate {
      height: 18px;
      span {
        font-size: 14px;
        font-weight: 700;
        color: #474747;
      }
    }
    .moreReview {
      height: 39px;
      span {
        padding: 8px 0;
        color: #8c8c8c;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
    .boardIconWrap {
      height: 22px;
      flex-direction: initial;
      p {
        margin-right: 20px;
        font-size: 12px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        opacity: 0.3;
        cursor: pointer;
        &:hover {
          opacity: 1;
        }
        img {
          width: 20px;
          height: 20px;
          margin-right: 8px;
          object-fit: contain;
        }
      }
    }
  }
  .aboutPlace {
    width: 480px;
    height: 147px;
    margin-top: 30px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .aboutText {
      width: 432px;
      height: 20px;
      margin-bottom: 16px;
      text-align: left;
      font-size: 16px;
      font-weight: 700;
    }
    .findPlace {
      width: 432px;
      height: 62px;
      border: 1px solid #e0e0e0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .otherPlace {
        width: 62px;
        height: 62px;
        object-fit: cover;
      }
      .placeInfo {
        width: 400px;
        height: 62px;
        margin-left: 10px;
        p {
          width: 300px;
          height: 20px;
          margin: 8px 0;
          text-align: left;
          font-size: 12px;
        }
        .placeName {
          font-weight: 700;
        }
      }
    }
  }
`;
