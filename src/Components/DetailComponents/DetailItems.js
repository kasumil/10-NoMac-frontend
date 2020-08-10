import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const priceHandler = (price) => {
  return Math.floor(price).toLocaleString(5) + "원";
};

const DetailItems = (props) => {
  const { hotelData, loading } = props;

  return (
    <>
      {hotelData && loading ? (
        hotelData.map((hotelData) => (
          <DetailItem key={hotelData.id}>
            <Slider {...settings}>
              {hotelData.image.map((image, index) => (
                <div key={index} className="hotelContainer">
                  <img alt="hotel" className="imgHotel" src={image} />
                </div>
              ))}
            </Slider>
            <ItemColumnContainer>
              <p>{hotelData.name}</p>
              <div className="itemRowContainer">
                {hotelData.provider_logo !== "" ? (
                  <>
                    <ContentColumnContainer>
                      <div className="imgLogo">
                        <img alt="hotel  logo" src={hotelData.provider_logo} />
                      </div>
                      <h1 className="price">{priceHandler(hotelData.price)}</h1>
                      <button className="specialPriceBtn">특가보기</button>
                    </ContentColumnContainer>
                    <ContentColumnContainer>
                      <HotelUrl>Agoda.com</HotelUrl>
                      <p>{priceHandler(hotelData.price - 32292)}</p>
                      <HotelUrl>Expedia</HotelUrl>
                      <p>{priceHandler(hotelData.price - 26782)}</p>
                      <HotelUrl>Booking.com</HotelUrl>
                      <p>{priceHandler(hotelData.price - 19543)}</p>
                    </ContentColumnContainer>
                  </>
                ) : (
                  <HotelMoveContainer>
                    <button className="notPriceBtn">호텔로 이동하기</button>
                  </HotelMoveContainer>
                )}
                <ContentColumnContainer>
                  <ScoreContainer>
                    <p className="score">
                      <strong>{parseFloat(hotelData.user_rating)}</strong> / 5점
                    </p>
                    <p className="review">{" " + hotelData.review_count_msg}</p>
                  </ScoreContainer>
                  <HotelInfo>
                    <p className="facilitiesTitle">부대 시설</p>
                    <div className="contentContainer">
                      <div className="icon">
                        {hotelData.facilities_path.map(
                          (facilities_path, index) => (
                            <div key={index} className="imgContainer">
                              <img
                                className="facilitieImg"
                                alt="facilitie"
                                src={facilities_path}
                              />
                            </div>
                          )
                        )}
                      </div>
                      <ContentText>
                        {hotelData.facilities.map((facilities, index) => (
                          <p key={index}>{facilities}</p>
                        ))}
                      </ContentText>
                    </div>
                  </HotelInfo>
                </ContentColumnContainer>
              </div>
            </ItemColumnContainer>
          </DetailItem>
        ))
      ) : (
        <>
          <SplashContainer>
            <img alt="Tripadvisor" src="/images/loadingImg.png" />
            <LoadingContainer>
              <div className="sk-chase">
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
              </div>
            </LoadingContainer>
          </SplashContainer>
        </>
      )}
    </>
  );
};

export default DetailItems;

const LoadingContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;

  .sk-chase {
    width: 320px;
    height: 320px;
    position: relative;
    animation: sk-chase 2.5s infinite linear both;
  }
  .sk-chase-dot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: sk-chase-dot 2s infinite ease-in-out both;
  }

  .sk-chase-dot:before {
    content: "";
    display: block;
    width: 25%;
    height: 25%;
    /* background-color: #34e0a1; */
    border-radius: 100%;
    animation: sk-chase-dot-before 2s infinite ease-in-out both;
  }

  .sk-chase-dot:nth-child(1) {
    animation-delay: -1.1s;
  }
  .sk-chase-dot:nth-child(2) {
    animation-delay: -1s;
  }
  .sk-chase-dot:nth-child(3) {
    animation-delay: -0.9s;
  }
  .sk-chase-dot:nth-child(4) {
    animation-delay: -0.8s;
  }
  .sk-chase-dot:nth-child(5) {
    animation-delay: -0.7s;
  }
  .sk-chase-dot:nth-child(6) {
    animation-delay: -0.6s;
  }
  .sk-chase-dot:nth-child(1):before {
    animation-delay: -1.1s;
    background-color: #eee;
  }
  .sk-chase-dot:nth-child(2):before {
    animation-delay: -1s;
    background-color: #ddd;
  }
  .sk-chase-dot:nth-child(3):before {
    animation-delay: -0.9s;
    background-color: #888;
  }
  .sk-chase-dot:nth-child(4):before {
    animation-delay: -0.8s;
    background-color: #ef6a45;
  }
  .sk-chase-dot:nth-child(5):before {
    animation-delay: -0.7s;
    background-color: #fcc40f;
  }
  .sk-chase-dot:nth-child(6):before {
    animation-delay: -0.6s;
    background-color: #34e0a1;
  }

  @keyframes sk-chase {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes sk-chase-dot {
    80%,
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes sk-chase-dot-before {
    50% {
      transform: scale(0.4);
    }
    100%,
    0% {
      transform: scale(1);
    }
  }
`;

const SplashContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
`;

const DetailItem = styled.div`
  height: 258px;
  display: flex;
  border: 1px solid #e0e0e0;
  background-color: white;
  margin-top: 10px;

  .slick-slider {
    width: 300px;
    height: 255px;

    .slick-prev {
      left: 0;
      z-index: 999;
    }

    .slick-next {
      right: 0;
      z-index: 999;
      transform: translate(-50%, -50%);
    }

    .slick-prev,
    .slick-next {
      &:before {
        color: white;
        font-size: 30px;
      }
    }

    .slick-dots {
      bottom: 0;
      z-index: 999;

      li button:before {
        opacity: 1;
        color: #d6d6d6;
      }

      li.slick-active button:before {
        opacity: 1;
        color: white;
      }
    }

    .imgHotel {
      width: 300px;
      height: 255px;
      background-size: cover;
      background-position: 50%;
      background-repeat: no-repeat;
    }
  }
`;

const ItemColumnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;

  .itemRowContainer {
    display: flex;
  }
`;

const ContentColumnContainer = styled.div`
  height: 207px;
  display: flex;
  margin-top: 15px;
  flex-direction: column;

  &:first-child {
    width: 200px;
    margin-right: 6px;
    align-items: center;
  }

  &:nth-child(2) {
    width: 138px;
    height: 180px;
    font-size: 12px;
    align-items: center;
    border-left: 1px solid #e0e0e0;

    p {
      margin: 2px 0;
    }
  }

  &:last-child {
    width: 260px;
    font-size: 14px;
    color: #474747;
    padding: 0 20px;
  }

  .imgLogo {
    width: 93px;
    margin: 20px 0 10px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .price {
    font-size: 24px;
  }

  .specialPriceBtn {
    width: 100%;
    font-size: 14px;
    background-color: #f2b203;
    border-radius: 12px;
    margin-top: 10px;
    padding: 9px 12px;
  }
`;

const HotelMoveContainer = styled.div`
  width: 250px;
  height: 207px;
  display: flex;
  margin-top: 15px;
  margin-right: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .notPriceBtn {
    width: 150px;
    font-size: 14px;
    background-color: white;
    border: 2px solid black;
    border-radius: 12px;
    margin-top: 10px;
    padding: 9px 12px;
  }
`;

const ScoreContainer = styled.div`
  font-size: 13px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;

  .score {
    font-size: 20px;
    margin-right: 10px;
  }
`;

const HotelUrl = styled.p`
  margin-top: 12px;
  font-weight: normal;
  color: #474747;
`;

const HotelInfo = styled.div`
  margin: 10px 0;

  .facilitiesTitle {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .contentContainer {
    display: flex;

    .icon {
      width: 20px;
      height: 20px;
      margin-top: 5px;

      .imgContainer {
        width: 18px;
        height: 18px;

        .facilitieImg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

const ContentText = styled.div`
  height: 20px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-items: center;

  p {
    height: 20px;
  }
`;
