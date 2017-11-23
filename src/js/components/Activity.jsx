import React, { Component } from 'react';

require('../../sass/components/activity.scss');

const Activity = ({ id, onActivityClick, time, dayOrDate }) => {
    return (
        <div onClick={() => onActivityClick(id)}>
            <h3>{dayOrDate}</h3>
            <div className="details-wrapper">
                <div className="checkmark">Tick here</div>
                <div className="avatar">Avatar here</div>
                <div className="details">Yoti shared</div>
                <div className="timestamp-details">
                    <p>{time}</p>
                    <p>{dayOrDate}</p>
                </div>
            </div>
        </div>
    );
};


export default Activity;