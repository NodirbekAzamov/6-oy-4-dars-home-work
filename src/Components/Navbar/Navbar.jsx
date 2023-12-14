import React, { Component } from "react";
import "./style.scss";
import navbar_img1 from "../images/navbar_img1.jpg";
export class Navbar extends Component {

    render() {
        return (
            <div className="navbar">
                <div className="navbar_title">
                    <h2>Popular Location</h2>
                    <p>For every one of us, travel came first. We’ve spent years living as nomads, pioneers, and voyagers— from island hopping in the</p>
                </div>
                <div className="navbar_menu">
                    <div className="navbar_box">
                        <img src={navbar_img1} alt="img" />
                        <h6>Istanbul, Turkey</h6>
                        <p>Istanbul is a major city in Turkey that straddles Europe.</p>
                    </div>
                    <div className="navbar_box">
                        <img src={navbar_img1} alt="img" />
                        <h6>Istanbul, Turkey</h6>
                        <p>Istanbul is a major city in Turkey that straddles Europe.</p>
                    </div>
                    <div className="navbar_box">
                        <img src={navbar_img1} alt="img" />
                        <h6>Istanbul, Turkey</h6>
                        <p>Istanbul is a major city in Turkey that straddles Europe.</p>
                    </div>
                </div>
            </div>
        )
    }
}