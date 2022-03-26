import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const INDIA_TOPO_JSON = require("./india.topo.json");

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937],
};

function MapChart() {
  return (
    <ComposableMap
      projectionConfig={PROJECTION_CONFIG}
      projection="geoMercator"
      width={600}
      height={220}
      data-tip=""
    >
      <Geographies geography={INDIA_TOPO_JSON}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const current = data.find((s) => s.id === geo.id);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                style={geographyStyle}
                onMouseEnter={onMouseEnter(geo, current)}
                onMouseLeave={onMouseLeave}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}

export default MapChart;
