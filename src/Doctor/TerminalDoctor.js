import React, { useState, Component } from "react";
import PageMain from "../Page/Terminal";
import SettingTerminal from '../Doctor/settingTerminal';
import '../Style/App.css'

const HowDoctor = (props) => {
    const text = { 
        backgroundColor: "DodgerBlue",
        width: "200px",
        height: "50px",
        padding: "5px",
        margin: "5px",
        color: "white",
        fontSize: "16px",
        position: "relative",
        cursor: "pointer",
        left: "40px",
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
    const errortype = {
        color: "red",
    }

    const selectDoctor = props.select
    const [doctorname, setDoctorname] = useState(null);
    const [doctorid, setDoctorid] = useState("");
    const [isclick, setIsclick] = useState("false")
    const [error,setError] = useState("false")

    const optionDoctor = (props) =>{
        setDoctorname(props.target.value)
        setIsclick("false")
    }
    
    const handleIdDoctor = () => {
        if(doctorname != null){
            setDoctorid(List.find(List => List.name === doctorname).id);
            setIsclick("true")
        }else{
            setError("true");
            if(error === "true"){
                <div style={errortype}>
                     <p>Choose a Doctor</p>
                </div>
         }
    }
}
    
    if(selectDoctor != "none"){
        return(
            <>
                    <select onChange={optionDoctor} style={text}>
                        {List.filter(List => List.jaki === selectDoctor).map(filteredName => (
                            <option key={filteredName.id}>
                            {filteredName.name}
                            </option>
                        ))}
                    </select>
                <button onClick={handleIdDoctor} active={isclick}>Wyszukaj</button>
                <SettingTerminal name={doctorname} value={doctorid} active={isclick} />
            </>
        );           
    }else{
        return(<></>); // return null object   
    }

}
 
export default HowDoctor;