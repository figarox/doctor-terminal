import React, { Component } from "react";
import '../Style/AddTask.css';

class AddTask extends Component {

    state = {
        text: '',
        chacked: false,
        date: new Date().toISOString().slice(0,10),
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheckBox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleClick = () => {
        const {text, checked, date} = this.state;
        const add = this.props.add(text, date, checked);
        if(add){
            this.setState({
                text: '',
                checked: false,
                date: new Date().toISOString().slice(0,10),
            })
        }
    }

    render(){
        return ( 
            <>
                <div className="FormTask">
                    <div>
                    <input type="text" placeholder="Dodaj zadanie" value={this.state.text} onChange={this.handleText}/><br/>
                        <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckBox}/>
                        <label htmlFor="important">Piorytet</label><br/>
                            <label htmlFor="date">Do kiedy zrobić</label>
                            <input type="date" value={this.state.date} onChange={this.handleDate}/>
                                  <button onClick={this.handleClick}>Dodaj zadanie</button>
                    </div>
                </div>
            </>
         );
    }

}
 
export default AddTask;