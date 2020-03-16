import React from "react";
import App from "../App";

const Form = props => (

    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="City"/>
        <button>Get Weather</button>
    </form>

)

export default Form;