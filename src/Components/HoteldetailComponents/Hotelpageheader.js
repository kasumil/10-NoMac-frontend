import React, { useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { IoMdPin } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShare } from "react-icons/fi";
import { BsFillHeartFill } from "react-icons/bs";


function Hotelpageheader({idx, hotel}) {
  const [ savePoint , setSavepoint ] = useState(idx.hotel);
  const [ onMouse, setOnMouse ] = useState( false );

  const { kind } = hotel.hotel_rating
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

  return(
    <>
      <HotelpageheaderDIV>
        {/* 비용절약 광고창탭 */}
        <HeaderBanner>
          <SavePricetitle>
            <Reducead>
              <ReduceADimgWrap> 
                <div className="wrap">
                  <ReduceADimg src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal.svg" />
                </div>
                <ReduceADdescription>
                  <span><b>비용을 절약하세요.</b>트립어드바이저는 호텔 최저가를 찾기 위해 200개 이상의 사이트를 비교합니다.</span>
                </ReduceADdescription>
              </ReduceADimgWrap>
            </Reducead>
          </SavePricetitle>
        </HeaderBanner>
        {/* 여기부터 호텔 이름 */}
        <HotelpageName>
          <HotelpageSubtitleHigh>
              <h1 className="hotelpageSubBigtitle">{hotel.name}
                <div className="hotelpageSubEnglishtitle">
                  {hotel.english_name}
                </div>
              </h1>
          </HotelpageSubtitleHigh> 
          <ReviwPoint>
            <Link to="null">
              <span className="rate">
                {circleReturn(hotel.hotel_rating)}
              </span>
              <span className="marginleft">
                {hotel.review_count_msg}
              </span>
            </Link>
          </ReviwPoint>
        </HotelpageName>
        <HotelpageSubtileUnder>
          <HotelPageSpace>
            <HotelPageSubtitleUnderLeft>
              <div>
                <Locationbarwrap>
                  <IoMdPin className="locationImg" />
                  <span className="locationName">
                    {hotel.address}
                  </span>
                </Locationbarwrap>
              </div>
            </HotelPageSubtitleUnderLeft>
            <HotelPageSubtitleUnderRight>
              <HeartSave onMouseEnter={() => setOnMouse(true)} onMouseLeave={() => setOnMouse(false)}>
                {onMouse 
                        ? <BsFillHeartFill className="redheart" />
                        : <IoMdHeartEmpty className="heart" />}
                <div className="save">저장</div>
              </HeartSave>
              <div className="shareBoxMargin">
                <div className="sharebox">
                  <FiShare className="shareImg" />
                  <span className="share">
                    공유
                  </span>
                </div>
              </div>
            </HotelPageSubtitleUnderRight>
          </HotelPageSpace>
        </HotelpageSubtileUnder>
      </HotelpageheaderDIV>
    </>
  )
}

// 호텔 헤더
const HotelpageheaderDIV = styled.div`
  max-width:1280px;
  width: 100%;
  height: 284px;
  padding: 0 24px;
  margin: 0 auto;
`;

const HeaderBanner = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
`;

const SavePricetitle = styled.div`
  width: 100%;
  margin: 0;
  padding: 5px 0;
`;

const Reducead = styled.div`
  width: 970px;
  height: 66px;
  padding: 16px 0;
  margin: 12px auto 0;
  align-items: center;
  background-color: #faf1ed;
`;

const ReduceADimgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  height: 100%;

  .wrap {
    width: 232px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ReduceADimg = styled.img`
  width: 164px;
  padding: 0 12px 0 0;
  top: 3px;
`;

const ReduceADdescription = styled.div`
  width: 76%;
  height: 49px;
  font-size: 18px;
  padding: 0 15px;
  border-left: 1px solid white;
  text-align: left;
`;

// 호텔헤더 이름
const HotelpageName = styled.div`
  width: 100%;
  height: 107px;
  padding: 12px 12px 0;
  flex:none;
`;

const HotelpageSubtitleHigh = styled.div`
  width: 100%;
  height: 71px;

  .hotelpageSubBigtitle {
    width: 800px;
    height: 71px;
    font-size: 32px;
    line-height: 36px;
    font-weight: 700;
    color: black;
    font-family: 'Arial,Tahoma,Bitstream Vera Sans,sans-serif';
    margin: 0;
  }

  .hotelpageSubEnglishtitle {
    width: 100%;
    height: 35px;
    font-size: 32px;
    line-height: 36px;
    font-weight: 700;
    color: black;
    font-family: 'Arial,Tahoma,Bitstream Vera Sans,sans-serif';
  }
`;

const ReviwPoint = styled.div`
  width: 100%;
  height: 30px;
  margin: 4px 0 0;
  display: flex;

  .rate{
    width: 80px;
    height: 20px;
    font-size: 30px;
    color: green;
  }

  .marginleft{
    width: 95px;
    height: 30px;
    font-size: 14px;
    color: #474747;
    font-family: "Arial,Tahoma,Bitstream Vera Sans,sans-serif";
    margin : 0 0 0 5px;
  }

`;

const HotelpageSubtileUnder = styled.div`
  width: 100%;
  height: 38px;
  padding: 0 12px 12px;
`;

// 저장,공유, 호텔방문 flex먹인 곳.
const HotelPageSpace = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HotelPageSubtitleUnderRight = styled.div`
  width: 128px;
  height: 22px;
  color: black;
  display: flex;
  flex-wrap: wrap;

  /* 공유박스 */
  .shareBoxMargin{
    width: 64px;
    height: 22px;
    margin-left: 8px;
    padding-left: 8px;
    border-left: 1px solid #e0e0e0;

    .sharebox {
      width: 56px;
      height: 22px;
      display: flex;
      align-items: center;

      .shareImg{
        width: 20px;
        height: 20px;
      }
      .share{
        width: 36px;
        height: 20px;
        padding-left: 4px;
        font-size: 16px;
        font-family:Arial, Tahoma, "Bitstream Vera Sans", sans-serif;
      }
    }
  }
`;

// 하트,저장 부분
const HeartSave = styled.div`
  width: 55px;
  height: 20px;
  cursor: pointer;
  display: flex;
  justify-items: space-between;

  .heart {
    width: 20px;
    height: 20px;
  }

  .redheart {
    width: 20px;
    height: 20px;
    color: red;
  }

  .save{
    width: 34px;
    font-size: 16px;
    font-family:Arial, Tahoma, "Bitstream Vera Sans", sans-serif;
    height: 20px;
    margin-left: 4px;

    &:hover {
      text-decoration:underline;
    }
  }
`;


const HotelPageSubtitleUnderLeft = styled.div`
  display: flex;
`;

const Locationbarwrap = styled.div`
  width: auto;
  height: 25px;
  display: flex;
  align-items: center;

  .locationImg {
    width: 18px;
    height: 18px;
  }

  .locationName{
    width: auto;
    height: 17px;
    font-size: 14px;
    font-weight: 400;
    color: #474747;
    border-bottom: 1px dotted #e0e0e0;
    text-decoration: none;

    &:hover{
      text-decoration: underline;
    }
  }
`;



export default withRouter(Hotelpageheader);
