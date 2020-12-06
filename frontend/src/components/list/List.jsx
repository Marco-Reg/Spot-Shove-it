/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { requestListSpots } from '../../redux/actions/listActions';

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
                  <Link to={`/spot/${spot._d}`}>
                    <h3 className="spot_title">{spot.spotName}</h3>
                  </Link>
                  <p className="spot-info">{spot.spotLocation}</p>
                  <p className="spot-style">{spot.spotStyle}</p>
                  <img className="main-spot-image" src={spot.spotImage[0]} alt="" />
                </div>
              ))}
            </>
            )}
      </section>

    </>
  );
}

function mapStateToProps(state) {
  return {
    list: state.listReducer.list,
  };
}
export default connect(mapStateToProps)(List);
