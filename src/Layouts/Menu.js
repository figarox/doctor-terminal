import { render } from "@testing-library/react";
import React, { useState, Component } from "react";
import ListDoctor from "../Doctor/MedicalClinic";

class Menu extends Component {

render(){

    const MenuStyle = {
        position: "absolute"
    }    
    
    return ( 
        <>
            <div style={MenuStyle}>
                <ListDoctor/>
            </div>
        </>
     );
}
}
export default Menu;
