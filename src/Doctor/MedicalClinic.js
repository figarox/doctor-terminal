import React, { useState, Component } from "react";
import HowDoctor from "./TerminalDoctor";

const ListDoctor = (props) => {

    const text = {
        backgroundColor: "DodgerBlue",
        position: "relative",
        left: "40px",
        width: "200px",
        height: "50px",
        padding: "5px",
        margin: "5px",
        color: "white",
        fontSize: "16px",
        cursor: "pointer",
    }

    const [firstSelectVal, setFirstselectVal] = useState('none')
    
    const handleDoctor = (props) => { 
        setFirstselectVal(props.target.value)
    }

        return ( 
            <>
             <select onChange={handleDoctor} value={firstSelectVal} style={text}>
                    <option value="none"selected>-- Wybierz poradnie --</option>
                    <option value="Okulista">Poradnia Okulistyczna</option>
                    <option value="Ogolna">Poradnia Ogolna</option>
             </select>
                {
                    <HowDoctor value={handleDoctor} select={firstSelectVal}/>
                }
    
            </>
         );
}
export default ListDoctor;