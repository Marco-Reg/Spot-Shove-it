/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { requestListSpots } from '../../redux/actions/listActions';
import './list.css';

function List({ spots, dispatch }) {
  useEffect(() => {
    dispatch(requestListSpots());
  }, []);
  return (
    <>
      <section className="list_wrapper">
        {spots
            && spots.length >= 0
            && (
            <>
              {spots.map((spot) => (
                <div className="project_wrapper" id="list_wrapper">
                  <Link id="spot-link" to={`/spot/${spot._id}`}>
                    <div id="linebreak" />
                    <h3 className="spot_title">{spot.spotName}</h3>
                  </Link>
                  <p className="spot-info">{spot.spotLocation}</p>
                  <p className="spot-style">
                    {' '}
                    Styles:
                    {' '}
                    {spot.spotStyle}
                  </p>
                  <img className="main-spot-image" src={spot.spotImage[1]} alt="" />
                </div>
              ))}
            </>
            )}
      </section>

    </>
  );
}

function mapStateToProps({ listReducer }) {
  return {
    spots: listReducer.spots,
  };
}
export default connect(mapStateToProps)(List);
