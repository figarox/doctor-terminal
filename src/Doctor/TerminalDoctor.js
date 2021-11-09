import React, { useState, Component } from "react";
import PageMain from "../Page/Terminal";

const HowDoctor = (props) => {
    const text = {
        backgroundColor: "DodgerBlue",
        top: "100%",
        width: "auto",
        height: "50px",
        padding: "5px",
        margin: "5px",
        color: "white",
        fontSize: "16px",
    }
    const List = [
            {
            id: "0",
            name: "-- Wybierz Lekarza --", 
            jaki: "Ogolna", 
            },
        {
        id: "1",
        name: "Dr Machniak", 
        jaki: "Ogolna", 
        },
        {
        id: "2",    
        name: "Dr Ladach", 
        jaki: "Ogolna" , 
        },
        {
            id: "3",
            name: "-- Wybierz Lekarza --", 
            jaki: "Okulista", 
            },
        {
        id: "4",
        name: "Dr Mikulski", 
        jaki: "Okulista" , 
        },
        {
        id: "5",
        name: "Dr Jerzyński", 
        jaki: "Okulista" , 
        },
    ]

    const selectDoctor = props.select

    const [doctorname, setDoctorname] = useState(0);
    const [doctorid, setDoctorid] = useState(0);


    const optionDoctor = (props) =>{
        setDoctorname(props.target.value)
    }
            if(selectDoctor != "none"){
                return(
                    <>
                        <div>
                            <select onChange={optionDoctor} style={text}>
                              {List.filter(List => List.jaki === selectDoctor).map(filteredName => (
                                  <option>
                                   {filteredName.name}
                                  </option>
                              ))}
                            </select>
                        </div>
                    </>
                );           
            }else{
                return(<><div></div></>); // return null object   
            }

}
 
export default HowDoctor;