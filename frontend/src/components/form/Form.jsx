/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createProject } from '../../redux/actions/formAction';
import './form.css';

// eslint-disable-next-line no-unused-vars
function Form({ dispatch }) {
  const [projectName, setProjectName] = useState('');
  const [projectInfo, setProjectInfo] = useState('');
  const [spotLocation, setLocation] = useState('');
  const [spotLatitud, setLatitud] = useState('');
  const [spotLongitude, setLongitude] = useState('');
  const [photo, setPhoto] = useState('');

  return (
    <>
      <form className="form_wrapper">
        <div id="cordinates">

          <input id="project-name" type="text" value={projectName} onChange={(event) => { setProjectName(event.target.value); }} placeholder="Spot Name" />
        </div>
        <div id="cordinates">

          <input id="project-info" type="text" value={projectInfo} onChange={(event) => { setProjectInfo(event.target.value); }} placeholder="Description" />
        </div>
        <div id="cordinates">

          <input id="project-info" type="text" value={spotLocation} onChange={(event) => { setLocation(event.target.value); }} placeholder="Location" />
        </div>
        <div id="cordinates">

          <input id="project-photo" type="text" value={photo} onChange={(event) => { setPhoto(event.target.value); }} placeholder="photo url" />
        </div>
        <div id="cordinates">
          <input id="project-info" type="text" value={spotLatitud} onChange={(event) => { setLatitud(event.target.value); }} placeholder="latitude" />
          <input id="project-info" type="text" value={spotLongitude} onChange={(event) => { setLongitude(event.target.value); }} placeholder="Longitude" />

        </div>
        <div id="cordinates">

          <button type="submit" id="submit-form" onClick={() => { dispatch(createProject({ projectName, projectInfo, photo })); }}>SUBMIT</button>
        </div>
      </form>

    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch),
    dispatch,
  };
}

export default connect(mapDispatchToProps)(Form);
