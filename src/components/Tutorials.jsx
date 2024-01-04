/*
 File: Tutorials.jsx
 A functional component for rendering Tutorial Cards.
*/
import React from "react";
import TutsCard from "../layouts/TutsCard";
import Heading from "../layouts/Heading";
import AccountImage from "../assets/AccountTutImage.png";
import FinanceImage from "../assets/FinanceTutImage.png";
import EconomicsImage from "../assets/EconomicsTutImage.png";
import ManagementImage from "../assets/ManagementTutImage.png";
const Tutorials = () => {      
    return(        
        <div className="min-h-screen flex flex-col items-center md:px-32 px-5 pt-20">
            {/**Heading */}
            <Heading title="My Tutorials"/>
            {/**Cards for tutorial description*/}
            <div className="flex flex-wrap justify-center gap-6 mt-6">
                <TutsCard title="Accounts" img={AccountImage} body="Accountancy playlist for Class 11" redirectTo="AccountsPlaylist"/>
                <TutsCard title="Finance" img={FinanceImage} body="Analysis of financial statement for Class 12" redirectTo="FinancePlaylist"/>
                <TutsCard title="Economics" img={EconomicsImage} body="Economics for Class 11" redirectTo="EconomicsPlaylist"/>
                <TutsCard title="Management" img={ManagementImage} body="Accounting for Managerial Decision for M.Com." redirectTo="ManagementPlaylist"/>                 
            </div>
        </div>
    )

}
export default Tutorials;