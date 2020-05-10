import React, { memo } from 'react';

import logo from '../../../assets/images/logo-in-white@1.5x.svg';
import doctor from '../../../assets/images/doctor.svg';

import './styles.scss';

function AuthLayout(props) {
  return (
    <div className="container">
      <div className="left">
        <div className="content">
          <img className="label" src={doctor} alt="doctor" />

          <h1 className="title">
            {'Your medical history'}
          </h1>
          <div className="tagline">
            {'Get the latest chords and tabs so you couls strum along with your friends'}
          </div>
        </div>
      </div>
      <div className="right">
        <div className="content">
          <img className="logo" src={logo} alt="logo" />
          {
            props.children
          }
        </div>
      </div>
    </div>
  );
}

export default memo(AuthLayout);