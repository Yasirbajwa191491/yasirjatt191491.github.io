import React from 'react';

const Datasave = (props) => {
    return (
        <div>
        <div style={{color:"black",height:"700px",width:"100%",backgroundColor:"white"}}>
            <p>{props.Name} {props.Email}  {props.Password} {props.Number} </p><br/>
            </div>
        </div>
    )
}

export default Datasave;
