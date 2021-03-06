import React, { useRef, useEffect, useState } from "react";
import mapboxGl from "mapbox-gl";
import Map, { Marker } from "react-map-gl";
import marker from "./markers.png";
import MarkerCompo from "./MarkerCompo";
import "mapbox-gl/dist/mapbox-gl.css";
import { deleteApp } from "firebase/app";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/init-firebase";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWFuYW4xNyIsImEiOiJjbDBvY2MxcmQxOHU2M2RwZTZvMG56MzAxIn0.91iA6W-k1KeelkXXk5p-zQ";
mapboxGl.accessToken =
  "pk.eyJ1IjoibWFuYW4xNyIsImEiOiJjbDBvY2MxcmQxOHU2M2RwZTZvMG56MzAxIn0.91iA6W-k1KeelkXXk5p-zQ";
const SimpleMap = () => {
  const location =[];
  useEffect(() => {
    const getlocation = async () => {
      try {
        const projectsRef = collection(db, "projects");
        const docSnap = await getDocs(projectsRef);
        docSnap.docs.forEach(async (element) => {
          const id = element.id;
          const pro = doc(db, "projects", id);
          const snap = await getDoc(pro);
          // console.log(snap.data());
          const long = snap.data().location._long;
          const lat = snap.data().location._lat;
          const geoloaction ={latitude: lat , longitude:long};
          location.push(geoloaction);
          // setProjects((prevSelected) => [...prevSelected, p]);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getlocation();
  }, []);

  // const createMarker = ;
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
        <MarkerCompo lat="19.07" long="72.9" id="2"/>
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