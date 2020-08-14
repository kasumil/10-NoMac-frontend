import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Hotelpageheader from "./Hotelpageheader";
import Hotelpicture from "./Hotelpicture";
import HotelIntroduce from "./HotelIntroduce";
import { hotelListUrl } from "../../Config";
import Nav from "../../Components/Nav";

function Hotelpage() {
  const [hotels, setHotel] = useState([]);
  useEffect(() => {
    const pageHotelNumber = sessionStorage.getItem("pageHotelNumber");
    fetch(`${hotelListUrl}/hotel/${pageHotelNumber}`)
      .then((res) => res.json())
      .then((res) => {
        setHotel(res.data);
      });
  }, []);
  return (
    <div>
      {hotels.map((hotel, index) => (
        <section key={index}>
          <Nav />
          <Hotelpageheader idx={index} hotel={hotel} />
          <HotelBox>
            <Hotelpicture idx={index} hotel={hotel} />
            <HotelIntroduce idx={index} hotel={hotel} />
          </HotelBox>
        </section>
      ))}
      ;
    </div>
  );
}
const HotelBox = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 12px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f2f2f2;
`;
export default Hotelpage;
