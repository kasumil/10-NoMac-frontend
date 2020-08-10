import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import PeopleCheck from "./PeopleCheck";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

registerLocale("ko", ko);

const week = ["일", "월", "화", "수", "목", "금", "토"];

const HotelCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [toggleChoice, setToggleChoice] = useState("allClose");

  useEffect(() => {
    setEndDate(startDate);
  }, [startDate]);

  const dateChangeHandler = (date) => {
    return (
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  };

  useEffect(() => {
    sessionStorage.setItem("startDate", dateChangeHandler(startDate));
    sessionStorage.setItem("endDate", dateChangeHandler(endDate));
  }, [startDate, endDate]);

  return (
    <CalendarSection>
      <div className="calendarBtn">
        <div
          className="checkContainer in"
          onClick={() =>
            toggleChoice !== "startDate"
              ? setToggleChoice("startDate")
              : setToggleChoice("allClose")
          }
        >
          <CheckIn>
            <i className="far fa-calendar-check" />
            <div className="checkColumn">
              <p className="checkTitle">체크인</p>
              <p className="checkDate">
                {startDate.getFullYear()}.{startDate.getMonth() + 1}.
                {startDate.getDate()} ({week[startDate.getDay()]})
              </p>
            </div>
          </CheckIn>
          <StartPicker name={toggleChoice} onClick={(e) => e.stopPropagation()}>
            <DatePicker
              locale="ko"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              inline
            />
          </StartPicker>
        </div>
        <div
          className="checkContainer out"
          onClick={() =>
            toggleChoice !== "endDate"
              ? setToggleChoice("endDate")
              : setToggleChoice("allClose")
          }
        >
          <CheckIn>
            <i className="far fa-calendar-check" />
            <div className="checkColumn">
              <p className="checkTitle">체크아웃</p>
              <p className="checkDate">
                {endDate.getFullYear()}.{endDate.getMonth() + 1}.
                {endDate.getDate()} ({week[endDate.getDay()]})
              </p>
            </div>
          </CheckIn>
          <EndPicker name={toggleChoice} onClick={(e) => e.stopPropagation()}>
            <DatePicker
              className="endPicker"
              locale="ko"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              minDate={startDate}
              inline
            />
          </EndPicker>
        </div>
      </div>
      <PeopleCheck />
    </CalendarSection>
  );
};

export default HotelCalendar;

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

const CalendarSection = styled.section`
  height: 80px;
  display: flex;
  align-items: center;

  .calendarBtn {
    width: 605px;
    height: 42px;
    display: flex;
    cursor: pointer;

    .checkContainer {
      width: 50%;
      height: 100%;
      border: 0.5px solid #e0e0e0;
      border-radius: 3px;
      cursor: pointer;
    }

    .in {
      background-color: #00aa6c;
      position: relative;

      .react-datepicker__day--selected {
        background-color: #00aa6c;
      }
    }

    .out {
      position: relative;
      margin-left: 10px;
      background-color: #cc0000;

      .react-datepicker__day--selected {
        background-color: #cc0000;
      }
    }

    .react-datepicker {
      z-index: 999;
      position: absolute;
      top: 45px;

      .react-datepicker__day--keyboard-selected {
        font-weight: normal;
        background-color: #dbdbdb;
        color: black;
        border: none;
        outline: none;
      }
    }
  }
`;

const StartPicker = styled.div`
  visibility: ${(props) => (props.name === "startDate" ? "" : "hidden")};
`;

const EndPicker = styled.div`
  visibility: ${(props) => (props.name === "endDate" ? "" : "hidden")};
`;
