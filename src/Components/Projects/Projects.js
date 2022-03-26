import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Projects = () => {
  const render = (status = Status) => {
    return <h1>{status}</h1>;
  };
  function Map() {
    const ref = React.useRef(null);
    const [map, setMap] = React.useState();

    React.useEffect(() => {
      if (ref.current && !map) {
        setMap(new window.google.maps.Map(ref.current, {}));
      }
    }, [ref, map]);
  }
  return (
    <div>
      <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
        {/* <YourComponent /> */}
      </Wrapper>
    </div>
  );
};

export default Projects;
