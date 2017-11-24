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
        // Context binding.
        this.onActivityClick = this.onActivityClick.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
    }

    componentWillMount() {
        // Set state with json data.
        this.setState({
            data: mockData.receipts
        });
    }

    onActivityClick(id) {
        // Set state to match JSON data with clicked item
        this.setState({
            selectedActivity: _.find(this.state.data, { id })
        });
    }

    onModalClose() {
        // Clear state to remove modal from DOM
        this.setState({
            selectedActivity: null
        });
    }

    evalDataValue(prop, key, arr) {
        prop = _.findKey(arr, key) ? arr[_.findIndex(arr, key)][key] : undefined;
        return prop;
    }

    render() {
        const { data, selectedActivity } = this.state;
        // Had to write a very long conditional here due to the unusual nature of the JSON data, uses lodash to find where "selfie exists and wether it contains image data, or if its a boolean, or if its undefined"
        let selfieURL = null;
        let givenName = undefined;
        let telNumber = undefined;
        if (selectedActivity) {
            const attrs = selectedActivity.transaction.attributes;
            selfieURL = (
                _.findKey(attrs, "selfie") === undefined
                || typeof attrs[_.findIndex(attrs, 'selfie')].selfie === "boolean"
            )
                ? undefined
                : attrs[_.findIndex(attrs, 'selfie')].selfie;

            givenName = this.evalDataValue(givenName, "given-names", attrs);
            telNumber = this.evalDataValue(telNumber, "mobile-number", attrs);
        }

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
                                    dayOrDate={Moment.unix(activity.transaction["unix-timestamp"]).calendar(null, { sameDay: '[Today]', sameElse: 'D MMMM YYYY' })}
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
                        isShare={selectedActivity.type === "share" ? true : false}
                        onModalClose={this.onModalClose}
                        backgroundColor={"application" in selectedActivity ? selectedActivity.application.appearance["bg-color"] : undefined}
                        backgroundImage={"application" in selectedActivity ? selectedActivity.application.appearance["bg-logo"] : undefined}
                        selfieURL={selfieURL}
                        applicationName={"application" in selectedActivity ? selectedActivity.application.name : undefined}
                        time={Moment.unix(selectedActivity.transaction["unix-timestamp"]).format("HH:mm")}
                        date={Moment.unix(selectedActivity.transaction["unix-timestamp"]).format("D MMMM YYYY")}
                        givenName={givenName}
                        telNumber={telNumber}
                    />
                }
            </div>
        );
    };
}

export default App;
