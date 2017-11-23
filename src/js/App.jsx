import React, {Component} from 'react';

require('../sass/app.scss');

export default class App extends Component {
    render() {
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
                    <hr/>
                    <h1>Activity</h1>
                    <p>See a record of everyone you have shared details with.</p>
                    <ul id="activity-list"></ul>
                </div>
            </div>
        );
    };
}
