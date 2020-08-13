import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { hotelListUrl } from "../../Config.js";

function EmailLogin(props, visible) {
  const [userInfo, setName] = useState({ email: "", password: "" });

  const inputValuedetector = (e) => {
    const { name, value } = e.target;
    setName({ ...userInfo, [name]: value });
  };

  const submit = () => {
    const { email, password } = userInfo;
    fetch(`${hotelListUrl}/account/sign-in`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          localStorage.setItem("tripadvisor-token", res.token);
          alert("로그인을 환영합니다");
          props.history.push("/");
        } else {
          alert("이메일과 비밀번호를 확인해주십시오");
        }
      });
  };

  const isValidEmail =
    !userInfo.email.length ||
    (userInfo.email.length && userInfo.email.includes("@"));

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper tabIndex="-1" visible={visible}>
        <ModalIner tabIndex="0">
          <div className="modalOutline">
            <LoginImageContainer>
              <LoginImgtag src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_registered.svg" />
            </LoginImageContainer>
            <SignInput>
              <div className="signupContainer">
                <div className="welcome">환영합니다 - 로그인하세요!</div>
                <label className="welcome label">이메일 주소</label>
                <input
                  onChange={inputValuedetector}
                  className="inputValue"
                  type="text"
                  name="email"
                  placeholder="이메일"
                />
                <label className="welcome label">패스워드</label>
                <input
                  onChange={inputValuedetector}
                  className="inputValue"
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                />
                <div
                  onClick={submit}
                  className="inputValue logIntitle"
                  type="buttton"
                >
                  로그인
                </div>
                <div className="passWordFindertitle">
                  <span className="passwordfinder">패스워드 찾기</span>
                </div>
                <div className="passWordFindertitle">
                  계정이 없으신가요?
                  <span
                    onClick={() => props.setMode("signup")}
                    className="passwordfinder"
                  >
                    가입하기
                  </span>
                </div>
                <div className="passWordFindertitle">
                  대신 카카오톡이나 Google을 사용하고 싶으세요?
                  <span
                    onClick={() => props.setMode("social")}
                    className="passwordfinder"
                  >
                    돌아가기
                  </span>
                </div>
              </div>
              <ContiNue>
                계속 진행할 경우, 트립어드바이저의
                <span className="textDeco">개인정보 취급방침</span>및
                <span className="textDeco Cookie">쿠키 정책</span>에 동의한
                것으로 간주됩니다.
              </ContiNue>
            </SignInput>
            <div className={isValidEmail ? "noneinputError" : "inputError"}>
              이메일 주소로써 유효하지 않거나 저희쪽에서 메일을 발송할 수 없는
              문자열을 포함하고있습니다.
            </div>
          </div>
          <button
            onClick={props.closeModal}
            className="returnmain"
            tabIndex="0"
          >
            X
          </button>
        </ModalIner>
      </ModalWrapper>
    </>
  );
}

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalIner = styled.div`
  width: 420px;
  height: 666px;
  padding: 40px 45px 30px;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: white;
  .modalOutline {
    width: 100%;
    .inputError {
      position: absolute;
      display: block;
      color: red;
      background-color: white;
      font-family: 굴림, gulim, sans-serif;
      font-size: 12px;
      border: 1px solid #e0e0e0;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
      padding: 18px;
      line-height: 16px;
      width: 316px;
      height: 68px;
      z-index: 5;
      left: 51px;
      right: auto;
      top: 113px;
      bottom: auto;
    }
    .noneinputError {
      display: none;
      color: white;
    }
  }
  .returnmain {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    text-align: center;
    width: 48px;
    height: 48px;
    font-size: 25px;
    cursor: pointer;
  }
`;

const LoginImageContainer = styled.div`
  width: 328px;
`;

const LoginImgtag = styled.img`
  width: 210px;
  height: 32px;
  margin-right: 20px;
`;

const SignInput = styled.div`
  .signupContainer {
    width: 328px;
    height: 440px;
    display: flex;
    flex-direction: column;
    .welcome {
      color: black;
      font-size: 16px;
      font-family: "굴림, gulim, sans-serif";
      margin: 36px 0 25px;
    }
    .label {
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
      text-align: left;
      margin: 0;
    }
    .inputValue {
      background-color: white;
      height: 48px;
      margin: 8px 0 16px;
      padding: 4px 4px 4px 8px;
      border: 2px solid #e0e0e0;
      border-radius: 12px;
    }
    .logIntitle {
      color: white;
      background: black;
      width: 100%;
      font-size: 14px;
      font-weight: 700;
      margin: 20px 0;
      padding: 14px 16px 8px;
      border: 1px solid transparent;
      line-height: 18px;
      text-align: center;
      &:hover {
        background: #525252;
      }
    }
    .passWordFindertitle {
      margin-bottom: 12px;
      .passwordfinder {
        font-size: 12px;
        font-family: "굴림, gulim, sans-serif";
        font-weight: 600;
        color: black;
        line-height: 16px;
        margin-left: 5px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const ContiNue = styled.div`
  width: 328px;
  height: 32px;
  font-size: 12px;
  font-family: "굴림, gulim, sans-serif";
  .textDeco {
    text-decoration: underline;
    color: black;
    text-decoration-style: solid;
    font-weight: 600;
    line-height: 16px;
    margin: 0 5px;
  }
  .Cookie {
    margin: 0 0 0 5px;
  }
`;

export default withRouter(EmailLogin);
