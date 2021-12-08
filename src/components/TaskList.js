import React from "react";
import Task from './Task';

const TaskList = (props) => {

    const doneTaskStyle = {
        position: "absolute",
    }
    const activeStyle = {
        position: "relative",
        left: "50%",
    }

    const active = props.patient.filter(task => task.active);
    const done = props.patient.filter(task => !task.active );

    done.sort((a,b) => b.finishDate - a.finishDate)

    if(props.search === null || props.search === ''){
        const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>);
        const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>);
        return ( 
            <>
            <div style={activeStyle}>
                {activeTasks.length > 0 ? activeTasks : <p>Brak Pacjętów !!! Wpisz Imie i Nazwisko</p>}
            </div>
            <div style={doneTaskStyle}>
                {doneTasks}
            </div>
            </>
         );

    }else {
        const activeTasks = active.filter(patient => patient.nameAndLastName === props.search || patient.name === props.search || patient.lastname === props.search || patient.pesel === props.search).map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>);
        const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>);
        return ( 
            <>
            <div style={activeStyle}>
                {activeTasks.length > 0 ? activeTasks : <p>Brak Pacjętów !!! Wpisz Imie i Nazwisko</p>}
            </div>
            <div style={doneTaskStyle}>
                {doneTasks}
            </div>
            </>
         );
    }


}
 
export default TaskList; 