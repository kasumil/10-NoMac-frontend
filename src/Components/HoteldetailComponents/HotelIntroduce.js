import React, { useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { RiParkingBoxLine, RiWifiLine, RiHandHeartLine } from "react-icons/ri";
import { FaHiking, FaBath, FaBaby } from "react-icons/fa";
import { FiCoffee, FiTv } from "react-icons/fi";
import { MdCardTravel, MdSmokeFree } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import { GiKnifeFork } from "react-icons/gi";
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

  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const Typefacilities =(el) => {
    const facilities = {
      "무료 주차" : <RiParkingBoxLine />,
      "무료 초고속 인터넷(Wi-Fi)": <RiWifiLine />,
      "온수 욕조": <FaBath />,
      "무료 조식": <FiCoffee />,
      "하이킹": <FaHiking/>,
      "베이비시팅": <FaBaby/>,
      "마사지":<RiHandHeartLine/>,
      "수하물 보관": <MdCardTravel/>
    }
    return (
      <div className="typeBox">
       {facilities[el]}
       <div className="marginLeft">{el}</div>
      </div>
    )
  };

  const Typeamenities =(el) => {
    const Amenities = {
      "목욕 가운" : <IoIosBed />,
      "벽난로" : <IoIosBed />,
      "하우스키핑" : <IoIosBed />,
      "옷장/벽장" : <IoIosBed />,
      "커피/티 메이커" : <FiCoffee />,
      "평면 TV" : <FiTv />,
      "소파 침대" : <IoIosBed />,
      "욕실/샤워실" : <FaBath />,
      "다리미" : <IoIosBed />,
      "전용 욕실" : <IoIosBed />,
      "모닝콜 서비스/알람 시계" : <IoIosBed />,
      "전자레인지" : <GiKnifeFork />,
      "냉장고" : <GiKnifeFork />,
      "전기 주전자" : <GiKnifeFork />,
      "DVD/CD 플레이어" : <FiTv />,
      "전기 담요" : <IoIosBed />,
      "무료 세면도구" : <FaBath />,
      "헤어드라이어" : <FaBath />
    }
    return (
      <div className="typeBox">
       {Amenities[el]}
       <div className="marginLeft">{el}</div>
      </div>
    )
  }

  const Typeroom =(el) => {
    const roomtypes = {
      "금연실": <MdSmokeFree />,
      "스위트": <IoIosBed />,
      "패밀리 룸": <IoIosBed />
    }
    return (
      <div className="typeBox">
       {roomtypes[el]}
       <div className="marginLeft">{el}</div>
      </div>
    )
  }

  return(
    <Flex>
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
                <ul className={moretext? "foldingMargin": "foldingMargin hidden"} >
                    {SplitMap.map((hotel) => {
                      return(
                        <li>{hotel}</li>
                      )})}
                </ul>
                <div className="foldBtn">
                  <div className={moretext? "btnHidden": "btnDisplay"} onClick={() => setMortext(true)}>더보기</div>
                  <div className={moretext? "btnDisplay": "btnHidden"} onClick={() => setMortext(false)}>덜 보기</div>
                </div>
              </FoldingContent>
              <MiniPicture>
                <CustomSlider {...settings}>
                  {hotel.image.map(hotel =>{
                    return (
                        <div>
                          <img className="smallBigimg" src={hotel} alt="" />
                        </div>
                    )})}
                  </CustomSlider>
                  <Overflow>
                    {hotel.image.map(hotel=>{
                      return(
                        <div>
                          <img className="verySmallimg" src={hotel} alt="" />
                        </div>
                      )
                    })}
                  </Overflow>
              </MiniPicture>
            </HotelContentLeft>
            <HotelContentRight>
              <HotelFistContainer>
                <div className="firstTitle">편의 시설</div>
                <Hotelfacilities>
                  <div className='elControl'>{hotel.facilities.map(e => Typefacilities(e))}</div>
                </Hotelfacilities>
              </HotelFistContainer>
              <div className="dummyBTN">더보기</div>
              <HotelSecondContainer>
                <div className="secondTitle">객실 특징</div>
                <Amanities>
                  <div className='elControl'>{hotel.amanities.map(e => Typeamenities(e))}</div>
                </Amanities>
              </HotelSecondContainer>
              <div className="dummyBTN">더보기</div>
              <HotelThirdContainer>
                <div className="thirdTitle">객실유형</div>
                <Roomtype>
                  <div className='elControl'>{hotel.roomtypes.map(e => Typeroom(e))}</div>
                </Roomtype>
              </HotelThirdContainer>
            </HotelContentRight>
          </HotelContent>
        </div>
      </HotelIntroduceDIV>
      <Ad>
        <div className="adCenter">
          <img className="adimg" src="/images/adImg.png" alt="광고창" />
        </div>
      </Ad>
    </Flex>
  )
}

export default withRouter(HotelIntroduce);

const Flex = styled.div`
  display: flex;
`;

const HotelIntroduceDIV = styled.div`
  max-width: 1280px;
  width: 814px;
  height: auto;
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
  /* height: 100%; */
  display : flex;
`;

//소개 왼쪽 
const HotelContentLeft = styled.div`
  width: 50%;
  /* height: auto; */
  padding: 0 23px 0 12px;
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
  height: auto;
  
  .foldingMargin{
    font-size: 16px;

    li{
      margin-bottom: 12px;
    }
  }

  .hidden {
    overflow: hidden;
    max-height: 175px;
  }

  .btnDisplay{
    display: block;
    cursor: pointer;
    width: 48px;
    border-bottom: 1px dotted #e0e0e0;
    margin-right: 4px;
    font-size: 14px;
    line-height: 18px;
    color: #474747;
    font-family: "Arial, Tahoma, Bitstream Vera Sans, sans-serif";
  }

  .btnHidden{
    display: none;
  }
`;

const MiniPicture = styled.div`
  width: 348px;
  position: absolute;
  cursor: pointer;

  .smallBigimg{
    width: 348px;
    height: 272px;
  }

  li{
    width:100%;
    height: 52px;
    display: flex;
    flex-wrap: wrap;
  }

`;

const CustomSlider = styled(Slider)`
  width: 348px;
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

const Overflow = styled.div`
  width: 350px;
  height: 52px;
  display: flex;
  overflow: hidden;

  .verySmallimg{
    width: 48px;
    height: 50px;
    margin: 1px;

    &:hover{
      opacity: 0.7;
    }
  }
`;


  //소개 오른쪽
const HotelContentRight = styled.div`
  height: auto;

  .dummyBTN {
    color: black;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    line-height: 18px;
    display: block;

    &:hover{
      text-decoration:underline;
    }
  }
`;

const HotelFistContainer = styled.div`
  width: 370px;
  height: 260px;

  .firstTitle{
    color: #2c2c2c;
    margin-bottom: 16px;
    padding-top: 20px;
    font-size: 16px;
    font-weight: 700;
    font-family: 'Arial,Tahoma,Bitstream Vera Sans,sans-serif';
  }
`;

const Hotelfacilities = styled.div`
  width: 370px;
  height: auto;
  
  .elControl {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    height: auto;
  }

  .typeBox{
    width: 185px;
    height: 36px;
    font-size: 17px;
    color: #474747;
    font-family: 'Arial,Tahoma,Bitstream Vera Sans,sans-serif';
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    
    svg{
      width: 30px;
      height: 26px;
    }
  
    .marginLeft{
      width: 100%;
      height: 100%;
      margin-left: 3px;
      line-height: 18px;
      display: flex;
      align-items: center;
    }
  }
`;


const HotelSecondContainer = styled.div`
  width: 100%;
  height: 255px;

  .secondTitle{
    color: black;
    margin: 20px 0 16px;
    padding: 20px 0 0;
    font-size: 16px;
    font-weight: 700;
    font-family: 'Arial,Tahoma,Bitstream Vera Sans,sans-serif';
  }

  .elControl {
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  height: auto;
  }

  .typeBox{
    width: 185px;
    height: 36px;
    font-size: 17px;
    color: #474747;
    font-family: 'Arial,Tahoma,Bitstream Vera Sans,sans-serif';
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    
    svg{
      width: 30px;
      height: 26px;
    }
  }
    .marginLeft{
      width: 100%;
      height: 100%;
      margin-left: 3px;
      line-height: 18px;
      display: flex;
      align-items: center;
    }
  `;

const Amanities = styled.div`
  width: 370px;
  height: 180px;  
`;
const Roomtype = styled.div`
  width: 370px;
  height: 180px; 
`;

const HotelThirdContainer = styled.div`
  .thirdTitle{
    color: black;
    margin: 20px 0 16px;
    padding: 20px 0 0;
    font-size: 16px;
    font-weight: 700;
    font-family: 'Arial,Tahoma,Bitstream Vera Sans,sans-serif';
  }

  .elControl {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    height: auto;
    }

  .typeBox{
    width: 185px;
    height: 36px;
    font-size: 17px;
    color: #474747;
    font-family: 'Arial,Tahoma,Bitstream Vera Sans,sans-serif';
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    
    svg{
      width: 30px;
      height: 26px;
    }
  }
    .marginLeft{
      width: 100%;
      height: 100%;
      margin-left: 3px;
      line-height: 18px;
      display: flex;
      align-items: center;
    }
`;


// 광고창 ad
const Ad =styled.div`
  width: 419px;
  height: 1014px;
  padding: 24px 12px 0 12px;

  .adCenter {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

    .adimg{
      width: 300px;
      height: 700px;
    }
  }
`;