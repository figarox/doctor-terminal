import React, { useState, Component } from 'react';
import Task from './Task';

const TaskList = (props) => {

    const doneTaskStyle = {
        position: "relative",
        top: "-70%",
        left: "150px",
        width: "400px",
    }
    const activeStyle = {
        position: "relative",
        width: "850px",
        height: "80%",
        top: "4%",
        marginLeft: "50%"
    }

    const active = props.patient.filter(task => task.active);
    const done = props.patient.filter(task => !task.active );

    const addtrue = () => {
       props.addtrue()
    }
    const addfalse = () => {
        props.addfalse()
    }

    done.sort((a,b) => b.finishDate - a.finishDate)
    
    if(props.search === null || props.search === ''){
        const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>);
        const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>);
        const test2 = () => {
            if(activeTasks.length > 0){
                addfalse()
                return activeTasks
            }else{
                addtrue()
            }
        }
        return ( 
            <>
            <div style={activeStyle}>
               {test2()}
            </div>
            <div style={doneTaskStyle}>
                {doneTasks}
            </div>
            </>
         );

    }else {
        const activeTasks = active.filter(patient => patient.nameAndLastName === props.search || patient.name === props.search || patient.lastname === props.search || patient.pesel === props.search).map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>);
        const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>);
        const test2 = () => {
            if(activeTasks.length > 0){
                addfalse();
                return activeTasks
            }else{
                addtrue()
            }
        }
        return ( 
            <>
            <div style={activeStyle}>
               {test2()}
            </div>
            <div style={doneTaskStyle}>
                {doneTasks}
            </div>
            </>
         );
    }


}
 
export default TaskList; 