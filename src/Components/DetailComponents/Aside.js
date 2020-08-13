import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { detailData } from "../../MockData/DetailData";
import AsidePopular from "./AsideComponents/AsidePopular";
import styled from "styled-components";

const AsideComponent = () => {
  let [facilityName, setFacilityName] = useState("all");

  useEffect(() => {
    sessionStorage.setItem("facilityName", "all");
  }, []);

  const facilityHandler = (e) => {
    const { name } = e.target;

    if (e.target.checked) {
      facilityName += name + ",";
      facilityName = facilityName.replace("all", "");
    } else {
      facilityName = facilityName.replace(name + ",", "");
    }

    setFacilityName(facilityName);
    sessionStorage.setItem("facilityName", facilityName);
  };

  return (
    <Aside>
      <H1>특가</H1>
      {detailData.specialPrice.map(({ name, index }) => (
        <AsideItem key={index}>
          <label>
            <p className="asideText">
              <input className="asideCheckbox" type="checkbox" />
              {name}
            </p>
          </label>
        </AsideItem>
      ))}
      <AsideHr />
      <AsidePopular detailData={detailData} />
      <H1>시설 타입</H1>
      {detailData.type.map(({ name, number, index }) => (
        <AsideItem key={index}>
          <span>
            <label>
              <input className="asideCheckbox" type="checkbox" />
              {name}
            </label>
          </span>
          <span>{number}</span>
        </AsideItem>
      ))}
      <AsideHr />
      <H1>부대 시설</H1>
      {detailData.facility.map(({ name, number, index }) => (
        <AsideItem key={index}>
          <span>
            <label>
              <input
                className="asideCheckbox"
                name={name}
                onClick={(e) => facilityHandler(e)}
                type="checkbox"
              />
              {name}
            </label>
          </span>
          <span>{number}</span>
        </AsideItem>
      ))}
      <AsideHr />
      <H1>호텔 등급</H1>
      {detailData.hotelGrade.map(({ name, number, index }) => (
        <AsideItem key={index}>
          <span>
            <label>
              <input className="asideCheckbox" type="checkbox" />
              {name}
            </label>
          </span>
          <span>{number}</span>
        </AsideItem>
      ))}
      <AsideHr />
      <H1>스타일</H1>
      {detailData.style.map(({ name, number, index }) => (
        <AsideItem key={index}>
          <span>
            <label>
              <input className="asideCheckbox" type="checkbox" />
              {name}
            </label>
          </span>
          <span>{number}</span>
        </AsideItem>
      ))}
      <AsideHr />
      <H1>호텔 브랜드</H1>
      {detailData.hotelBrand.map(({ name, number, index }) => (
        <AsideItem key={index}>
          <span>
            <label>
              <input className="asideCheckbox" type="checkbox" />
              {name}
            </label>
          </span>
          <span>{number}</span>
        </AsideItem>
      ))}
      <AsideHr />
    </Aside>
  );
};
export default withRouter(AsideComponent);

const AsideHr = styled.hr`
  margin: 20px 0;
`;

const H1 = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const AsideItem = styled.div`
  margin: 8px 0;
  display: flex;
  justify-content: space-between;

  .asideCheckbox {
    margin-right: 5px;
    border: 3px solid black;
  }

  .textBold {
    font-weight: bold;
  }
`;

const Aside = styled.aside`
  width: 296px;
  height: 100%;
  margin: 12px 0;
  padding: 24px;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  font-size: 14px;

  .hotelMore {
    cursor: pointer;
  }

  .styleMore {
    cursor: pointer;
  }
`;
