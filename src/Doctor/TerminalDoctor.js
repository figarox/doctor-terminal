import React, { useState, Component } from "react";

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
            id: 0,
            name: "Dr Machniak", 
            jaki: "Ogolna", 
            },
            {
            id: 1,    
            name: "Dr Ladach", 
            jaki: "Ogolna" , 
            },
            {
            id: 2,
            name: "Dr Mikulski", 
            jaki: "Okulista" , 
            },
            {
            id: 3,
            name: "Dr Jerzyński", 
            jaki: "Okulista" , 
            },
        ]

        const selectDoctor = props.select
        
            if(selectDoctor != "none"){
                return(
                    <>
                        <div>
                            <select style={text}>
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
                return(
                    <>
                    <div>
                        
                    </div>
                    </> // return null object
                );   
            }


}
 
export default HowDoctor;