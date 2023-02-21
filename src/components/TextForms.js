import React ,{useState} from 'react';
//import {Translator, Translate} from 'react-auto-translate';

export default function TextForms(props) {
const handleUpClick=()=>{
  setText(text.toUpperCase());
}

const handleClear=()=>{
  setText("");
}

const handleOnChange=(event)=>{
//console.log("On change");
setText(event.target.value);

}
const handleLowClick=()=>{
  setText(text.toLowerCase());
}
  const [text,setText]=useState("Enter text here!");
  return (
    <>
    <div className='container'>
        <div className="mb-3" > 
        <label htmlFor="myBox" className='form-label' > {props.heading}</label>
        <textarea className='form-control'onChange={handleOnChange} value={text} id='myBox' rows="9"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase!</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase!</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>


    </div>
    <div className="container my-3">
      <h1>Yor text Summmary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes to read.</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

TextForms.deaultProps={
  heading : "Enter text here"
}