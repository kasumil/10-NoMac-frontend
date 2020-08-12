import React, { useState } from "react";
import styled from "styled-components";

const PeopleCheck = () => {
  const [toggleChoice, setToggleChoice] = useState("allClose");
  let [roomInput, setRoomInput] = useState(1);
  let [peopleInput, setPeopleInput] = useState(1);

  const reservationHandler = (e) => {
    const { name, id } = e.target;
    const isPlus = name === "plus";
    let input =
      id === "roomInputMinus" || "roomInputPlus" ? roomInput : peopleInput;
    const setInput =
      id === "roomInputMinus" || "roomInputPlus"
        ? setRoomInput
        : setPeopleInput;

    if (!isPlus && input === 1) return;
    isPlus ? (input += 1) : (input -= 1);
    setInput(input);
  };

  return (
    <NumberPeopleBtn
      onClick={() =>
        toggleChoice !== "update"
          ? setToggleChoice("update")
          : setToggleChoice("allClose")
      }
    >
      <CheckIn>
        <i className="fas fa-users" />
        <div className="checkColumn">
          <p className="checkTitle">인원수</p>
          <p className="checkDate">
            객실 {roomInput}개,성인 {peopleInput}명
          </p>
        </div>
      </CheckIn>
      <PersonToggle
        toggleChoice={toggleChoice}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="toggleImgContainer">
          <i
            className="fas fa-times fa-2x"
            onClick={() =>
              toggleChoice !== "update"
                ? setToggleChoice("update")
                : setToggleChoice("allClose")
            }
          />
        </div>
        <PeopleInput>
          <div className="toggleTitle">
            <i className="fas fa-bed" />
            객실
          </div>
          <div className="calculator">
            <button
              className="numberBtn"
              name="minus"
              id="roomInputPlus"
              onClick={reservationHandler}
            >
              -
            </button>
            <input className="productNumber" value={roomInput} readOnly />
            <button
              className="numberBtn"
              name="plus"
              id="roomInputMinus"
              onClick={reservationHandler}
            >
              +
            </button>
          </div>
        </PeopleInput>
        <PeopleInput>
          <div className="toggleTitle">
            <i className="fas fa-user-friends" />
            성인
          </div>
          <div className="calculator">
            <button
              className="numberBtn"
              name="minus"
              id="peopleInputMinus"
              onClick={reservationHandler}
            >
              -
            </button>
            <input
              className="productNumber"
              value={peopleInput}
              onChange={reservationHandler}
              readOnly
            />
            <button
              className="numberBtn"
              name="plus"
              id="peopleInputPlus"
              onClick={reservationHandler}
            >
              +
            </button>
          </div>
        </PeopleInput>
        <UpdateBtn
          onClick={() =>
            toggleChoice !== "update"
              ? setToggleChoice("update")
              : setToggleChoice("allClose")
          }
        >
          적용
        </UpdateBtn>
      </PersonToggle>
    </NumberPeopleBtn>
  );
};

export default PeopleCheck;

const NumberPeopleBtn = styled.div`
  width: 298px;
  height: 42px;
  margin-left: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  background-color: #8c8c8c;
  position: relative;
  cursor: pointer;

  .fas {
    margin-left: 10px;
  }
`;

const CheckIn = styled.div`
  height: 100%;
  margin-left: 10px;
  background-color: white;
  z-index: 999;
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 3px;

  .far {
    padding-left: 10px;
    font-size: 20px;
    color: #474747;
  }

  .checkColumn {
    margin-left: 10px;

    .checkDate {
      font-weight: bold;
    }
  }
`;

const PersonToggle = styled.div`
  width: 288px;
  height: 210px;
  top: 45px;
  position: absolute;
  background-color: white;
  z-index: 999;
  padding: 16px;
  border: 1px solid #aeaeae;
  border-radius: 3px;
  visibility: ${(props) => (props.toggleChoice === "allClose" ? "hidden" : "")};

  .toggleImgContainer {
    display: flex;
    justify-content: flex-end;
  }
`;

const PeopleInput = styled.div`
  height: 36px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;

  .toggleTitle {
    .fas {
      margin: 0 4px;
    }
  }

  .calculator {
    height: 36px;

    .numberBtn {
      width: 36px;
      height: 36px;
      border: 1px solid #cdcdcd;
      border-radius: 0;
      background: #fff;
      font-size: 26px;
      color: #5d5d5d;
      outline: none;
      cursor: pointer;
      vertical-align: top;
    }

    .productNumber {
      width: 36px;
      height: 36px;
      border: 1px solid #cbcbcb;
      border-width: 1px 0;
      font-size: 13px;
      color: #666;
      text-align: center;
    }
  }
`;

const UpdateBtn = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 3px;
  margin-top: 16px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: black;
`;
