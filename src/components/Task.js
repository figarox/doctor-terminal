import React from "react";
import '../Style/AddTask.css';

const Task = (props) => {
    const SetPatient = {
        width: "120px",
        height: "30px",
        borderRadius: "10px",
        backgroundColor: "#fccb76",
        top: "35px",
        left: "25px",
        color: "black"
    }
    const DeletePatient = {
        width: "120px",
        height: "30px",
        borderRadius: "10px",
        backgroundColor: "#ff4444",
        top: "35px",
        left: "45px",
        color: "black"
    
    }
    const WindowPatient1 = {
        position: "relative",
        width: "400px",
        height: "200px",
        backgroundColor: "rgb(240, 240, 245)",
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        borderRadius: "25px",
        display: "inline-block",
        margin: "10px",
    }
    const WindowPatient2 = {
        width: "400px",
        height: "500px",
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
        position: "relative",
        top: "-20px",
        left: "20px"
    }
    const PersnalInformaton2= {
        position: "relative",
        top: "-20px",
        left: "20px"
    }

    const {name, lastname, date, id, active, pesel, domicile, numberCity, city, doctor} = props.task;

    if(active){
    return (
        <div style={WindowPatient1}>
        <div style={circle}>
            <div style={cicrleair}>
            <ion-icon name="person-outline" class="person-outline"></ion-icon>
            </div>
        </div>
            <div style={NamePatient}>
                <h4>Imię i Nazwisko</h4>
                <p>{name} {lastname}</p>
            </div>
                <div style={PersnalInformaton}>
                    <h4>Pesel</h4>
                    <p>{pesel}</p>
                </div>
                <button id="TaskButton" onClick={() => props.change(id)}>Wybierz</button>
        </div>

    );}else{
        return (
            <div style={WindowPatient2}>
            <div style={circle}>
                <div style={cicrleair}>
                <ion-icon name="person-outline" class="person-outline"></ion-icon>
                </div>
            </div>
                <div style={NamePatient}>
                    <h4>Imię i Nazwisko</h4>
                    <p>{name} {lastname}</p>
                </div>
                    <div style={PersnalInformaton2}>
                        <h4>Data urodzenia</h4>
                        <p>{date}</p>
                        <h4>Pesel</h4>
                        <p>{pesel}</p>
                        <h4>Miejsce zamieszkania</h4>
                        <p>{domicile}</p>
                        <p>{numberCity} {city}</p>
                        <h4>Przypisany Lekarz</h4>
                        <p>{doctor}</p>
                    </div>
                    <button style={SetPatient}>Edytuj Dane</button>
                    <button style={DeletePatient} onClick={() => props.delete(id)}>Usuń Pacjęta</button>
            </div>
        )
    }

}

export default Task;