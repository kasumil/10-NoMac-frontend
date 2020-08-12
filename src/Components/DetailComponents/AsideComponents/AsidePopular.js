import React from "react";
import styled from "styled-components";

const AsidePopular = (detailData) => {
  console.log({ detailData });

  return (
    <>
      <H1>인기</H1>
      {detailData.detailData.popular.map(({ name, number, index }) => (
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
    </>
  );
};
export default AsidePopular;

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
