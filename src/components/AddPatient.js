import React, { Component , useState} from "react";
import '../Style/AddTask.css';

const AddPatient = (props) => {

    const text = {
        width: "250px",
        height: '30px',
        borderRadius: "5px",
        margin: "5px",
        padding: "5px",
    }
    const boxFrom = {
        position: "relative",
        width: "570px",
        height: "400px",
        padding: "20px",
        backgroundColor: "rgb(238, 238, 245)",
        top: "130px",
        margin: "0 auto",
        borderRadius: "15px",
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    }
    const Button = {
        position: "relative",
        padding: "2px",
        borderRadius: "15px",
        color: "black",
        backgroundColor: "rgba(6, 113, 235, 0.287)",
        border: "2px solid rgba(6, 113, 235, 0.774)",
    }
    const [AddPatient, setAddPatient] = useState([
            {
                name: "",
                lastname: "",
                date:  "",
                pesel: "",
                domicile: "",
                numberCity: "",
                city: "",
                doctor: "",
            }
    ])

    const handle_name = (e) => {
        setAddPatient({[e.target.name]: e.target.value})
        }

   const spr = (e) => {
    setAddPatient(
        {
        name:  e.target.value,
        lastname:  e.target.value,
        date:   e.target.value,
        pesel:  e.target.value,
        domicile:  e.target.value,
        numberCity:  e.target.value,
        city:  e.target.value,
        doctor:  e.target.value,
    }
    )
}

   const handleClick = () => {
       const {name,lastname, date, pesel, domicile, numberCity, city, doctor} = AddPatient
       props.addF(name,lastname, date, pesel, domicile, numberCity, city, doctor)
       console.log(AddPatient)
   }

    const boxadd = props.box
    if(boxadd === true){
        return ( 
            <>
                    <div style={boxFrom}>
                        <div>   
                            <label>
                                <input type="text" style={text} placeholder="Imie" value={AddPatient.name} onChange={handle_name}/><br/>
                                <input type="text" style={text} placeholder="Nazwisko" value={AddPatient.lastname}/><br/>
                                <input type="date" style={text} placeholder="Data urodzenia" value={AddPatient.date} min="0" max="1"/><br/>
                                <input type="number" style={text} placeholder="Pesel" value={AddPatient.Pesel} min="0" max="1"/><br/>
                                <input type="text" style={text} placeholder="Adres zamieszkania" value={AddPatient.domicile}/><br/>
                                <input type="text" style={text} placeholder="Kod Pocztowy" value={AddPatient.numberCity}/><br/>
                                <input type="text" style={text} placeholder="Miasto" value={AddPatient.city}/><br/>
                                <input type="text" style={text} placeholder="Przypisany Lekarz" value={AddPatient.doctor}/><br/>
                            </label>
                            <button style={Button} onClick={handleClick}>Dodaj Pacjeta</button><br></br>
                            <button style={Button} onClick={spr}>Spr</button>

                         </div>
                    </div>
            </>
         );
    }else{
        return null
    }

}
 
export default AddPatient;