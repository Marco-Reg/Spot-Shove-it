/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Maps from '../map/MapTest';
import { requestSpot } from '../../redux/actions/spotActions';

import './spotDetail.css';

function SpotDetail({ spot, dispatch }) {
  const { spotId } = useParams();

  useEffect(() => {
    if (!spot || !spot.name) {
      dispatch(requestSpot(spotId));
    }
  }, []);

  return (
    <>
      <section id="spot-detail-wrapper">

        <div id="spot_name">
          {spot?.spotName}
        </div>

        <div id="linebreak-detail" />
        <img alt="spot" src={spot?.spotImage[1]} id="spot-image" />

        <div id="linebreak-detail" />
        <div id="video-description">
          <p id="description">
            {' '}

            {spot?.spotDescription}
          </p>
        </div>

        <div id="linebreak-detail" className="location">
          <img alt="spot" src={spot?.spotImage[2]} id="spot-image-one" />
          <div className="linebreak-vertical" />
          <p id="spot-location">{spot?.spotLocation}</p>
        </div>
        <p>Map Spot</p>
        <Maps />

      </section>

    </>
  );
}

function mapStateToProps({ spotReducer }) {
  return {
    spot: spotReducer.spot,
  };
}

export default connect(mapStateToProps)(SpotDetail);
