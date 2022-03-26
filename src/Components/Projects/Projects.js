import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const Projects = () => {
  const libraries = ["places"];
  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };
  const center = {
    lat: 19.1085,
    lng: 72.827,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBLdrEAIVSAI-DMcjrsK8d1tWyqgUb5rt0",
    libraries,
  });

  if (loadError) {
    return "Error";
  }
  if (!isLoaded) {
    return "Loading";
  }

  return (
    <div>
      <GoogleMap
        center={center}
        zoom={10}
        mapContainerStyle={mapContainerStyle}
      ></GoogleMap>
    </div>
  );
};

export default Projects;
