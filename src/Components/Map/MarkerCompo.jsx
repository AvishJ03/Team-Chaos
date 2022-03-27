import React from "react";
import { Marker } from "react-map-gl";
import marker from "./markers.png";

const MarkerCompo = (props) => {
  return (
    <div>
        <Marker longitude={props.long} latitude={props.lat} anchor={"bottom"}>
          <div>
              <div className="p-5 bg-gray-900">
              <h3>Project {props.id}</h3>
              </div>
              <img src={marker} className="h-[35px] " />
          </div>
        </Marker>
    </div>
  )
}

export default MarkerCompo