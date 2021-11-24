import React, { useState, Component } from "react";
import PageMain from "../Page/Terminal";
import SettingTerminal from '../Doctor/settingTerminal';
import '../Style/App.css'

const HowDoctor = (props) => {
    const text = {
        backgroundColor: "DodgerBlue",
        top: "100%",
        width: "200px",
        height: "50px",
        padding: "5px",
        margin: "5px",
        color: "white",
        fontSize: "16px",
        position: "relative",
        cursor: "pointer",
    }
    const List = [
            {
            id: 0,
            name: "-- Wybierz Lekarza --", 
            jaki: "Ogolna", 
            },
        {
        id: 1,
        name: "Dr Machniak", 
        jaki: "Ogolna", 
        },
        {
        id: 2,    
        name: "Dr Ladach", 
        jaki: "Ogolna" , 
        },
        {
            id: 3,
            name: "-- Wybierz Lekarza --", 
            jaki: "Okulista", 
            },
        {
        id: 4,
        name: "Dr Mikulski", 
        jaki: "Okulista" , 
        },
        {
        id: 5,
        name: "Dr Jerzyński", 
        jaki: "Okulista" , 
        },
    ]
    const selectDoctor = props.select
    const [doctorname, setDoctorname] = useState("");
    const [doctorid, setDoctorid] = useState("");
    const [isclick, setIsclick] = useState("")

    const optionDoctor = (props) =>{
        setDoctorname(props.target.value)
        setIsclick("false")
    }
    
    const handleIdDoctor = () => {
        setDoctorid(List.find(List => List.name === doctorname).id);
        setIsclick("true")
    }
    
    if(selectDoctor != "none"){
        return(
            <>
                <div>
                    <select onChange={optionDoctor} style={text}>
                        {List.filter(List => List.jaki === selectDoctor).map(filteredName => (
                            <option key={filteredName.id}>
                            {filteredName.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button onClick={handleIdDoctor} active={isclick}>Wyszukaj</button>

                <div>
                    <SettingTerminal name={doctorname} value={doctorid} active={isclick} />
                </div>
            </>
        );           
    }else{
        return(<><div></div></>); // return null object   
    }

}
 
export default HowDoctor;