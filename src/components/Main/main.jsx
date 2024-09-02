import React from "react";
import './main.css'
import { assets } from "../../assets/assets";

const Main = () => {
    return (
        <div className="main">
           <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
           </div>
           <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can i help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to be see on an upcoming road trips</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Summarise the concept of urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest beautiful places to be see on an upcoming road trips</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest beautiful places to be see on an upcoming road trips</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder="Enter a prompt here" />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolorum, libero pariatur odit a commodi molestiae iste ipsum corporis, voluptatem beatae consectetur quo vero explicabo ratione eveniet rerum consequuntur aliquid.</p>
                </p>
            </div>
           </div>
        </div>
    )
}

export default Main;