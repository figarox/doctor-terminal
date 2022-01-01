import React from "react";

const AddStylePatient = {
    position: "relative",
    top: "-25px",
    padding: "2px",
    marginLeft: "350px",
    borderRadius: "15px",
    color: "black",
    backgroundColor: "rgba(6, 113, 235, 0.287)",
    border: "2px solid rgba(6, 113, 235, 0.774)",
}
const AddButton = (props) => {
    
    if(props.number === true){
        return (  
            <div>
              <button style={AddStylePatient} onClick={() => props.add()}>Dodaj Pacjeta</button>
         </div>
        );
    }else{
        return null
    }

}
 
export default AddButton;