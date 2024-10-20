import React, { Component } from 'react';
import { compose, withProps } from "recompose"

const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  KmlLayer,
} = require("react-google-maps");

const TravelMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBYPp0FDykxuOOK3ZrTYxvtl5AeLfcGKFE",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: 40.23164130704827, lng: 45.088623999999982 }}
    mapTypeId= {"terrain"}
  >
    <KmlLayer
      url={"https://www.google.com/maps/d/kml?mid=1X9b0bo11WcY9on87ZQXoB3YUkccwnK49"}
      options={{ preserveViewport: true }}
    />
  </GoogleMap>
);

export default TravelMap