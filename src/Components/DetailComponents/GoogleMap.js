import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { hotelListUrl } from "../../Config";
import { mapApi } from "../../apiKey/mapApi";
import { detailData } from "../../MockData/DetailData";
import styled from "styled-components";

const MapAPI = (props) => {
  const [stores, setStores] = useState([]);
  const [hotelData, setHotelData] = useState();
  // const [isToggle, setIsToggle] = useState(false);
  const [RadioNumber, setRadioNumber] = useState(1);

  useEffect(() => {
    fetch(`${hotelListUrl}/hotel/map`)
      .then((res) => res.json())
      .then((res) => {
        setHotelData(res.data);
        const temp = [];
        res.data.map((data) =>
          temp.push({
            lat: parseFloat(data.lat),
            lng: parseFloat(data.lng),
            price: data.price,
          })
        );
        setStores(temp);
      });
  }, []);

  useEffect(() => {
    fetch(`${hotelListUrl}/hotel/map?user_rating=${RadioNumber}`)
      .then((res) => res.json())
      .then((res) => {
        setHotelData(res.data);
        const temp = [];
        res.data.map((data, index) =>
          temp.push({
            lat: parseFloat(data.lat),
            lng: parseFloat(data.lng),
            price: data.price,
          })
        );
        setStores(temp);
      });
  }, [RadioNumber]);

  return (
    <HotelMap>
      <div className="hotelList">
        <BtnContainer>
          <Link to="/list" className="closeMapBtn">
            <i className="fas fa-times-circle" />
            지도닫기
          </Link>
        </BtnContainer>
        {/* <FilterContainer>
          <span className="filter">분류</span>
          <span
            className="filter"
            onClick={
              !isToggle ? () => setIsToggle(true) : () => setIsToggle(false)
            }
          >
            필터
          </span>
        </FilterContainer> */}
        <RadioContainer>
          {detailData.filter.map(({ number, index, name }) => (
            <label
              key={index}
              name={number}
              className="radioLabel"
              onChange={() => setRadioNumber(number)}
            >
              <span className="radioInput">
                <input
                  type="radio"
                  name="radio"
                  defaultChecked={RadioNumber === number && true}
                />
                <span className="radioControl"></span>
              </span>
              <span className="radioText">{name}</span>
            </label>
          ))}
        </RadioContainer>
        {hotelData &&
          hotelData.map((hotelData, index) => (
            <div key={index}>
              <HotelContainer>
                <div className="hotelImgContainer">
                  <img alt="hotel  img" src={hotelData.image} />
                </div>
                <HotelInfoContainer>
                  <h4>{hotelData.name}</h4>
                  <p className="hotelReview">{hotelData.review_count_msg}</p>
                  <p className="hotelReview">
                    가격 :{" "}
                    <strong>
                      {Math.ceil(hotelData.price).toLocaleString(5)}
                    </strong>
                    원
                  </p>
                  <p className="hotelRating">
                    {hotelData.user_rating} / <strong>5점</strong>
                  </p>
                </HotelInfoContainer>
              </HotelContainer>
              <HotelContainerBorder />
            </div>
          ))}
      </div>
      <MapCotainer>
        <Map
          google={props.google}
          zoom={9.5}
          initialCenter={{ lat: 19.5, lng: -155.4 }}
          style={mapStyles}
        >
          {stores.length > 0 &&
            stores.map((store, index) => (
              <Marker
                key={index}
                id={index}
                position={{
                  lat: store.lat,
                  lng: store.lng,
                }}
              />
            ))}
        </Map>
      </MapCotainer>
    </HotelMap>
  );
};

export default GoogleApiWrapper({
  apiKey: `${mapApi}`,
})(MapAPI);

const RadioContainer = styled.div`
  position: absolute;
  top: 560px;
  left: 332px;
  z-index: 9999;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;

  .radioLabel {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    color: var(--color);

    .radioText {
      width: 220px;
      border: 1px solid black;
      border-radius: 5px;
      padding: 10px;
    }

    .radioInput {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 20px;

      input {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const HotelContainerBorder = styled.div`
  height: 5px;
  background: #dbdbdb;
`;

const BtnContainer = styled.div`
  height: 76px;
  display: flex;
  border-bottom: 1px solid #e0e0e0;

  .closeMapBtn {
    height: 38px;
    color: white;
    margin: auto;
    background-color: black;
    font-size: 14px;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 3px;

    .fas {
      margin-right: 5px;
    }
  }
`;

// const FilterContainer = styled.div`
//   height: 40px;
//   padding: 8px 18px;
//   border-bottom: 1px solid #e0e0e0;

//   .filter {
//     margin: 0 5px;
//     padding: 4px 8px;
//     font-size: 14px;
//     font-weight: bold;
//     border: 1px solid #e0e0e0;
//     cursor: pointer;
//   }
// `;

const HotelContainer = styled.div`
  height: 110px;
  display: flex;
  cursor: pointer;

  .radioBtn {
    width: 40px;
    height: 40px;

    font-size: 40px;
  }

  .hotelImgContainer {
    width: 92px;
    height: 86px;
    margin: 12px 0 16px 12px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
`;

const HotelInfoContainer = styled.div`
  margin: 12px;
  display: flex;
  flex-direction: column;

  h4 {
    width: 150px;
    font-weight: bold;
  }

  .hotelReview {
    font-size: 14px;

    strong {
      color: black;
      font-weight: bold;
    }
  }

  .hotelRating {
    font-size: 18px;
    font-weight: bold;

    strong {
      font-size: 16px;
      color: #797778;
    }
  }
`;

const HotelMap = styled.section`
  display: flex;

  .hotelList {
    width: 340px;
    height: 900px;
    overflow: scroll;
  }
`;

const MapCotainer = styled.div`
  position: relative;
  width: 1400px;
  height: 900px;
`;

const mapStyles = {
  width: "100%",
  height: "100%",
};
