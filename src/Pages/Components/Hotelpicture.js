import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { FiCamera } from "react-icons/fi";

function Hotelpicture({idx, hotel}) {
  console.log(hotel)

  return(
    <>
      {/* 호텔 내용 */}
      <HotelPictures>
        <HotelPicturePadding>
          <LeftPicture>
            <BigPicture>
              <BigPictureInterior>
                <BigPictureImglistWrap>
                  {/* {hotel.image.map(el => { */}
                   <BigPictureImglist >
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/84/3b/93/mauna-kea-private-deck.jpg?w=900&h=-1&s=1" alt=""></img>
                   </BigPictureImglist>
                  {/* })} */}
                </BigPictureImglistWrap>
                {/* <ImgClickBtn>
                  <span className="hiddenFoldingPage">
                    전체보기
                  </span>
                </ImgClickBtn> */}
                <Picturetitle>
                  <FiCamera className='picture' />
                  <span className='pictureAll'>모든 사진 보기</span>
                  <span className='picturecount'>(숫자)</span>
                </Picturetitle>
              </BigPictureInterior>
            </BigPicture>
            <div className="miniPicture">
              <div className="miniImg">

              </div>
            </div>
          </LeftPicture>
        </HotelPicturePadding>              
      </HotelPictures>
    </>
  )
}

// 사진전체 사이즈
const HotelPictures = styled.div`
  width: 608px;
  height: 632px;
`;

//사진 전체 패딩
const HotelPicturePadding = styled.div`
  width: 100%;
  padding: 12px;
  border: 1px solid red;
`;

//사진 왼쪽
const LeftPicture = styled.div`
  width: 100%;
  height: 475px;
  display: flex;
  flex-direction: column;

  .miniPicture{
    width: 582px;
    height: 104px;
    border: 2px solid blue;
    margin: 1px -1px -1px -1px;
    .miniImg{
      width: 42px;
      height: 50px;
      background-image: url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e5/36/3f/pool.jpg?w=100&h=-1&s=1");
      background-size: cover;
      cursor: pointer;
      background-color: gray;
      background-position: 50%;

      &:hover {

      }
    }    
  }
`;

//사진 왼쪽 큰 사진
const BigPicture = styled.div`
  width: 100%;
  height: 380px;
`;

// 사진위에 있는 전체보기, 옆으로 이동버튼
const BigPictureInterior = styled.div`
  display: flex;
  position: absolute;
  width: 582px;
  height: 372px;
`;

// 사진 ul
const BigPictureImglistWrap =styled.ul`
  background-color: black;
  position: relative;
  list-style: none;
  width: auto;
`;

// 사진 li
const BigPictureImglist = styled.li`
  opacity: 1;
  position: absolute;
  
  img{
    width: 582px;
    height: 372px;
  }
`;

// const ImgClickBtn =styled.div`
//   .hiddenFoldingPage{}
// `;

//사진  위에 있는 타이틀
const Picturetitle = styled.div`
  font-size: 16px;
  bottom: 0;
  width: 100%;
  z-index: 5;
  padding: 16px 16px 8px 16px;
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
  
  .pictureAll{
    width: auto;
    height: auto;
    font-weight: 700;
    top: -2px;
  }

  .picturecount{
    width: auto;
    height: auto;
    font-size: 16px;
    top: -2px;
  }
`;




// 아직 안한 미니 사진들...

export default withRouter(Hotelpicture);