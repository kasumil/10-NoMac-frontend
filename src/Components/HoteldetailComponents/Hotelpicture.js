import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { FiCamera } from "react-icons/fi";
import { FaBed, FaRegComments } from "react-icons/fa";
import { GiMountaintop, GiKnifeFork } from "react-icons/gi";
import { BsArrowsAngleExpand } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hotelpicture({idx, hotel}) {
  const [ mouse, setMouse ] = useState(false);
  const [sliderIndex,setSliderIndex] = useState(0)
  
  const pictureBundle =() => {
    idx.history.push("")
  }

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
 }

  return(
    <>
      {/* 호텔 내용 */}
      <HotelPictures>
        <HotelPicturePadding>
          <LeftPicture>
            <BigPicture>
              <BigPictureInterior
                onMouseEnter={() => setMouse(true)}
                onMouseLeave={() => setMouse(false)}
              >
                <BigPictureImglistWrap>
                  <BigPictureImglist>
                    <CustomSlider {...settings}>
                      {hotel.image.map(hotel => {
                        return(
                          <div>
                          <img alt="" src={hotel}/>
                          </div>
                        )
                      })}
                    </CustomSlider>
                  </BigPictureImglist>
                </BigPictureImglistWrap>
                <DisplayButton onMouse={mouse} onClick={pictureBundle}>
                    <BsArrowsAngleExpand className="margin"/>
                    전체보기
                </DisplayButton>
                <Picturetitle>
                  <FiCamera className='picture' />
                  <PictureAll>모든 사진 보기
                    <Picturecount>(20)</Picturecount>
                  </PictureAll>
                </Picturetitle>
              </BigPictureInterior>
            </BigPicture>
          </LeftPicture>
          <PictureColumn>
            <HighBox bgImg={hotel.image[1]}>
              <GiMountaintop className="position"/>
              <PositionName>주변 환경사진</PositionName>
            </HighBox>
            <UnderBox bgImg={hotel.image[4]}>
              <FaBed className="position"/>
              <PositionName>객실 및 스위트</PositionName>
            </UnderBox>
          </PictureColumn>
          <div className="rightColumn">
            <RightHighBox bgImg={hotel.image[5]}>
              <FaRegComments className="position"/>
              <PositionName>라운지</PositionName>
            </RightHighBox>
            {/* 언더박스는 사진모음 */}
            <RightUnderBox bgImg={hotel.image[6]}>
              <GiKnifeFork className="position"/>
              <PositionName>식사</PositionName>
            </RightUnderBox>
          </div>
        </HotelPicturePadding>              
      </HotelPictures>
     
    </>
  )
}


// 사진전체 사이즈
const HotelPictures = styled.div`
  width: 1280px;
  height: 501px;
`;

//사진 전체 패딩
const HotelPicturePadding = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: wrap;

  .rightColumn{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5px;
    cursor:pointer;
  }
`;

//우측 주변환경사진, 객실및 스위트 컬럼
const PictureColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor:pointer;
`;

//우측 주변 환경사진
const HighBox = styled.div`
  width : 330px;
  height: 235px;
  background-color: #e0e0e0;
  font-size: 16px;
  opacity: 0.6;
  font-weight: 700;
  text-shadow: -1px 0 #000,
	              0 1px #000,
	              1px 0 #000,
	              0 -1px #000;
  background-image: url(${props => props.bgImg });
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;


  &:hover{
    opacity: 0.7;
  }

  .position {
    width: 36px;
    height: 36px;
  }
`;

// 우측 4개 사진의 내부 글자
const PositionName = styled.span`
  height: 32px;
`;

// 우측 객실 및 스위트 부분
const UnderBox =styled.div`
  width : 330px;
  height: 235px;
  background-color: #e0e0e0;
  font-size: 16px;
  opacity: 0.6;
  font-weight: 700;
  text-shadow: -1px 0 #000,
	              0 1px #000,
	              1px 0 #000,
	              0 -1px #000;
  background-image: url(${props => props.bgImg });
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;

  &:hover{
    opacity: 0.7;
  }

  .position {
    width: 36px;
    height: 36px;
  }
`;

// 우측 라운지 부분
const RightHighBox = styled.div`
  width : 330px;
  height: 235px;
  background-color: #e0e0e0;
  font-size: 16px;
  opacity: 0.6;
  font-weight: 700;
  text-shadow: -1px 0 #000,
	              0 1px #000,
	              1px 0 #000,
	              0 -1px #000;
  background-image: url(${props => props.bgImg });
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  
  &:hover{
    opacity: 0.7;
  }

  .position {
    width: 36px;
    height: 36px;
  }
`;

// 우측 식사 부분
const RightUnderBox = styled.div`
  width : 330px;
  height: 235px;
  background-color: #e0e0e0;
  font-size: 16px;
  opacity: 0.6;
  font-weight: 700;
  text-shadow: -1px 0 #000,
	              0 1px #000,
	              1px 0 #000,
	              0 -1px #000;
  background-image: url(${props => props.bgImg });
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;

  &:hover{
    opacity: 0.7;
  }

  .position {
    width: 36px;
    height: 36px;
  }
`;


//사진 왼쪽 wrap
const LeftPicture = styled.div`
  margin-right: 5px;
  width: 582px;
  height: 475px;
`;

//사진 왼쪽 큰 사진
const BigPicture = styled.div`
  width: 582px;
  height: 380px;
`;

// 사진위에 있는 전체보기, 옆으로 이동버튼
const BigPictureInterior = styled.div`
  position: absolute;
  width: 582px;
  height: 474px;
`;


const DisplayButton = styled.div`
  display: ${props => props.onMouse ? "flex" : "none"};
  width: 148px;
  height: 60px;
  font-size: 20px;
  top: 210px;
  left: 220px;
  padding: 0 18px;
  position: absolute;
  color : white;
  align-items: center;
  justify-content: center;
  background-color: rgba(74,74,74, .6);

  &:hover{
  background-color: rgba(0,0,0,.5);
  }

  .margin{
    margin-right: 5px;
  }
`;

// 사진 div
const BigPictureImglistWrap =styled.div`
  background-color: black;
  list-style: none;
  width: auto;
`;

// 사진 ul
const BigPictureImglist = styled.ul`
  opacity: 1;
  position: relative;

  &:hover{
      opacity: 0.8;
    }
    
`;

// 슬라이더 부분
const CustomSlider = styled(Slider)`
  width: 582px;
  height: 100%;

  .slick-disabled {
    display: none !important;
    }

  img{
    width: 582px;
    height: 472px;
  }

  .slick-prev {
    position: absolute;
    color: white;
    background-color: rgba(74,74,74, .6);
    width: 80px;
    height: 100px;
    left: 0;
    top: 240px;
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
    top: 240px;
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
`

//사진  위에 있는 타이틀
const Picturetitle = styled.div`
  font-size: 16px;
  bottom: 0;
  width: 100%;
  z-index: 5;
  padding: 16px 16px 8px 16px;
  font-weight: 400;
  font-family: 'Arial, Tahoma, "Bitstream Vera Sans", sans-serif';
  display: flex;
  align-items: center;
  text-align: left;
  color: white;
  position: absolute;

  .picture {
    width: 32px;
    height: 36px;
    margin-right: 10px;
  }
`;

const PictureAll =styled.span`
  width: auto;
  height: auto;
  font-weight: 700;
  top: -2px;

  &:hover {
    text-decoration: underline;
  }
`;

const Picturecount = styled.span`
  width: auto;
  height: auto;
  font-size: 16px;
  top: -2px;
`;


export default withRouter(Hotelpicture);