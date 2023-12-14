import React, { Component } from 'react';
import "./style.scss"
import main_img1 from "../images/main_img1.jpg"
import main_img from "../images/main_img.jpg"
export class Main extends Component {
    render() {
        return (
            <div className='main'>
                <div className="main_title">
                    <h3>From Blog & News</h3>
                    <p>Welcome to Community Conversations, a new interview series featuring Intrepid travellers, creatives and activists in our community.</p>
                </div>

                <div className="main_boxs">
                    <div className="main_left">
                        <img src={main_img} alt="" />
                        <h6>Banff National Park</h6>
                        <p>Banff National Park lies in the heart of the majestic Rocky Mountains in the province of Alberta, and showcases some of Canada's most beautiful scenery. Turquoise-colored lakes, snow-capped peaks, and glaciers are all easily accessible</p>
                        <a href="#">@thomasalva_adison</a>
                    </div>
                    <div className="main_right">
                        <div className="main_box">
                            <img src={main_img1} alt="" />
                            <div className="main_text">
                                <h6>The Hiroshima Peace!</h6>
                                <p>It was formally opened to the public in August that year.</p>
                                <a href="#">@shova_bd88</a>
                            </div>
                        </div>
                        <div className="main_box">
                            <img src={main_img1} alt="" />
                            <div className="main_text">
                                <h6>The Hiroshima Peace!</h6>
                                <p>It was formally opened to the public in August that year.</p>
                                <a href="#">@shova_bd88</a>
                            </div>
                        </div>
                        <div className="main_box">
                            <img src={main_img1} alt="" />
                            <div className="main_text">
                                <h6>Colourful waters!</h6>
                                <p>It was formally opened to the public in August that year.</p>
                                <a href="#">@shova_bd88</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}





























