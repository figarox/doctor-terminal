import { render } from "@testing-library/react";
import React, { useState, Component } from "react";
import ListDoctor from "../Doctor/ListDoktor";

class Menu extends Component {
    
render(){
    return ( 
        <>
            <div>
                <ListDoctor/>
            </div>
        </>
     );
}
}
export default Menu;
