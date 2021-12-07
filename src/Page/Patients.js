import React, { useState, Component } from 'react';
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { Route } from 'react-router';
import Menu from '../Layouts/Menu';

const BoxPatient = {
    padding: "55px",
    paddingLeft: "100px",
    width: "70vw",
    height: "20vh",
    display: "flex",
}

const PagePatient= () => {

    const counter = 1;
    const patient = [
        {
        id: 0,
        ImieNazwisko: 'Arek Kupicki',
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
        ImieNazwisko: 'Maciej Roznawski',
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
        ImieNazwisko: 'Natalia Górka',
        date: '2021-11-21',
        important: false,
        active: true,
        pesel: "9823123312",
        domicile: "Agnieszki Osickiej 18",
        numberCity: "76-200",
        city: "Słupsk",
        doctor: "Dr Machniak",
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

    const addTask = (ImieNazwisko, date, important, pesel, domicile, numberCity, city, doctor) => {
        const patient = {
            id: counter,
            ImieNazwisko,
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
            <input type="text" onChange={searchPatient} value={spatientname} placeholder="Wpisz imie i nazwisko lub pesel"></input>
            <div style={BoxPatient}>
                <TaskList patient={statepatient} delete={deleteTask} change={changeTaskStatus} search={spatientname}/>
            </div>
        </>
     );
  
}
 
export default PagePatient;



