import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { mainData } from "../MockData/MainData";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import SocialLogin from "../Components/LoginComponent/SocialLogin";
import EmailLogin from "../Components/LoginComponent/EmailLogin";
import SignUp from "../Components/LoginComponent/Signup";

const Nav = ({ display }) => {
  const [toggle, setToggle] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(mainData.searchData);
  const excludeColumns = ["id", "imgUrl"];
  const [isLoginModalOn, setIsLoginModalOn] = useState(false);
  const [loginMode, setLoginMode] = useState("social");

  const onToggle = () => {
    setToggle(toggle === false ? true : false);
  };

  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (!lowercasedValue) {
      setData(mainData.searchData);
    } else {
      const filteredData = mainData.searchData.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  const useScroll = () => {
    const [scroll, setScroll] = useState(0);

    const onScroll = () => {
      setScroll(window.scrollY);
    };

    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return scroll;
  };

  const openLoginHadler = () => {
    setIsLoginModalOn(true);
  };

  const closeModal = () => {
    setIsLoginModalOn(false);
    setLoginMode("social");
  };

  const modalHandler = (mode) => {
    switch (mode) {
      case "social":
        return <SocialLogin setMode={setLoginMode} closeModal={closeModal} />;
      case "email":
        return <EmailLogin setMode={setLoginMode} closeModal={closeModal} />;
      case "signup":
        return <SignUp setMode={setLoginMode} closeModal={closeModal} />;
      default:
        return <SocialLogin setMode={setLoginMode} closeModal={closeModal} />;
    }
  };

  return (
    <NavContainer>
      <div
        className="toggleNav"
        onFocus={onToggle}
        onBlur={onToggle}
        display={display}
      >
        <div></div>
      </div>
      <NavWrap>
        <LogoWrap>
          <Link to="/">
            <img alt="logo" src="/images/logo.png" />
          </Link>
        </LogoWrap>
        <NavSearchWrap visibility={useScroll() > 350 ? 1 : 0}>
          <button>
            <img alt="search" src="/images/search.png" />
          </button>
          <input
            className={toggle ? "on" : "off"}
            onFocus={onToggle}
            onBlur={onToggle}
            onChange={(e) => handleChange(e.target.value)}
            value={searchText}
            type="text"
            placeholder="어디로 가시나요?"
          />
          <ModalWrap
            className="modalWrap"
            onFocus={onToggle}
            onBlur={onToggle}
            toggle={toggle}
          >
            <button>
              <img alt="search" src="/images/search.png" />
            </button>
            <ul className="searchList">
              {data.map((search, idx) => (
                <li className="list" key={idx}>
                  <img alt="place" src={search.imgUrl} />
                  <p className="listInfo">
                    <span className="placeName">{search.name}</span>
                    <span className="nationName">{search.country}</span>
                  </p>
                </li>
              ))}
            </ul>
          </ModalWrap>
        </NavSearchWrap>
        <BtnWrap>
          <MenuList>
            <img alt="more" src="/images/more.png" />
            <span>게시</span>
          </MenuList>
          <MenuList>
            <img alt="alarm" src="/images/alarm.png" />
            <span>알림</span>
          </MenuList>
          <MenuList>
            <img alt="heart" src="/images/emptyheart.png" />
            <span>여행</span>
          </MenuList>
          <LoginBtn onClick={openLoginHadler}>로그인</LoginBtn>
        </BtnWrap>
      </NavWrap>
      {isLoginModalOn ? modalHandler(loginMode) : null}
    </NavContainer>
  );
};

export default withRouter(Nav);

const NavContainer = styled.nav`
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;

  .toggleNav {
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    display: ${(props) => props.display || "none"};
  }
`;

const NavWrap = styled.div`
  width: 1280px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  visibility: visible;
`;

const LogoWrap = styled.div`
  width: 188px;
  height: 60px;
  margin-right: 26px;
  display: flex;
  align-items: center;

  img {
    width: 188px;
    height: auto;
    object-fit: contain;
  }
`;

const NavSearchWrap = styled.form`
  width: 698px;
  height: 42px;
  position: relative;
  display: flex;
  align-items: center;
  visibility: ${(props) => props.visibility || "hidden"};

  button {
    width: 42px;
    height: 38px;
    position: absolute;
    top: 2px;
    left: 12px;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 20px;
      height: auto;
      object-fit: contain;
    }
  }

  .off {
    width: 322px;
    height: 42px;
    padding: 0 12px 0 66px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    cursor: auto;
    outline: none;
    position: relative;
  }

  .on {
    width: 600px;
    height: 42px;
    padding: 0 12px 0 66px;
    background-color: white;
    border: 2px solid #e0e0e0;
    border-bottom: none;
    border-radius: 12px 12px 0 0;
    cursor: auto;
    outline: none;
    z-index: 1000;
    position: relative;
  }

  input {
    ::placeholder {
      font-size: 14px;
      color: #8c8c8c;
    }
  }
`;

const ModalWrap = styled.div`
  width: 600px;
  height: 480px;
  background-color: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  z-index: 999;
  overflow: auto;
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => (props.toggle ? "flex" : "none")};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ::-webkit-scrollbar {
    display: none;
  }

  .searchList {
    width: 100%;
    position: absolute;
    top: 42px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    .list {
      width: 100%;
      height: 62px;
      padding: 6px 18px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &:hover {
        background-color: #f2f2f2;
      }

      img {
        width: 42px;
        height: 42px;
        margin-right: 12px;
        border-radius: 12px;
        object-fit: cover;
      }

      p {
        height: 42px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .placeName {
          font-size: 16px;
          font-weight: 700;
        }

        .nationName {
          font-size: 14px;
          color: #8c8c8c;
        }
      }
    }
  }
`;

const BtnWrap = styled.ul`
  width: 350px;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuList = styled.li`
  width: 80px;
  height: 40px;
  margin-right: 10px;
  padding: 10px;
  background-color: transparent;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 900;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: 0.2s linear;
    background-color: #00aa6c;
    cursor: pointer;

    span {
      color: white;
    }
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }

  span {
    margin-left: 4px;
    font-size: 16px;
    color: black;
  }
`;

const LoginBtn = styled.button`
  width: 80px;
  height: 40px;
  background-color: black;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 900;
  color: white;

  &:hover {
    transition: 0.2s linear;
    background-color: #474747;
  }
`;
