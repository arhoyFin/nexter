import React, { Component } from 'react';
import './SideBar.css'

class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__btn-container">
                    <span className="sidebar__button sidebar__button-1"></span>
                    <span className="sidebar__button sidebar__button-2"></span>
                    <span className="sidebar__button sidebar__button-3"></span>
                </div>
            </div>
        );
    }
}

export default SideBar;