/*
 File: About.jsx
 A functional component to create a card containing Title and image of tutorial.
*/
import React from "react";
import CardClickEvents from "../services/ClickEventService";
const TutsCard = (props) =>{
    const handleCardClick = () => {
        // Assuming you want to redirect to the YouTube channel
        CardClickEvents({ redirectTo: props.redirectTo});
      }; 
    return (
        <div className="tut-card" onClick={handleCardClick}>
            {/**Tut card Image */}
            <div className=" w-3/5">
                <img src={props.img} alt="img" />
            </div>
            <div>
                {/**Tut card Heading */}
                <h3 className="font-semibold text-lg text-center my-5">
                    {props.title}
                </h3>
                {/**Tut card Body */}
                <p className="text-HomeTextColor text-center md:text-start">
                    {props.body}
                </p>
            </div>
        </div>
    )
}
export default TutsCard;