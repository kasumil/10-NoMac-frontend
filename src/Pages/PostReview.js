import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Nav from "../Components/Nav";
import { hotelListUrl } from "../Config";
import styled from "styled-components";

const PostReview = () => {
  const [files, setFiles] = useState([]);
  const [hotel, setHotel] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [enabled, setEnabled] = useState(false);

  const onChangeHotel = (e) => {
    setHotel(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onFileUpload = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const file = e.target.files[0];
    setFiles([
      ...files,
      { fileId: id, fileName: file.name, uploadedFile: file },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();

    myHeaders.append("Authorization", localStorage.getItem("kakao-token"));

    const formdata = new FormData();
    formdata.append("file", files[0].uploadedFile);
    formdata.append("text", text);
    formdata.append("hotel", hotel);
    formdata.append("title", title);
    formdata.append("stars", "5");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
    };

    fetch(`${hotelListUrl}/review`, requestOptions);
  };

  useEffect(() => {
    setEnabled(!files.length ? false : true);
  }, [files]);

  return (
    <PostReviewWrap>
      <Nav />
      <p className="postTitle">방문한 장소 리뷰 작성하기</p>
      <BoardWrap>
        <p className="postInfoTitle">
          여행자님이 다녀오신 장소의 리뷰를 작성해주세요.
        </p>
        <form
          onSubmit={handleSubmit}
          className="uploadContainer"
          method="post"
          encType="multipart/form-data"
          name="file"
        >
          <div className="reviewImgWrap">
            <img
              className="reviewHotel"
              alt="hotel"
              src="/images/hawailhotel.jpg"
            />
            <div className="reviewCheck">
              <input type="checkbox" />
              <p>
                이 리뷰는 저의 경험을 바탕으로 작성한 이 호텔에 대한 진실된
                의견입니다. 저는 이 시설과 개인적 혹은 업무적인 관련이 없으며,
                이 리뷰를 작성하는 조건으로 해당 시설로부터 어떠한 금전적 또는
                물질적 대가를 제공받지 않았습니다. 저는 트립어드바이저가 조작된
                리뷰에 대하여 단호하게 대처한다는 방침을 견지하고 있음을 알고
                있습니다.
              </p>
            </div>
          </div>
          <div className="inputBoard">
            <div className="reHotel">
              <p>호텔 이름</p>
              <input
                className="inputHotel"
                type="text"
                onChange={onChangeHotel}
                name="hotel"
              />
            </div>
            <div className="revTitle">
              <p>리뷰 제목</p>
              <input
                className="inputTitle"
                type="text"
                onChange={onChangeTitle}
                name="title"
              />
            </div>
            <div className="revText">
              <p>리뷰 내용</p>
              <textarea
                className="inputText"
                type="content"
                onChange={onChangeText}
                name="text"
              />
            </div>
            <div className="revImg">
              <p>이미지 업로드</p>
              <input
                className="inputImage"
                onChange={onFileUpload}
                id={1}
                accept="image/jpeg video/mp4"
                type="file"
                name="file"
              />
            </div>
            {enabled ? (
              <button className="submitImage" type="submit" tabIndex="1">
                전송하기
              </button>
            ) : (
              <button
                className="submitImage"
                disabled
                type="submit"
                tabIndex="1"
              >
                전송하기
              </button>
            )}
            <Link to="/review">
              <button className="goToReview" tabIndex="1">
                피드이동
              </button>
            </Link>
            <img
              className="charLogo"
              alt="charactorLogo"
              src="/images/charlogo.png"
            />
          </div>
        </form>
      </BoardWrap>
    </PostReviewWrap>
  );
};

export default withRouter(PostReview);

const PostReviewWrap = styled.div`
  width: 100%;
  background-color: #f2f2f2;

  .postTitle {
    width: 1080px;
    margin: 40px auto 0;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    color: #2c2c2c;
  }
`;

const BoardWrap = styled.div`
  width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: flex-start;

  .postInfoTitle {
    margin: 30px 0 10px 0;
    font-size: 15px;
    font-weight: 700;
    color: #4f4e4a;
  }

  .uploadContainer {
    width: 1080px;
    height: 528px;
    margin: 0 auto 55px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-itmes: center;

    .reviewImgWrap {
      width: 450px;
      height: 528px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .reviewHotel {
        width: 450px;
        height: 300px;
        object-fit: cover;
      }

      .reviewCheck {
        width: 450px;
        height: 228px;
        padding: 30px 20px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        input {
          margin-right: 8px;
        }

        p {
          margin-top: -2px;
          line-height: 1.5em;
          text-align: justify;
          font-size: 12px;
          font-weight: 700;
          color: #2c2c2c;
        }
      }
    }

    .inputBoard {
      width: 630px;
      height: 528px;
      padding: 20px;
      position: relative;

      div {
        width: 630px;
        margin-bottom: 15px;

        p {
          margin-bottom: 4px;
          font-size: 14px;
          font-weight: 700;
          color: #2c2c2c;
        }

        input {
          width: 590px;
          padding: 10px;
          box-shadow: inset 0 1px 4px 0 rgba(50, 50, 50, 0.15);
          border: 1px solid #dbdad5;
          border-radius: 3px;
          font-size: 15px;
        }

        textarea {
          width: 590px;
          padding: 10px;
          box-shadow: inset 0 1px 4px 0 rgba(50, 50, 50, 0.15);
          border: 1px solid #dbdad5;
          border-radius: 3px;
          resize: none;
          outline: none;
          font-size: 15px;
        }

        .inputHotel {
          width: 300px;
        }

        .inputText {
          height: 120px;
        }
      }

      .submitImage {
        width: 90px;
        height: 36px;
        padding: 8px 16px;
        background-color: black;
        border-radius: 3px;
        color: white;
        font-size: 14px;
        font-weight: 700;

        &:hover {
          transition: 0.2s linear;
          background-color: #00aa6c;
        }
      }

      .goToReview {
        width: 90px;
        height: 36px;
        margin-left: 10px;
        padding: 8px 16px;
        background-color: black;
        border-radius: 3px;
        color: white;
        font-size: 14px;
        font-weight: 700;

        &:hover {
          transition: 0.2s linear;
          background-color: #00aa6c;
        }
      }
    }

    .charLogo {
      width: 150px;
      height: auto;
      position: absolute;
      bottom: 20px;
      right: 0;
    }
  }
`;
