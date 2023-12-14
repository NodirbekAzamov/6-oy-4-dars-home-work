import React, { Component } from "react";
import "./style.scss";
export class Header extends Component {
    state = {
        navbar_item: [
            {},
        ],
    }
    render() {
        return (
            <div className="menu">
                <div className="header">
                    <h2>Trevland</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Location</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Cantact</a></li>
                    </ul>
                    <button>Booking now</button>


                </div>
                <div className="header_botton">
                    <h1>Railtrips To Here, There And Everywhere!</h1>
                    <p>We all wish to start our year the best way possible and also according
                        to a common belief if you have a great start to your.</p>
                  <button>Explore more</button>
                </div>
            </div>
        )
    }
}