import React from "react";
import { withRouter } from "react-router-dom";
import LikeBtn from "./LikeBtn.js";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SelSlide = ({ data }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 3,
  };

  const { place, imgUrl } = data;

  const sliderData = place.map((p, index) => {
    return {
      place: p,
      imgUrl: imgUrl[index],
    };
  });

  return (
    <SlideContainer>
      <div className="slideCaption">
        <p className="slideTitle">{data.menu}</p>
        <p className="slideDes">{data.info}</p>
        <button className="showMore">모두 보기</button>
      </div>
      <div className="slideWrap">
        <Slider {...settings}>
          {sliderData.map((slide, idx) => (
            <div className="slideContents" key={idx}>
              <LikeBtn />
              <img alt="test" src={slide.imgUrl} />
              <p>
                <span>{slide.place}</span>
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </SlideContainer>
  );
};

export default withRouter(SelSlide);

const SlideContainer = styled.div`
  width: 1280px;
  height: 284px;
  margin: 64px 0 80px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 300px;
    height: 199px;
    object-fit: cover;
  }

  .slideCaption {
    width: 326px;
    height: 284px;
    padding-right: 32px;

    .slideTitle {
      width: 294px;
      height: 38px;
      margin-bottom: 16px;
      font-size: 32px;
      font-weight: 900;
    }

    .slideDes {
      width: 294px;
      height: 42px;
      margin-bottom: 16px;
      font-size: 18px;
      font-weight: 400;
    }

    .showMore {
      width: 294px;
      height: 18px;
      text-align: left;
      font-size: 14px;
      font-weight: 700;
    }
  }

  .slideWrap {
    width: 930px;
    height: 284px;

    div {
      width: 300px;
      height: 284px;
      padding-bottom: 16px;
      position: relative;
    }

    .slick-prev,
    .slick-next {
      width: 40px;
      height: 40px;
      padding-right: 50px;
      position: absolute;
      top: 36.5%;
      line-height: 0;
      outline: none;
      cursor: pointer;
      display: flex;

      :before {
        content: none;
        border-radius: 100%;
      }
    }

    .slick-prev {
      background: url(/images/leftbtn.png) no-repeat;
      background-size: contain;
    }

    .slick-next {
      left: 904px;
      background: url(/images/rightbtn.png) no-repeat;
      background-size: contain;
    }

    .slick-list {
      width: 930px;
      overflow: hidden;
      z-index: -1;
    }

    p {
      width: 300px;
      height: 60px;
      position: absolute;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      span:nth-child(1) {
        font-size: 18px;
        font-weight: 700;
      }

      span:nth-child(2) {
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
`;
