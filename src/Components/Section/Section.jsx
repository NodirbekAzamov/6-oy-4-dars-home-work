import React, { Component } from 'react';
import "./style.scss";
import section_img1 from "../images/section_img1.jpg"
import section_img4 from "../images/section_img4.jpg"
import section_logo1 from '../images/section_logo1.svg'
import section_logo2 from '../images/section_logo2.svg'
export class Section extends Component {
    render() {
        return (
            <div className='section'>
                <div className="section_title">
                    <h2>Special Offers</h2>
                    <p>With the New Year comes a refreshing sense of wanderlust, a longing in our souls to escape to warmer climates,</p>
                </div>

                <div className="section_boxs">
                    <div className="section_box">
                        <img src={section_img1} alt="img" className='section_box-img' />
                        <h5>Statue of Liberty.</h5>
                        <div className="section_icon">
                            <div className='section_icon1'>
                                <img src={section_logo1} alt="" />
                                <p>New York</p>
                            </div>
                            <div className='section_icon1'>
                                <img src={section_logo2} alt="" />
                                <h6>4.8</h6>
                            </div>
                        </div>
                        <p>4 Day 5 Nights</p>
                        <h6>$450/<span>peson</span></h6>
                    </div>
                    <div className="section_box">
                        <img src={section_img4} alt="img" className='section_box-img' />
                        <h5>The Great Wall.</h5>
                        <div className="section_icon">
                            <div className='section_icon1'>
                                <img src={section_logo1} alt="" />
                                <p>China</p>
                            </div>
                            <div className='section_icon1'>
                                <img src={section_logo2} alt="" />
                                <h6>4.8</h6>
                            </div>
                        </div>
                        <p>7 Day 8 Nights</p>
                        <h6>$450/<span>peson</span></h6>
                    </div>
                    <div className="section_box">
                        <img src={section_img4} alt="img" className='section_box-img' />
                        <h5>Dizin</h5>
                        <div className="section_icon">
                            <div className='section_icon1'>
                                <img src={section_logo1} alt="" />
                                <p>Iran</p>
                            </div>
                            <div className='section_icon1'>
                                <img src={section_logo2} alt="" />
                                <h6>4.8</h6>
                            </div>
                        </div>
                        <p>5 Day 6 Nights</p>
                        <h6>$550/<span>peson</span></h6>
                    </div>
                    <div className="section_box">
                        <img src={section_img4} alt="img" className='section_box-img' />
                        <h5>Sajek Valley</h5>
                        <div className="section_icon">
                            <div className='section_icon1'>
                                <img src={section_logo1} alt="" />
                                <p>Bangladesh</p>
                            </div>
                            <div className='section_icon1'>
                                <img src={section_logo2} alt="" />
                                <h6>4.8</h6>
                            </div>
                        </div>
                        <p>3 Day 4 Nights</p>
                        <h6>$450/<span>peson</span></h6>
                    </div>
                    <div className="section_box">
                        <img src={section_img4} alt="img" className='section_box-img' />
                        <h5>Osaka Castle</h5>
                        <div className="section_icon">
                            <div className='section_icon1'>
                                <img src={section_logo1} alt="" />
                                <p>Japan</p>
                            </div>
                            <div className='section_icon1'>
                                <img src={section_logo2} alt="" />
                                <h6>4.8</h6>
                            </div>
                        </div>
                        <p>4 Day 5 Nights</p>
                        <h6>$700/<span>peson</span></h6>
                    </div>
                </div>
            </div>
        )
    }
}