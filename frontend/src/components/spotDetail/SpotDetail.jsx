/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requestSpot } from '../../redux/actions/spotActions';
import CarrouselSpot from '../carrouselSpot/CarrouselSpot';
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
        <CarrouselSpot />

        <div id="user_stance">

          {spot?.spotName}
        </div>

        <div id="video-description">

          <p id="description">
            {' '}
            {spot?.spotDescription}
          </p>

        </div>

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
