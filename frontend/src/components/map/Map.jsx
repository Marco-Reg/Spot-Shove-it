import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = () => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={{ lat: 41.385063, lng: 41.385063 }}
  />
);

export default withScriptjs(
  withGoogleMap(
    Map,
  ),
);
