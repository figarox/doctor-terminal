import React, { useState, Component } from "react";

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

class SettingTerminal extends Component{

    state = {
        doctor: [
            {
            id: 1,
            howTime: "15",
            startTime: "8:00",
            endTime: "14:00",
            rowtime: ["8.00","8.15","8.30"],
            },
            {
            id: 2,
            howTime: "10",
            startTime: "9:00",
            endTime: "14:00",
            rowtime: ["9.00","9.15","9.30"],
            },
         ]
        }

    render(){
        return (  
            <div style={BoxTable}>
                <table style={Table}>
                    {
                        this.state.doctor.find(test => test.id === 1).rowtime.map(test2 => 
                        { 
                        return <tr> 
                            <td>
                                {test2}
                            </td>
                        </tr>})                          
                    }
                </table>
            </div>
        ); 
    }

}
export default SettingTerminal;