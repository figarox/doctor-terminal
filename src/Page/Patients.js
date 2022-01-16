import React, { useState, Component } from 'react';
import AddPatient from "../components/AddPatient";
import TaskList from "../components/TaskList";
import AddButton from '../components/AddButton';


const BoxPatient = {
    positon: "relative",
    height: "90vh",
    display: "flex",
}
const WinPatient = {
    width: "100%",
    height: "100%",
}
const PostBox = {
    positon: "absolute",
    width: "400px",
    height: "100px",
    backgroundColor: "rgb(238, 238, 245)",
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    borderRadius: "25px",
    margin: "20px 0px 0px 30px",
    padding: "20px",
    color: "DodgerBlue",
}
const inputtext = {
    width: "300px",
    height: "30px",
    borderRadius: '5px',
    padding: "10px",
    fontSize: "20px"
}

const PagePatient= () => {
    let counter = 5;
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
        domicile: "Armi Krajowej 3/2",
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
        pesel: "01240231212",
        domicile: "Kierpiszka Miszow 4",
        numberCity: "76-200",
        city: "Słupsk",
        doctor: "Dr Ladach",
        },
        {
        id: 2,
        nameAndLastName: "Natalia Jastrząb",
        name: 'Natalia',
        lastname: 'Górka',
        date: '2021-11-21',
        important: false,
        active: true,
        pesel: "98231233512",
        domicile: "Staników 2",
        numberCity: "76-200",
        city: "Słupsk",
        doctor: "Dr Machniak",
        },
        {
        id: 3,
        nameAndLastName: "Marcel Krolak",
        name: 'Maciej',
        lastname: 'Krolak',
        date: '2021-11-21',
        important: false,
        active: true,
        pesel: "04231443312",
        domicile: "Wazów 2",
        numberCity: "76-200",
        city: "Słupsk",
        doctor: "Dr Ladach",
        },
    ]
    const changeTaskStatus = (id) => {
       if(howpatient != 1){
        const patient = Array.from(statepatient)
        patient.forEach(task => {
                if(task.id === id){
                    task.active = false;
            }

        })
        setStatepatient(patient)
        setHowPatient(1)
       }
    }
    const addPatient = () => {
        setBoxadd(true)
    }
    const deleteTask = (id) => {
        const patient = Array.from(statepatient)
        patient.forEach(task => {
            if(task.id === id){
                task.active = true;
             }
        })
        setStatepatient(patient)
        setHowPatient(0)
    }
    const searchPatient = (e) => {
        const cos = e.target.value;
        setSpatientname(cos)
        setBoxadd(false)
    }
    const addtrue = () => {
        setIfaddbutton(true)
    }
    const addfalse = () => {
        setIfaddbutton(false)
    }

    const addPatientBox = (name,lastname,date,pesel,domicile,numberCity,city,doctor) => {
        const PatientAdd = {
            id: counter,
            nameAndLastName: (name,lastname),
            name: name,
            lastname: lastname,
            date: date,
            important: false,
            active: true,
            pesel: pesel,
            domicile: domicile,
            numberCity: numberCity,
            city: city,
            doctor: doctor,
        }
        counter++;
        setStatepatient(prevPatient => [...prevPatient, PatientAdd])
    }
    const [patientHook, setPatientHook] = useState(patient)
    const [statepatient, setStatepatient] = useState(patient);
    const [boxadd, setBoxadd] = useState(false)
    const [ifaddbutton, setIfaddbutton] = useState(false)
    const [spatientname, setSpatientname] = useState(null)
    const [howpatient, setHowPatient] = useState(0)

    return ( 
        <>         
          <div className="Menu">
            <div style={BoxPatient}>
                <div style={WinPatient}>
                    <div style={PostBox}>
                    <p>Wpisz imie, nazwisko lub pesel</p>
                    <input type="text" style={inputtext} onChange={searchPatient} value={spatientname} placeholder="Wpisz dane"></input>
                    <AddButton add={addPatient} number={ifaddbutton}/>
                    </div>
                    <AddPatient box={boxadd} addF={addPatientBox}/>
                    <TaskList addtrue={addtrue} addfalse={addfalse} number={ifaddbutton} patient={statepatient} add={addPatient} delete={deleteTask} change={changeTaskStatus} search={spatientname}/>
                </div>
            </div>
            </div>
        </>
     );
  
}
 
export default PagePatient;



