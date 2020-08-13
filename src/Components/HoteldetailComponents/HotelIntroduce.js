import React, { useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HotelIntroduce({idx,hotel}) {
  const [ savepoint , setSavepoint ] = useState(hotel)
  const [ moretext, setMortext ] = useState(false)
  const { kind } = hotel.hotel_rating
  
  const ratingReturn = (kind) => {
    if ( kind > 4.5 ) {
      return "아주좋음"
    }
    if ( kind > 3.5 ) {
      return "좋음"
    }
    if ( kind > 2.5) {
      return "보통"
    }
    if (kind >1.5) {
      return "별로"
    }
    if (kind > 0.5) {
      return "최악"
    }
  };

  const circleReturn =(kind) => {
    if ( kind > 4.5 ) {
      return "●●●●●"
    }
    if ( kind > 3.5 ) {
      return "●●●●○"
    }
    if ( kind > 2.5) {
      return "●●●○○"
    }
    if (kind >1.5) {
      return "●●○○○"
    }
    if (kind > 0.5) {
      return "●○○○○"
    }
  }

  const Splitcontent = hotel.content
  const SplitMap = Splitcontent.split(".")

  const hiddenText = () => {
    setMortext ({
        moretext: false,
        limit : 3
      }
    );
  }

  const settings = {

   }
   

  return(
    <>
      <HotelIntroduceDIV>
        <div>
          <IntroduceTitle>
            <h2 className="Introduce">소개</h2>
          </IntroduceTitle>
          <HotelContent>
            <HotelContentLeft>
              <ReviewPoint>
                <ReviewNumber>{Number(hotel.hotel_rating).toFixed(1)}</ReviewNumber>
                <Link to="null" className="Reviews">
                  <ReviewGood>{ratingReturn(hotel.hotel_rating)}</ReviewGood>
                  <div className="flexList">
                    <ReviewNumberConverter>{circleReturn(hotel.hotel_rating)}</ReviewNumberConverter>
                    <ReviweAccount>1445건의 리뷰</ReviweAccount>
                  </div>
                </Link>
              </ReviewPoint>
              <PointContent>
                <div className="rate">{circleReturn(hotel.place)}</div>
                <div className="title">장소</div>
              </PointContent>
              <PointContent>
                <div className="rate">{circleReturn(hotel.cleanliness)}</div>
                <div className="title">청결도</div>
              </PointContent>
              <PointContent>
                <div className="rate">{circleReturn(hotel.service)}</div>
                <div className="title">서비스</div>
              </PointContent>
              <PointPrice>
                <div className="rate">{circleReturn(hotel.price)}</div>
                <div className="title">가격</div>
              </PointPrice>
              <FoldingContent>
                <ul className="foldingMargin" moretext={moretext}  >
                    {SplitMap.map((hotel) => {
                      return(
                        <li>{hotel}</li>
                      )})}
                </ul>
                <div className="foldBtn">
                  <div className="" onClick={() => setMortext(true)}>더보기</div>
                  <div className="" onClick={() => setMortext(false)}>덜 보기</div>
                </div>
              </FoldingContent>
              <MiniPicture>
                <CustomSlider {...settings}>
                  {hotel.image.map(hotel =>{
                    return (
                      <img className="smallBigimg" src={hotel} alt="" />
                    )})}
                  </CustomSlider>
              </MiniPicture>
            </HotelContentLeft>
            <HotelContentRight>
                      편의시설
            </HotelContentRight>
          </HotelContent>
        </div>
      </HotelIntroduceDIV>
    </>
  )
}

export default withRouter(HotelIntroduce);

const HotelIntroduceDIV = styled.div`
  max-width: 1280px;
  width: 814px;
  height: 1274px;
  margin: 24px 0 12px 0;
  padding: 24px;
  background-color: white;
`;

const IntroduceTitle = styled.div`
  width: 100%;
  height: 49px;
  padding-bottom: 18px;
  border-bottom: 1px solid gray;

  .Introduce{
    width: 100%;
    height: 30px;
    font-size: 28px;
    font-weight: 700;
    line-height: 30px;
    color: black;
    font-family: 'Arial, Tahoma, Bitstream Vera Sans, sans-serif';
  }
`;

// 호텔 소개 내용 전체
const HotelContent = styled.div`
  width: 100%;
  height: 987px;
`;

//소개 왼쪽 
const HotelContentLeft = styled.div`
  width: 50%;
  height: 1125px;
  padding: 12px;
  position: relative;
`;

const ReviewPoint = styled.div`
  width: 100%;
  margin: 14px 0;
  display: flex;  

  .Reviews{
    cursor: pointer;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: center;

    .flexList{
      display: flex;
      align-items: center;
    }
  }
`;

const ReviewNumber = styled.span`
  color: black;
  font-family: 'Arial, Tahoma, Bitstream Vera Sans, sans-serif';
  font-size: 48px;
  font-weight: 700;
  margin-right: 8px;
  width: 90px;
`;

const ReviewGood = styled.div`
  color: black;
  font-family: 'Arial, Tahoma, Bitstream Vera Sans, sans-serif';
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  height: 32px;
  line-height: 22px;
  display: flex;
  align-items: flex-end;
`;

const ReviewNumberConverter = styled.div`
  width: 90px;
  height: 30px;
  font-size: 30px;
  color: green;
`;

const ReviweAccount = styled.div`
  width: 95px;
  height: 30px;
  color: black;
  font-size: 14px;
  font-family: 'Arial, Tahoma, Bitstream Vera Sans, sans-serif';
  margin-left: 5px;
  display: flex;
  align-items: flex-end;
`;

const PointContent = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 3px;
  display: flex;

  .rate {
    width: 80px;
    height: 30px;
    font-size: 30px;
    color: green;
  }

  .title{
    color: #2c2c2c;
    font-size: 14px;
    margin-left: 20px;
    font-family: 'Arial, Tahoma, Bitstream Vera Sans, sans-serif';
    display: flex;
    align-items: flex-end;
    font-weight: bold;
  }
  `;

  const PointPrice = styled.div`
    width: 100%;
    height: 30px;
    margin-bottom: 24px;
    display: flex;
    
    .rate {
      width: 80px;
      height: 20px;
      font-size: 30px;
      color: green;
    }

    .title {
      color: #2c2c2c;
      font-size: 14px;
      margin-left: 20px;
      font-weight: 400;
      font-family: 'Arial, Tahoma, Bitstream Vera Sans, sans-serif';
      display: flex;
      align-items: flex-end;
      font-weight: bold;
    }
  `;

  const FoldingContent = styled.div`
    width: 100%;
    height: 582px;

    .foldingMargin{
      font-size: 16px;
      overflow: hidden;
      max-height: 175px;

      li{
        margin-bottom: 12px;
      }
    }
  `;

  const MiniPicture = styled.div`
    width: 372px;
    height: 325px;
    border: 1px solid red;
    position: absolute;

    .smallBigimg{
      width: 372px;
      height: 272px;
    }

    li{
      width:100%;
      height: 52px;
      display: flex;
      flex-wrap: wrap;
    }

    .verySmallimg{
      width: 47px;
      height: 50px;
    }
  `;

const CustomSlider = styled(Slider)`
  width: 372px;
  height: 100%;

  .slick-disabled {
    display: none !important;
    }

  .slick-prev {
    position: absolute;
    color: white;
    background-color: rgba(74,74,74, .6);
    width: 80px;
    height: 100px;
    left: 0;
    border-radius: 5px;
    z-index: 5;

    &:hover{
    background-color: rgba(0,0,0,.5);
    }
  }

  .slick-prev:before{
      width: 30px !important;
      height: 30px !important;
      font-size: 30px !important;
  }

  .slick-next {
    position: absolute;
    color: white;
    background-color: rgba(74,74,74, .6);
    width: 80px;
    height: 100px;
    right: 0;
    border-radius: 5px;

    &:hover{
    background-color: rgba(0,0,0,.5);
    }
  }

  .slick-next:before{
      width: 30px !important;
      height: 30px !important;
      font-size: 30px !important;
  }
  `;


  //소개 오른쪽
  const HotelContentRight = styled.div``;

