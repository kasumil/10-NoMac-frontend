import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Apiresource } from "../../Config";

function Signup(props, visible) { 
    const [ userInfo, setName ] = useState({email:"",password:"",name:""});

    const inputValuedetector = (e) => {
        const { name, value } = e.target
        setName({...userInfo, [ name ] : value});
        }; 

    const submit = () => {
        const {email, password, name } = userInfo
        fetch(`${Apiresource}/account/sign-up`, {
            method: 'POST',
            body: JSON.stringify({ email, password, name })
        })
        .then(res => res.json)
        .then(res => {
            if (res) {
                alert("회원가입을 환영합니다")
                props.history.push('/main')
            } else {
                alert('이메일과 비밀번호를 확인해주십시오')
            };
        })
    }

    const returnLogin = (e) => {
        props.history.push('/EmailLogin')
    }

    const returnSocialLogin = (e) => {
        props.history.push('/SocialLogin')
    }

    const returnMain = (e) => {
        props.history.push('/Main')
    }

    const isValidEmail = !userInfo.email.length || (userInfo.email.length && userInfo.email.includes("@"));
    
    return(
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
                          <div className="signupBody">
                            <div className="welcome">
                              바로 회원가입하기 - 무료입니다!
                            </div>
                            <label className="welcome label">
                              이메일 주소
                            </label>
                            <input onChange={inputValuedetector} 
                              className="email_input" 
                              type='text' 
                              name="email" 
                              placeholder="이메일" />
                            <label className="welcome label">
                              패스워드 생성하기
                            </label>
                            <input onChange={inputValuedetector} 
                              className="email_input" 
                              type='password' 
                              name="password" 
                              placeholder="비밀번호" />
                            <label className="welcome label">
                              닉네임 생성하기
                            </label>
                            <input onChange={inputValuedetector} 
                              className="email_input" 
                              type='text' 
                              name="name" 
                              placeholder="닉네임" />
                            <div onClick={submit} 
                                 className="logIntitle" 
                                 type="button">
                                 가입하기
                            </div>
                          </div>
                          <div className="passWordFindertitle">
                            이미 계정이 있으신가요?
                            <span onClick={returnLogin} 
                              className="passwordfinder">
                                로그인
                            </span>
                          </div>
                          <div className="passWordFindertitle">
                            대신 카카오톡이나 Google을 사용하고 싶으세요?
                            <span onClick={returnSocialLogin} 
                              className="passwordfinder">
                                돌아가기
                            </span>
                          </div>
                        </div>
                          <div className="inputboxTitle">
                            <input className="inputbot" type="checkbox"></input>
                              <label>
                                트립어드바이저의 여행 특가, 팁, 새로운 기능에 대한 정보 메일을 수신하겠습니다. 수신을 원치 않을 때는 해지할 수 있습니다.
                              </label>
                          </div>
                      </SignInput>
                      <div className={ isValidEmail
                                      ? 'noneinputError'
                                      : 'inputError'
                                    } >
                                    이메일 주소로써 유효하지 않거나 저희쪽에서 메일을 발송할 수 없는 문자열을 포함하고있습니다.
                      </div>
                  </div>
                  <button onClick={returnMain} 
                    className="returnmain" 
                    tabIndex="0">
                     X
                  </button>
              </ModalIner>
          </ModalWrapper>
        </>
    )
}

const ModalOverlay = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
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
    display: ${(props) => (props.visible ? 'block' : 'none')};
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
            font-family:굴림, gulim, sans-serif;
            font-size: 12px;
            border: 1px solid #e0e0e0;
            box-shadow: 0 2px 12px rgba(0,0,0,.35);
            padding: 18px;
            line-height: 16px;
            width: 316px;
            height: 68px;
            z-index: 5;
            left: 51px;
            right: auto;
            top: 113px;
            bottom: auto;;
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
    width:328px;
`;

const LoginImgtag = styled.img`
    width: 210px;
    height: 32px;
    margin-right: 20px;
`;

const SignInput = styled.div`
    .signupContainer {
        width: 100%;
        height: 440px;        

        .signupBody {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 362px;
            
            .welcome {
                color : black;
                font-size: 16px;
                font-family: '굴림, gulim, sans-serif';
                margin: 36px 0 25px;
            }

            .label {
                font-size: 14px;
                font-weight: 600;
                line-height: 18px;
                text-align: left;
                margin: 0;
            }

            .email_input {
                background-color: white;
                height: 48px;
                margin: 8px 0 16px;
                padding : 4px 4px 4px 8px;
                border: 2px solid #e0e0e0;
                border-radius: 12px;
            }

            .logIntitle {
                color : white;
                background: black;
                width: 100%;
                height: 48px;
                font-size: 14px;
                font-weight: 700;
                margin: 20px 0;
                padding: 14px 16px 8px;
                border-radius: 12px;
                border: 1px solid transparent;
                line-height: 18px;
                text-align : center;
        
                &:hover {
                    background: #525252;
                }
            }
        }

        .passWordFindertitle {
            margin-bottom: 12px;
            
            .passwordfinder {
                font-size: 12px;
                font-family: '굴림, gulim, sans-serif';
                font-weight: 600;
                color: black;
                line-height: 16px;
                margin-left: 5px;

                &:hover{
                  text-decoration: underline;
                }
            }
        }
    }
`;






export default withRouter(Signup);