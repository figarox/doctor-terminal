import React, { Component } from 'react';
import { Route } from 'react-router';
import Menu from '../Layouts/Menu';

const BoxPatient = {
    padding: "55px",
    paddingLeft: "100px",
    width: "40vw",
    height: "20vh",
    display: "flex",
}
const WindowPatient = {
    width: "400px",
    height: "450px",
    backgroundColor: "rgb(240, 240, 245)",
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    borderRadius: "25px",
}
const circle = {
    left: "20px",
    top: "20px",
    width: "95px",
    height: "95px",
    borderRadius: "50%",
    backgroundColor: "DodgerBlue",
    position: "relative",
    boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
}
const cicrleair = {
    width: "91px",
    height: "91px",
    left: "2px",
    top: "2px",
    borderRadius: "50%",
    backgroundColor: "rgb(245, 245, 245)",
    position: "absolute"
}
const NamePatient = {
    position: "relative",
    width: "50%",
    height: "auto",
    left: "150px",
    top: "-55px",
}
const PersnalInformaton= {

}

const PagePatient= () => {
    return ( 
        <>  
            <div style={BoxPatient}>
                    <div style={WindowPatient}>
                    <div style={circle}>
                        <div style={cicrleair}>
                        <ion-icon name="person-outline" class="person-outline"></ion-icon>
                        </div>
                    </div>
                        <div style={NamePatient}>
                            <h4>Imię i Nazwisko</h4>
                            <p>Maciej Roznawski</p>
                        </div>
                            <div style={PersnalInformaton}>

                            </div>
                    </div>
            </div>
        </>
     );
  
}
 
export default PagePatient;



