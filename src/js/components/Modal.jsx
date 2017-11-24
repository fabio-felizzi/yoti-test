import React, { Component } from 'react';
import PropTypes from 'prop-types';

require('../../sass/components/modal.scss');

const Modal = ({ isShare, onModalClose, backgroundColor, backgroundImage, selfieURL, applicationName, time, date, givenName, telNumber }) => {
  let styles = {
    background: `background: url(${backgroundImage})`,
    backgroundColor: `background-color: ${backgroundColor}`
  }
  return (

    <div className="modal-wrapper" onClick={() => onModalClose()}>
      <div className="modal">
        <i>X</i>
        {isShare &&
          <section className="header" styles={styles.backgroundColor}>
            <img src={styles.backgroundImage} alt="modal logo" />
          </section>
        }
        <section className="content">
          <div className="selfie">
            <img src={selfieURL} alt="selfie" />
          </div>
          <div className="tick-icon"></div>
          <h1>{applicationName}</h1>
          <p className="timestamp">viewed this infomation about you at {time} on {date}</p>
          <hr />
        </section>
        <section className="given-information">
          <div className="given-information">
            <h2 className="given-information__header">Given Name(s)</h2>
            <p className="given-information__value">{givenName}</p>
          </div>
          <div className="given-information">
            <h2 className="given-information__header">Mobile Number</h2>
            <p className="given-information__value">{telNumber}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  applicationName: 'Yoti Shared',
  selfieURL: "https://www.fillmurray.com/200/200"
};

export default Modal;