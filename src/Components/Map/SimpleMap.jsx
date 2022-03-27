import React, { useRef, useEffect, useState } from "react";
import mapboxGl from "mapbox-gl";
import Map, { Marker } from "react-map-gl";
import marker from "./markers.png";
import "mapbox-gl/dist/mapbox-gl.css";
import { deleteApp } from "firebase/app";
const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWFuYW4xNyIsImEiOiJjbDBvY2MxcmQxOHU2M2RwZTZvMG56MzAxIn0.91iA6W-k1KeelkXXk5p-zQ";
mapboxGl.accessToken =
  "pk.eyJ1IjoibWFuYW4xNyIsImEiOiJjbDBvY2MxcmQxOHU2M2RwZTZvMG56MzAxIn0.91iA6W-k1KeelkXXk5p-zQ";
const SimpleMap = () => {
  return (
    <div>
      <Map
        initialViewState={{
          latitude: 19.07,
          longitude: 72.87,
          zoom: 12,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker
          children={<h1>Hello</h1>}
          longitude={72.87}
          latitude={19.07}
          anchor="bottom"
        >
          <div>
            <div className="p-5 bg-gray-900">
              <h3>Project 1</h3>
            </div>
            <img src={marker} className="h-[35px]" />
          </div>
        </Marker>
        <Marker longitude={72.9} latitude={19.07} anchor="bottom">
          <div>
            <div className="p-5 bg-gray-900">
              <h3>Project 2</h3>
            </div>
            <img src={marker} className="h-[35px] " />
          </div>
        </Marker>
        <Marker longitude={72.8295} latitude={19.0596} anchor="bottom">
          <div>
            <div className="p-5 bg-gray-900">
              <h3>Project 3</h3>
            </div>
            <img src={marker} className="h-[35px] " />
          </div>
        </Marker>
        <Marker longitude={72.8517} latitude={19.0968} anchor="bottom">
          <div>
            <div className="p-5 bg-gray-900">
              <h3>Project 4</h3>
            </div>
            <img src={marker} className="h-[35px] " />
          </div>
        </Marker>
      </Map>
    </div>
  );
};

export default SimpleMap