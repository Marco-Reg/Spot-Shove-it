/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import requestUser from '../../redux/actions/userActions';
import './userDetail.css';

function UserDetail({ user, dispatch }) {
  const { userId } = useParams();
  useEffect(() => {
    if (!user || user.length !== 0) {
      dispatch(requestUser(userId));
    }
  }, []);

  return (
    <>
      <section className="main-wrapper">
        <img src={user?.userImage} alt="user-avatar" id="user-image" />

        <p id="user-stance">
          <div id="user_stance">

            Stance:
            {user?.userStance}
          </div>
        </p>

        <p id="profile-description">
          {user?.userDescription}

        </p>

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
