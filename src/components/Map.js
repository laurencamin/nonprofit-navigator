import {
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

 function Map() {
  const MapWithAMarker = withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>
  );
  
  <MapWithAMarker
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
  }
  export default Map;
