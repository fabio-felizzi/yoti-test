import React from 'react';

require('../../sass/components/activity.scss');

export default class Activity extends React.Component {
    render() {
        return (
            <div className="activity-item">
                <div className="header-wrapper">
                    <h3>Date here</h3>
                </div>
                <div className="details-wrapper">
                    <div className="checkmark">Tick here</div>
                    <div className="avatar">Avatar here</div>
                    <div className="details">Yoti shared</div>
                    <div className="timestamp-details">
                        <p>time here</p>
                        <p>date here</p>
                    </div>
                </div>
            </div>
        );
    }
}
