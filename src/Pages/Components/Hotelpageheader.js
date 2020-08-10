import React, { useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { IoMdPin } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShare } from "react-icons/fi";
import { BsFillHeartFill } from "react-icons/bs";
import { GrPhone } from "react-icons/gr";
import { RiEarthLine } from "react-icons/ri";
import { BsArrowUpRight } from "react-icons/bs";


function Hotelpageheader({idx, hotel}) {
  const [ savePoint , setSavepoint ] = useState(idx.hotel)
  const [ onMouse, setOnMouse ] = useState( false )


  // const rateAccount(data.rate) {
  //   if ( data.rate > 1  ) {
  //       1;
  //     }
  //     if( data.rate > 2) {
  //       2;
  //     }
  //     if ( data.rate > 3) {
  //       3;
  //     }
  //     if ( data.rate > 4 ){
  //       4;
  //     }
  //     if (data.rate> 5) {
  //       5;
  //     }
  //   )
  // }

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
              <h1 className="hotelpageSubBigtitle">나닐로아 볼카노에스 리조트
                <div className="hotelpageSubEnglishtitle">
                  Grand Naniloa Hotel Hilo - a DoubleTree by Hilton
                </div>
              </h1>
          </HotelpageSubtitleHigh> 
          <ReviwPoint>
            <Link to="null">
              <span className="rate">
                {/* {data.rate} */}
              </span>
              <span className="marginleft">
                1,445건의 리뷰
              </span>
            </Link>
            <div className="reviewRank">
              <span className="normaltext">
                <b className="fontweight">
                  5위
                </b>
                (7곳의 
                <Link className="linktext" to="null">
                  힐로 소재 호텔 중
                </Link>)
              </span>
            </div>
          </ReviwPoint>
        </HotelpageName>
        <HotelpageSubtileUnder>
          <HotelPageSpace>
            <HotelPageSubtitleUnderLeft>
              <div>
                <Locationbarwrap>
                  <IoMdPin className="locationImg" />
                  <span className="locationName">
                    93 Banyan Dr, 힐로 하와이 섬, HI
                  </span>
                </Locationbarwrap>
              </div>
              <PhoneNumberLink>
                <Link className="phonelinkWrap" to="null">
                  <GrPhone className="phoneImg" />
                  <span className="phoneNumber">
                    +1 855-605-0318
                  </span>
                </Link>
              </PhoneNumberLink>
              <HotelLinkBar>
                <Link className="hotelLink" to="null">
                  <RiEarthLine className="earthImg" />
                  <span className="textLink">
                    호텔 웹사이트 방문
                  </span>
                  <BsArrowUpRight className="clickImg" />
                </Link>
              </HotelLinkBar>
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
  height: 20px;
  margin: 4px 0 0;
  display: flex;

  .rate{
    width: 80px;
    height: 16px;

    .rate .rateradio + label {
    position: relative;
    display: inline-block;
    margin-left: -4px;
    z-index: 10;
    width: 60px;
    height: 60px;
    background-image: url('https://e7.pngegg.com/pngimages/178/1004/png-clipart-circle-computer-icons-circulo-monochrome-geometric-shape.png');
    background-repeat: no-repeat;
    background-size: 60px 60px;
    cursor: pointer;
    background-color: #f0f0f0;
    }

    .rate .rateradio:checked + label {
    background-color: #ff8;
    }
  }

  .marginleft{
    width: 95px;
    height: 15px;
    font-size: 14px;
    color: #474747;
    font-family: "Arial,Tahoma,Bitstream Vera Sans,sans-serif";
    margin : 0 0 0 5px;
  }

  .reviewRank {
    width: 205px;
    height: 18px;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid grey;

    .normaltext{
      color: #474747;
      width: 100%;
      font-size: 14px;
      line-height: 18px;
      font-family: "Arial,Tahoma,Bitstream Vera Sans,sans-serif";

      .fontweight{
        font-weight: 400;
      }

      .linktext{
        color: #474747;
        width: 110px;
        height: 16px;
        line-height:18px;
        font-size: 14px;
        font-family: "Arial,Tahoma,Bitstream Vera Sans,sans-serif";

        &:hover {
          text-decoration:underline;
        }
      }
    }
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
  width: 230px;
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

const PhoneNumberLink = styled.div`
  width: 150px;;
  height: 26px;
  margin-left: 12px;
  border-left: 1px solid #e0e0e0; 
  display: flex;
  align-items: center;


  .phonelinkWrap{
    display: flex;
    align-items: center;

    .phoneImg{
      width: 18px;
      height: 18px;
      margin-right: 6px;
      margin-left: 12px;
    }

    .phoneNumber{
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
  }
`;

const HotelLinkBar = styled.div`
  width: 175px;
  height: 26px;
  margin-left: 12px;
  border-left: 1px solid #e0e0e0; 

  .hotelLink{
    display: flex;
    align-items: center;

    .earthImg{
      width: 18px;
      height: 18px;
      margin: 0 6px;
    }
    .textLink{
      font-size: 14px;
      font-weight: 700;
      line-height: 18px;
      font-family:'Arial, Tahoma, "Bitstream Vera Sans", sans-serif';

      &:hover{
        text-decoration: underline;
      }
    }
    .clickImg{
      width: 14px;
      height: 13.5px;
    }
  }
`;

export default withRouter(Hotelpageheader);
