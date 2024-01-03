import React from "react";
import NavBar from "./NavBar";
import HomeBackground from "../assets/HomeBackground.png";
import HomeBackgroundImage from "../assets/HomeBackgroundImage.png"
import Heading from "../layouts/Heading";
import SubscribeButtonClickEvent from "../services/ClickEventService";
const Home = () => {
    const handleButtonClick = () => {
        // Assuming you want to redirect to the YouTube channel
        SubscribeButtonClickEvent({ redirectTo: "YoutubeChannel" });
      };
    return (
        <div className="md:min-h-screen ">
            {/** Rendering Navigation Bar */}
            <NavBar/>
            {/** Rendering Home page data */}
            <div className="static">
                {/**Background Banner Image */}
                <div className="absolute -z-10 top-0 right-0 w-1/4">
                    <img src={HomeBackground} alt=""></img>                   
                    {/**Background Image For home */}
                    <div className= "absolute top-5 md:top-40 pr-30 z-20">
                        <img src={HomeBackgroundImage} alt=""></img>
                    </div>
                </div>  
                {/**Home page written content */}
                <div className="flex flex-col relative top-20 md:top-40 left-10 p-10 w-3/4 -z-10">
                    <Heading title = "LEARN FROM THE WELL CURATED LECTURES"/>
                    <p className="text-HomeTextColor text-ClampForHomeText">
                        Unlock Your Potential:
                        Embark on a transformative learning experience designed to unlock your full academic potential.
                        From fundamental concepts to advanced strategies, this series is your key to mastering commerce.
                    </p>
                    <button className="btn-primary" onClick={handleButtonClick}>
                        Learn Now
                    </button>                   
                </div>      
            </div>
        </div>        
    );
}
export default Home;