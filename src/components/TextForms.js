import React ,{useState} from 'react';
//import {Translator, Translate} from 'react-auto-translate';

export default function TextForms(props) {
const handleUpClick=()=>{
  setText(text.toUpperCase());
}



const handleOnChange=(event)=>{
//console.log("On change");
setText(event.target.value);
}

  const [text,setText]=useState("Enter text here!");
  return (
    <div>
        <div className="mb-3" > 
        <label htmlFor="myBox" className='form-label' > {props.heading}</label>
        <textarea className='form-control'onChange={handleOnChange} value={text} id='myBox' rows="9"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase!</button>
    </div>
  )
}

TextForms.deaultProps={
  heading : "Enter text here"
}