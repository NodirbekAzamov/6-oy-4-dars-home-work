import React, {Component} from "react";
import "./style.scss"
import footer_img1 from "../images/footer_img1.svg"
import footer_img2 from "../images/footer_img2.svg"
import footer_img3 from "../images/footer_img3.svg"
import footer_img4 from "../images/footer_img4.svg"
export class Footer extends Component {
    render() {
        return(
            <footer>
                <div className="footer_boxs">
                    <div className="footer_box">
                        <h5>Trevland</h5>
                        <p>Contact us</p>
                        <a href="#" className="footer-a">@shovasatkhira88.com</a>
                        <div className="footer_link">
                            <img src={footer_img1} alt="" />
                            <img src={footer_img2} alt="" />
                            <img src={footer_img3} alt="" />
                            <img src={footer_img4} alt="" />
                        </div>
                    </div>
                    <div className="footer_box">
                        <ul>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Our story</a></li>
                            <li><a href="#">Benefits</a></li>
                            <li><a href="#">Branding</a></li>
                        </ul>
                    </div>
                    <div className="footer_box">
                        <ul>
                            <li><a href="#">Legal</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privecy Policy</a></li>
                            <li><a href="#">Terms of use</a></li>
                        </ul>
                    </div>
                    <div className="footer_box">
                        <h6>SUBSCRIBE NOW</h6>
                        <div className="footer_icon">
                            <input type="email" placeholder="Email" />
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}






