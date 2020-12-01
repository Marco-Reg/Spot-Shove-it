/* eslint-disable no-debugger */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import Carousel from 'react-elastic-carousel';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requestSpot } from '../../redux/actions/spotActions';
import './carousel.css';

function CarrouselSpot({ spot, dispatch }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },

  ];
  const { spotId } = useParams();
  useEffect(() => {
    if (!spot || !spot.name) {
      dispatch(requestSpot(spotId));
    }
  }, []);

  return (
    <>
      <section id="carousel-compo">
        <Carousel breakPoints={breakPoints}>{spot?.spotImage?.map((spot) => <img key={Date.now()} id="carousel-size" alt="places" src={spot} />)}</Carousel>
      </section>

    </>
  );
}

function mapStateToProps({ spotReducer }) {
  return {
    spot: spotReducer.spot,
  };
}

export default connect(mapStateToProps)(CarrouselSpot);
