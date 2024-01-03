/*
 File: Contact.jsx
 A functional component for rendering Contact Section.
*/
import React, { useState } from "react";
import Heading from "../layouts/Heading";
import ContactImage from "../assets/ContactImage.png";
import ContactService from "../services/ContactService";
const Contact = () => {
    //Maintaining state to get values from front-end form
    const[username, setUsername] = useState("");
    // Handler to handle send-email click
    const HandleSendEmailClick = () => {
        const req = {
            username: username,
        };
        ContactService(req);
    }
    
    return(
        <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
            <Heading title="Contact Here"/>
            <div className=" flex flex-col md:flex-row justify-between w-full">
                <form className="w-full md:w-2/5 space-y-5 pt-20">
                    {/**Username field */}
                    <div className="flex flex-col">
                        <label htmlFor ="userName"> Your Name</label>
                        <input 
                            className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Enter your name"
                            onChange={(e)=> setUsername(e.target.value)}
                        />
                    </div>
                    {/**Email field */}
                    <div className="flex flex-col">
                        <label htmlFor ="email"> Your Name</label>
                        <input 
                            className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter your e-mail"
                        />
                    </div>
                    {/** Button to send Message */}
                    <button className="btn-primary" onClick={HandleSendEmailClick}>
                        Send Message
                    </button> 
                </form>
                <div className="w-full md:w-2/4">
                    <img src= {ContactImage} alt=""/>
                </div>
            </div>
        </div>
    );

}
export default Contact;