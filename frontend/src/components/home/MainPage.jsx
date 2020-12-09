import React from 'react';
import './home.css';
import Map from '../map/Map';
import RandomSpot from '../randomSpot/RandomSpot';

function MainPage() {
  return (
    <>
      <section id="top-part">

        <h1 id="title">SPOT SHOVE-IT</h1>
        <h4 id="sub-title">Find,create,skate</h4>
        <div id="random-spot">
          <p id="random_spot_text">Go and check it out</p>

          <RandomSpot />
        </div>
        <div id="maperoni">

          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDZ47kWyh51pVo7LVbUloOsUUysWvocKfY"
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>

      </section>

    </>
  );
}

export default MainPage;
