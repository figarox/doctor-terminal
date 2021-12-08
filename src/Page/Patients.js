import React, { useState, Component } from 'react';
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { Route } from 'react-router';
import Menu from '../Layouts/Menu';

const BoxPatient = {
    padding: "55px",
    paddingLeft: "100px",
    width: "80vw",
    height: "90vh",
    display: "flex",
}
const WinPatient = {
    width: "900px",
    height: "100%",
}
const PostBox = {
    width: "400px",
    height: "100px",
    backgroundColor: "rgb(240, 240, 245)",
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    borderRadius: "25px",
    padding: "20px",
    color: "DodgerBlue"
}

const inputtext = {
    width: "300px",
    height: "30px",
    borderRadius: '5px',
}

const PagePatient= () => {

    const counter = 1;
    const patient = [
        {
        id: 0,
        nameAndLastName: "Arek Kupicki",
        name: 'Arek',
        lastname: 'Kupicki',
        date: '2021-11-21',
        important: false,
        active: true,
        pesel: "01232101333",
        domicile: "Agnieszki Osickiej 18",
        numberCity: "76-200",
        city: "Słupsk",
        doctor: "Dr Ladach",
        },
        {
        id: 1,
        nameAndLastName: "Maciej Roznawski",
        name: 'Maciej',
        lastname: 'Roznawski',
        date: '2021-11-21',
        important: false,
        active: true,
        pesel: "01210201412",
        domicile: "Agnieszki Osickiej 18",
        numberCity: "76-200",
        city: "Słupsk",
        doctor: "Dr Ladach",
        },
        {
        id: 2,
        nameAndLastName: "Natalia Górka",
        name: 'Natalia',
        lastname: 'Górka',
        date: '2021-11-21',
        important: false,
        active: true,
        pesel: "9823123312",
        domicile: "Agnieszki Osickiej 18",
        numberCity: "76-200",
        city: "Słupsk",
        doctor: "Dr Machniak",
        },
        {
        id: 3,
        nameAndLastName: "Maciej Krolak",
        name: 'Maciej',
        lastname: 'Krolak',
        date: '2021-11-21',
        important: false,
        active: true,
        pesel: "01210201412",
        domicile: "Agnieszki Osickiej 18",
        numberCity: "76-200",
        city: "Słupsk",
        doctor: "Dr Ladach",
        },
    ]
    const [statepatient, setStatepatient] = useState(patient);
    const ifactive = statepatient.filter(patient => patient.active === "false").map(patient => patient.active)
        console.log(ifactive)

     
    
   const changeTaskStatus = (id) => {
        const patient = Array.from(statepatient)
        patient.forEach(task => {
                if(task.id === id){
                    task.active = false;
            }

        })
        setStatepatient(patient)
    }

    const addTask = (nameAndLastName, name, lastname, date, important, pesel, domicile, numberCity, city, doctor) => {
        const patient = {
            id: counter,
            nameAndLastName,
            name,
            lastname,
            date,
            important,
            active: true,
            pesel,
            domicile,
            numberCity,
            city,
            doctor,
            }
            counter++;
            console.log(patient, counter)

            this.setState(prevState => ({
                patient: [...prevState.patient, patient]
            }))
            return true;
        
    }

    const deleteTask = (id) => {
        const patient = Array.from(statepatient)
        patient.forEach(task => {
            if(task.id === id){
                task.active = true;
             }
        })
        setStatepatient(patient)
    }

    const [spatientname, setSpatientname] = useState(null)

    const searchPatient = (e) => {
        const cos = e.target.value;
        setSpatientname(cos)
    }

    return ( 
        <> 
            <div style={BoxPatient}>
            <div style={PostBox}>
            <p>Wpisz imie nazwisko lub pesel</p>
            <input type="text" style={inputtext} onChange={searchPatient} value={spatientname} placeholder="Wpisz dane"></input>
            </div>
                <div style={WinPatient}>
                    <TaskList patient={statepatient} delete={deleteTask} change={changeTaskStatus} search={spatientname}/>
                </div>
            </div>
        </>
     );
  
}
 
export default PagePatient;



