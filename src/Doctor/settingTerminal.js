import React, { useState, Component } from "react";

const SettingTerminal = (props) => {

    const BoxTable = {
        position: "absolute",
        width: "100%",
        top: "85px"
    }
    const Table = {
        position: "absolute",
        width: "100%",
        marginTop: "25px",
    }
    const BoxTerminal = {
        position: "relative",
        width: "40vw",
        minHeight: "75vh",
        backgroundColor: "rgb(252, 252, 252)",
        margin: "30px",
        border: "1px solid black",
        display: "flex",
    }
    const BoxName = {
      position: "absolute",
      backgroundColor: "rgb(0, 110, 255)",
      width: "100%",
      height: "15%",
      color: "white",
      padding: "35px",
    }
    const hours = [
        {
            id: 1,
            rowtime: [1,1,1],
        },
        {
            id: 2,
            rowtime: [2,2,2],
        }, 
        {
            id: 3,
            rowtime: [3,3,3],
        },
        {
            id: 4,
            rowtime: [4,4,4],
        }, 
        {
            id: 5,
            rowtime: [5,5,5],
        },

    ]

    const IdDoctor = props.value;
    const isactive = props.active;

    const [DoctorHours,setDoctorHours] = useState(hours)

    if(isactive === "true"){
        return (  
            <div style={BoxTerminal}>
            <div style={BoxName}>
              {props.name}
            </div>
            <div style={BoxTable}>
                <table style={Table}>
                    {
                        hours.find(how => how.id === IdDoctor).rowtime.map(time => {
                        return (
                            <tr>
                                <td>
                                    {time}
                                </td>
                            </tr>
                        )
                    })
                 }   
                </table>
            </div>
            </div>
        ); 
    }else{
        return null 
    }

    }

export default SettingTerminal;