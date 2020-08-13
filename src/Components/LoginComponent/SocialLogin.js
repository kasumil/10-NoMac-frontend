import React, { useState } from "react";
import styled from "styled-components";
import KakaoLogin from "react-kakao-login";
import { GoogleLogin } from "react-google-login";
import { withRouter } from "react-router-dom";
import { Apiresource } from "../../Config";
import { ClientId } from "../../Config";
import { Jskey } from "../../Config";

function SocialLogin(props, visible) { 
    const [ id, setId ] = useState('');
    const [ name, setName ] = useState('');


    // 구글 로그인
    const clickGoogleBtn = (res) => {
        fetch(`${Apiresource}/sign-in/google`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
              },
            body: JSON.stringify({
                email: res.profileObj.email,
                name: res.profileObj.name,
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res) {
                localStorage.setItem('kakao-token', res.token)
                alert('로그인을 환영합니다')
                props.history.push('/')
            } else {
                alert('아이디와 비밀번호를 확인해주세요.')
            }
        })
    }       

// 카카오 로그인
    const clickKakaoBtn = (res) => {
        fetch(`${Apiresource}/account/sign-in/kakao`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
              },
            body: JSON.stringify({
                access_token : res.response.access_token
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res.access_token) {
            localStorage.setItem('kakao-token', res.access_token)
            alert('로그인을 환영합니다')
            props.history.push('/')
        } else {
          alert("아이디와 비밀번호를 확인해주세요.");
        }
        })
    }

    const responseFail = (err) => {
            console.error(err)
        }; 


    return(
        <>
            <ModalOverlay visible={visible} />
            <ModalWrapper tabIndex="-1" visible={visible}>
                <ModalIner tabIndex="0">
                    <div>
                        <LoginImageContainer>
                            <LoginImgtag src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_registered.svg" />
                        </LoginImageContainer>
                        <LogInnput>
                            <LoginInputMargin>
                                <div className="centerMargin">
                                    <GoogleBtn
                                        clientId={`${ClientId}`}
                                        onSuccess={clickGoogleBtn}
                                        onFailure={responseFail}
                                        >    
                                        <Socialspan>Google로 계속하기</Socialspan>
                                    </GoogleBtn>
                                    <KakaoBtn 
                                        jsKey={`${Jskey}`}
                                        onSuccess={clickKakaoBtn}
                                        onFailure={responseFail}
                                        getProfile="true"
                                        >
                                        <SocialImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTI2AI6Bz3gkrH3VCq4azeIg-CXoxxvsar2Og&usqp=CAU" />
                                        <Socialspan>카카오톡 계정으로 계속하기</Socialspan>
                                    </KakaoBtn>
                                    <OR>
                                        <BorderLine>
                                            <Topspan>또는</Topspan>
                                        </BorderLine>
                                    </OR>
                                    <SocialBtn onClick={()=>props.setMode("email")}>
                                        <SocialImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvsq86NX1qN68M4GUeh5k8h6KM4pADF86mEw&usqp=CAU" />
                                        <Socialspan>
                                            이메일로&nbsp;계속하기
                                        </Socialspan>
                                    </SocialBtn>
                                </div>
                                <ContiNue>
                                    계속 진행할 경우, 트립어드바이저의 &nbsp;
                                    <span className="textDeco">개인정보 취급방침</span>
                                    &nbsp;및&nbsp;
                                    <span className="textDeco">쿠키 정책</span>
                                    에 동의한 것으로 간주됩니다. 
                                </ContiNue>
                            </LoginInputMargin>
                        </LogInnput>
                    </div>
                    <button onClick={props.closeModal} 
                        className="returnmain" 
                        tabIndex="0">
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

const LogInnput = styled.div`
  width: 329px;
  height: 467px;
`;

const LoginInputMargin = styled.div`
  width: 328px;
  height: 48px;

  .centerMargin {
    margin: 50px 0;
    position: relative;
  }
`;

const GoogleBtn = styled(GoogleLogin)`
  width: 328px !important;
  height: 48px !important;
  margin-bottom: 16px !important;
  border-radius: 12px !important;
  box-shadow: none !important;
  border: 2px solid rgba(0, 0, 0, 0.2) !important;
  color: black !important;
  background-color: "white" !important;
  display: flex !important;
  align-items: center !important;

  div {
    width: 20px;
    height: 20px;
    margin: 0 0 0 24px !important;
    padding: 0 !important;
  }

  span {
    padding: 0 !important;
  }
`;

const KakaoBtn = styled(KakaoLogin)`
  width: 328px;
  height: 48px;
  margin-bottom: 16px;
  border-radius: 12px;
  box-shadow: none;
  border: 2px solid rgba(0, 0, 0, 0.2);
  color: black;
  background-color: "white";
  display: flex;
  align-items: center;
`;

const SocialBtn = styled.div`
  width: 328px;
  height: 48px;
  margin-bottom: 16px;
  border-radius: 12px;
  box-shadow: none;
  border: 2px solid rgba(0, 0, 0, 0.2);
  color: black;
  background-color: "white";
  display: flex;
  align-items: center;
`;

const SocialImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 24px;
`;

const Socialspan = styled.span`
  color: black;
  width: auto;
  font-size: 14px;
  font-family: "굴림, gulim, sans-serif";
  margin: 0 12px 0 50px;
`;

const OR = styled.div`
  padding: 8px 0;
  text-align: center;
`;

const BorderLine = styled.div`
  border-top: 1px solid #e0e0e0;
  content: none;
  display: block;
`;

const Topspan = styled.span`
  position: relative;
  top: -8px;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  color: #8c8c8c;
  padding: 0 6px;
  background-color: white;
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
  }
`;

export default withRouter(SocialLogin);
