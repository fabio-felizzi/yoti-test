import React, { Component } from 'react';

require('../../sass/components/modal.scss');

const Modal = ({ onModalClose, backgroundColor, backgroundImage, selfieURL, applicationName, timeStamp, givenName, telNumber  }) => {
  let styles = {
    background: `background: url(${backgroundImage})`,
    backgroundColor: `background-color: ${backgroundColor}`
  }
  return (

    <div className="modal-wrapper">
      <div className="modal">
          <i>X</i>
          <section className="header" styles={styles.backgroundColor}>
            <img src={styles.backgroundImage} alt="modal logo"/>
          </section>
          <section className="content">
          <div className="selfie">
            <img src={selfieURL} alt="selfie" />
          </div>
            <div className="tick-icon"></div>
            <h1>{applicationName}</h1>
          <p className="timestamp">viewed this infomation about you at {timeStamp}</p>
            <hr/>
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


export default Modal;