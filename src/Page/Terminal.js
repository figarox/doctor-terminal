import React, { Component, useState} from 'react';
import { Route } from 'react-router';
import Menu from '../Layouts/Menu';
import SettingTerminal from '../Doctor/settingTerminal';

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
  color: "black",
  padding: "30px",
}

const PageMain = () => {

    return ( 
        <>
        <style>{`
        td{
         border-top:1px solid black;
         border-bottom:1px solid black;
        }
        tr,td{
          padding: 5px;
          font-size: 16px;
        }
        tr:hover{
          background-color: rgba(0, 110, 255, 0.137);
        }
      `}</style>
          <div className="Menu">
            {<Menu />}
          </div>
            <div style={BoxTerminal}>
                <div style={BoxName}>
                  
                </div>
              {<SettingTerminal/>}
            </div>
        </>
     );
}
 
export default PageMain;