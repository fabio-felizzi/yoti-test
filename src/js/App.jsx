import React, { Component } from 'react';
import _ from 'lodash';
import Moment from 'moment';
import { v4 } from 'uuid';
import mockData from './mock-data.json';
import Activity from './components/Activity.jsx';
import Modal from './components/Modal.jsx'; 

require('../sass/app.scss');
require('../sass/sprite.css');

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            selectedActivity: null
        };

        this.onActivityClick = this.onActivityClick.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
    }

    componentWillMount() {
        this.setState({
            data: mockData.receipts
        });
    }

    onActivityClick(id) {
        this.setState({
            selectedActivity: _.find(this.state.data, { id })
        });
    }

    onModalClose() {
        this.setState({
            selectedActivity: null
        });
    }
    
    render() {
        const { data, selectedActivity } = this.state;
        return (
            <div id="container">
                <div id="navbar">
                    <a href="#" className="logo">Logo</a>
                    <div className="menu-section">Connected</div>
                    <div className="avatar">image here</div>
                </div>
                <div id="sidebar">
                    <ul className="sidebar-list">
                        <li className="sidebar-item">Activity</li>
                    </ul>
                </div>
                <div id="main-content">
                    <h2>Activity</h2>
                    <hr />
                    <h1>Activity</h1>
                    <p>See a record of everyone you have shared details with.</p>
                    <ul id="activity-list">
                        {data.map(activity =>
                            <li className="App__list-item" key={v4()}>
                                <Activity
                                    type={activity.type}
                                    dayOrDate={Moment.unix(activity.transaction["unix-timestamp"]).calendar(null, { sameDay: '[Today]', sameElse: 'D MMMM YYYY'})}
                                    time={Moment.unix(activity.transaction["unix-timestamp"]).format("HH:mm")}
                                    id={activity.id}
                                    onActivityClick={this.onActivityClick}
                                />
                            </li>
                        )}
                    </ul>
                </div>
                {selectedActivity &&
                    <Modal 
                        onModalClose={this.onModalClose}
                        backgroundColor={"application" in selectedActivity ? selectedActivity.application.appearance["bg-color"] : undefined}
                        backgroundImage={"application" in selectedActivity ? selectedActivity.application.appearance["bg-logo"] : undefined}
                        selfie={selectedActivity}
                        applicationName={"application" in selectedActivity ? selectedActivity.application.name : undefined}
                        time={Moment.unix(selectedActivity.transaction["unix-timestamp"]).format("HH:mm")}
                        date={Moment.unix(selectedActivity.transaction["unix-timestamp"]).format("D MMMM YYYY")}
                        givenName={selectedActivity.transaction.attributes[0] === "given-names" ? selectedActivity.transaction.attributes[0]["given-names"] : undefined }
                        telNumber={selectedActivity.transaction.attributes[1] === "mobile-number" ? selectedActivity.transaction.attributes[1]["mobile-number"] : undefined }
                    />
                }
            </div>
        );
    };
}

export default App;
