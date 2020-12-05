/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requestUser } from '../../redux/actions/userActions';
import './userDetail.css';

function UserDetail({ user, dispatch }) {
  const { userId } = useParams();
  useEffect(() => {
    if (!user || !user.name) {
      dispatch(requestUser(userId));
    }
  }, []);

  return (
    <>
      <section className="main-wrapper">
        <p id="user-name">{user?.userName}</p>
        <img src={user?.userImage} alt="user-avatar" id="user-image" />
        <div id="linebreak" />
        <div id="user-spects">
          <p id="user-description">{user?.userDescription}</p>
          <div className="linebreak-vertical" />
          <li id="spects">
            City/Country :
            {' '}
            {user?.UserCity}
            <li>
              Stance :
              {' '}
              {user?.userStance}
            </li>
            <li>
              Most Favorites skate styles :
              {' '}
              {user?.userStyle}
            </li>

          </li>
          <li />
        </div>

      </section>
    </>
  );
}

function mapStateToProps({ userReducer }) {
  return {
    user: userReducer.user,
  };
}

export default connect(mapStateToProps)(UserDetail);
