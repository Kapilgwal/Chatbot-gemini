import React, { useContext } from "react";
import './main.css';
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="User Icon" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Dev.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    {[
                        { text: "Suggest beautiful places to see on an upcoming road trip", icon: assets.compass_icon },
                        { text: "Summarize the concept of urban planning", icon: assets.bulb_icon },
                        { text: "Give me tips for a successful presentation", icon: assets.message_icon },
                        { text: "Show me some coding best practices", icon: assets.code_icon },
                    ].map((card, index) => (
                        <div key={index} className="card">
                            <p>{card.text}</p>
                            <img src={card.icon} alt="Card Icon" />
                        </div>
                    ))}
                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Enter a prompt here"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="Gallery Icon" />
                            <img src={assets.mic_icon} alt="Mic Icon" />
                            <img 
                                src={assets.send_icon} 
                                alt="Send Icon" 
                                onClick={onSent} 
                                style={{ cursor: 'pointer' }} 
                            />
                        </div>
                    </div>
                    <div className="bottom-info">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolorum, libero pariatur odit a commodi molestiae iste ipsum corporis, voluptatem beatae consectetur quo vero explicabo ratione eveniet rerum consequuntur aliquid.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
