/*
 File: About.jsx
 A functional component for rendering About Section of Website.
*/
import React from "react";
import AboutBackground from "../assets/AboutBackground.png";
import AboutBackgroundImage from "../assets/AboutBackgroundImage.png";
import Heading from "../layouts/Heading";
import SubscribeButtonClickEvent from "../services/ClickEventService";
const About = () => {
    const handleButtonClick = () => {
        // Assuming you want to redirect to the YouTube channel
        SubscribeButtonClickEvent({ redirectTo: "YoutubeChannel" });
      };
    return (
        <div className="min-h-screen relative">
            <div className="absolute -z-10 w-1/4">
                <img src= {AboutBackground} alt=""></img>
                {/**Background Image For About */}
                <div className= " absolute top-40 pl-5 z-20 ">
                    <img src={AboutBackgroundImage} alt=""></img>
                </div>
            </div>
            {/**About page written content */}
            <div className="flex flex-col absolute top-40 right-0 p-10 w-3/4 -z-10">
                <Heading title = "Hello, I'm Priyanka Joshi"/>
                <p className="text-HomeTextColor text-ClampForHomeText md:text-ellipsis">
                The aim of my channel is to simplify commerce education by providing comprehensive lessons in a step-by-step manner, with a strong emphasis on practical applications. The content covers various subjects, including Corporate Accounting for B.Com and M.Com, basic to advanced Accountancy for class 11 and 12 CBSE, Economics, Business Studies, and Simplified Accounting in both Hindi and English. Additionally, I cover Taxation topics such as GST, INCOME TAX, and TDS. It's important to note that all videos are copyrighted and intended for the benefit of students who may not have access to expensive coaching. Any commercial use of the videos or content is strictly prohibited.
                </p>
                <button className="btn-primary" onClick={handleButtonClick}>
                    Learn Now
                </button>                   
            </div>
        </div>
    );
}
export default About;