import Map, { GeolocateControl } from "react-map-gl";
import { MapWrapper } from "./styles";
import { sightingData } from "../../data/sightingData";
import { Sighting } from "../Sighting";

const mapStyle = {
  streets: "mapbox://styles/mapbox/streets-v12",
  outdoors: "mapbox://styles/mapbox/outdoors-v12",
  light: "mapbox://styles/mapbox/light-v11",
  dark: "mapbox://styles/mapbox/dark-v11",
  satellite: "mapbox://styles/mapbox/satellite-v9",
  satelliteStreets: "mapbox://styles/mapbox/satellite-streets-v12",
  navigationDay: "mapbox://styles/mapbox/navigation-day-v1",
  navigationNight: "mapbox://styles/mapbox/navigation-night-v1",
};

export const MapContainer = () => {
  return (
    <MapWrapper>
      <Map
        mapboxAccessToken='pk.eyJ1IjoiaGVubGl0IiwiYSI6ImNrZHQ2eHBmMTBuMTQydG9xcmtteW9xZHAifQ.p3rnYNgr1p2JX8SebXG06w'
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 2,
        }}
        mapStyle={mapStyle.outdoors}
        style={{ width: "100%", height: "100%" }}
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        {sightingData.map((sighting) => (
          <Sighting key={sighting.id} sighting={sighting} />
        ))}
      </Map>
    </MapWrapper>
  );
};

export default MapContainer;
