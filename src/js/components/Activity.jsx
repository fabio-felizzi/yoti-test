import React, { Component } from 'react';

require('../../sass/components/activity.scss');

const Activity = ({ id, onActivityClick, timeStamp }) => {
    return (
        <div onClick={() => onActivityClick()}>
            <h3>{timeStamp}</h3>
            <div className="details-wrapper">
                <div className="checkmark">Tick here</div>
                <div className="avatar">Avatar here</div>
                <div className="details">Yoti shared</div>
                <div className="timestamp-details">
                    <p>{timeStamp}</p>
                    <p>{timeStamp}</p>
                </div>
            </div>
        </div>
    );
};


export default Activity;