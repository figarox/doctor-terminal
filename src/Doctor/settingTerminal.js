import React, { useState, Component } from "react";

const BoxTable = {
    position: "absolute",
    width: "100%",
    top: "85px"
  }
const Table = {
position: "absolute",
width: "100%",
}

const List = [
{
id: "1",
howTime: "15",
startTime: "8:00",
endTime: "15:00",
},
]

const SettingTerminal = () => {
 
    const [howtime, setHowTime] = useState('15')
    const [startTime, setStartTime] = useState('8:00')
    const [endtime, setEndTime] = useState('15:00')

    const ListTerminal = () => {
        
    }
 
    return (  
        <div style={BoxTable}>
            <table style={Table}>
                {ListTerminal}
            </table>
        </div>
    );
}
 
export default SettingTerminal;