/*
 File: NavBar.jsx
 A functional component for rendering NabBar.
*/
import React, { useState } from "react";
import {Link} from "react-scroll";
import MobileMenuIcon from "./MobileMenuIcon";
const NavBar = ()=>{
    // Using State to sat the value of menu as false 
    const[menu, setMenu] = useState(false);
    // Handle menue will toggle the value of menu
    const handleMenu = () => {
        setMenu(!menu);
    }
    return (
        <div className="top-0 w-full pt-6 fixed ">
            <div className="flex flex-row relative">
                <div className="absolute left-10 top-0">
                    <Link to = "/" className="font-extrabold text-2xl p-1 cursor-pointer">
                        ABC
                    </Link>
                </div>
                <div className="absolute top-0 right-10 hidden md:flex gap-10 text-2xl font-semibold text-NavbarIconsColor cursor-pointer">
                    <Link to= "home" spy={true} smooth={true} duration={500} className="nav-icons">
                        Home
                    </Link>
                    <Link to= "about" spy={true} smooth={true} duration={500} className="nav-icons">
                        About
                    </Link>
                    <Link to= "tutorials" spy={true} smooth={true} duration={500} className="nav-icons">
                        Tutorials
                    </Link>
                    <Link to= "contact" spy={true} smooth={true} duration={500} className="nav-icons">
                        Contact
                    </Link>
                </div>
                {/* Mobile Menu Icon Component */}
                <MobileMenuIcon handleMenu={handleMenu} />
            </div>

            <div className={` ${menu ? "translate-x-0" : "-translate-x-full"} md:hidden fixed flex flex-col absolute bg-[#ffffff] z-30 left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}>
                <Link to="home" spy={true} smooth={true} duration={500} className="nav-mobile-icons">
                    Home
                </Link>
                <Link to="about" spy={true} smooth={true} duration={500} className="nav-mobile-icons">
                    About
                </Link>
                <Link to="tutorials" spy={true} smooth={true} duration={500} className="nav-mobile-icons">
                    Courses
                </Link>
                <Link to="contact" spy={true} smooth={true} duration={500} className="nav-mobile-icons">
                    Contact
                </Link>
            </div>
        </div>
    )
}
export default NavBar;