import React, { useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

function HotelIntroduce({idx,hotel}) {
  const [ savepoint , setSavepoint ] = useState(idx.hotel)

  return(
    <>
      <HotelIntroduceDIV>
        <HotelBox>
          <IntroduceTitle>
            <h2 className="Introduce">소개</h2>
          </IntroduceTitle>
          <HotelContent>
            <HotelContentLeft>
              <ReviewPoint>
                <ReviewNumber></ReviewNumber>
                <Link to="null" className="Reviews">
                  <ReviewGood>좋음</ReviewGood>
                  <ReviewNumberConverter>4.0</ReviewNumberConverter>
                  <ReviweAccount>1445건의 리뷰</ReviweAccount>
                </Link>
              </ReviewPoint>
              <Pointlocation>
                <span className="" 포인트 />
                <div className="">장소</div>
              </Pointlocation>
              <PointClean>
                <span className="" 포인트 />
                <div className="">청결도</div>
              </PointClean>
              <PointService>
                <span className="" 포인트 />
                <div className="">서비스</div>
              </PointService>
              <PointPrice>
                <span className="" 포인트 />
                <div className="">가격</div>
              </PointPrice>
              <FoldingContent>
                <div className="foldingMargin">
                  {/* 맵을 돌려야함. */}
                  <p>나닐로아 볼카노에스 리조트에 오신 것을 환영합니다! 여러분의 "제 2의 집"인 힐로 리조트에서는 여러분의 시간이 집처럼 편안하도록 다양한 부대시설을 제공합니다.</p>
                </div>
                <div className="unfoldBtn">
                  <span className="unfoldSpan">더보기</span>
                  <img className="unfoldImg" src="" alt="" />
                </div>
                <div className="foldingBtn">
                  <span className="foldSpan">덜 보기</span>
                  <img className="foldBtn" src="" alt="" />
                </div>
              </FoldingContent>
              <MiniPicture>
                {/* 맵을 돌려야함 미니 이미지*/}
                {/* 여긴 일단 중지. */}
              </MiniPicture>
            </HotelContentLeft>
            <HotelContentRight></HotelContentRight>
          </HotelContent>
        </HotelBox>
      </HotelIntroduceDIV>
    </>
  )
}

const HotelIntroduceDIV = styled.div``;
const HotelBox = styled.div``;
const IntroduceTitle = styled.div`
  .Introduce{

  }
`;
const HotelContent = styled.div``;

//소개 왼쪽 
const HotelContentLeft = styled.div``;
const ReviewPoint = styled.div`
  .Reviews{

  }
`;
const ReviewNumber = styled.span``;
const ReviewGood = styled.div``;
const ReviewNumberConverter = styled.span``;
const ReviweAccount = styled.span``;
const Pointlocation = styled.div``;
const PointClean = styled.div``;
const PointService = styled.div``;
const PointPrice = styled.div``;
const FoldingContent = styled.div`
  .foldingMargin{}
  .unfoldBtn{
    .unfoldSpan{}
    .unfoldImg{}
  }
  .foldingBtn{
    .foldSpan{}
    .foldBtn{}
  }
`;
const MiniPicture = styled.div``;


//소개 오른쪽
const HotelContentRight = styled.div``;

export default withRouter(HotelIntroduce);