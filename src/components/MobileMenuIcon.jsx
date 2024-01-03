import React from "react";
import {AiOutlineMenu} from "react-icons/ai";
const MobileMenuIcon = ({handleMenu}) => {
    return (
        <div className="flex md:hidden fixed cursor-pointer" onClick={handleMenu}>
            {/* The mobile menu icon */}
            <div className="p-1">
                <AiOutlineMenu size={22} />
            </div>
        </div>
    );
}
export default MobileMenuIcon;