import React, { Component } from 'react';
import Moment from 'moment';
import { v4 } from 'uuid';
import mockData from './mock-data.json';
import Activity from './components/Activity.jsx';

require('../sass/app.scss');
require('../sass/sprite.css');

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };

        this.onActivityClick = this.onActivityClick.bind(this);
    }

    componentWillMount() {
        this.setState({
            data: mockData.receipts
        });
    }

    onActivityClick() {
        console.log('click');
    }
    
    render() {
        const { data } = this.state;
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
                                    timeStamp={activity.transaction["unix-timestamp"]}
                                    id={'blank'}
                                    onActivityClick={this.onActivityClick}
                                />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    };
}

export default App;
