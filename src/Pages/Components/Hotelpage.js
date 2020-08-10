import React, { useEffect, useState } from "react";
import Hotelpageheader from "./Hotelpageheader";
import Hotelpicture from "./Hotelpicture";
import HotelIntroduce from "./HotelIntroduce";
import { Apiresource } from "../../Config";
import Nav from "../../Components/Nav";

function Hotelpage() {
  const [ hotels, setHotel ] = useState([]);
  
  useEffect((props) => {
    fetch(`${Apiresource}/data/hotel1pMoc.json`)
      .then(res => res.json())
      .then(res => { 
        setHotel(res.data )
      })
  }, []);

  return(
    <div>
      {hotels.map((hotel, index) => (
          <section key={index}>
            <Nav />
            <Hotelpageheader idx={index} hotel={hotel}/>
            <Hotelpicture idx={index} hotel={hotel} />
            <HotelIntroduce idx={index} hotel={hotel} />
          </section>
      ))};
    </div>
  )
}


export default Hotelpage;

