import React, { useState, Component } from "react";

const SettingTerminal = (props) => {

    const BoxTable = {
        position: "absolute",
        width: "100%",
        top: "83px",
        height: "87.5%",
        overflow: "auto",
        display: "flex",

    }
    const Table = {
        position: "absolute",
        width: "100%",

    }
    const BoxTerminal = {
        top: "100px",
        left: "50px",
        position: "relative",
        width: "40vw",
        minHeight: "700px",
        backgroundColor: "rgb(252, 252, 252)",
        margin: "30px",
        border: "1px solid black",
        display: "flex",
    }
    const BoxName = {
      position: "absolute",
      backgroundColor: "rgb(0, 110, 255)",
      width: "100%",
      height: "82px",
      color: "white",
      padding: "17px",
    }
    const tdstyle = {
        width: "20%",
        paddingLeft: "15px"
    }

    const hours = [
        {
            id: 1,
            rowtime: ["8:00","8:15","8:30","8:45","9:00","9:15","9:30","9:45","10:00","10:15","10:30","10:45","11:00","11:15","11:30","11:45","12:00","12:15","12:30","12:45","13:00","13:15","13:30","13:45"],
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

    if(isactive === "true" && IdDoctor != 0){
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
                                <td style={tdstyle}>
                                    {time} - {time}
                                </td>
                                <td>
                                    "fdfsdfsd"
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