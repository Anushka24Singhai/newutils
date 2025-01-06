import React ,{useState}from 'react'


export default function TextForm(props) {
  
  const handleUpClick = ()=>{
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event)=>{
    console.log("on changed did u");
    setText(event.target.value);
  }
  const[text,setText] = useState('Enter text here');
 
  return (
	<>
  <h1>{props.heading}</h1>
<div className="form-group">
    Enter the text to analyze
    <textarea className="form-control" value = {text} onChange = {handleOnChange} id="TextFrom" rows="3"></textarea>
  </div>
  <button className= "btn btn-primary"
   onClick={handleUpClick}>
    Convert to uppercase
  </button>
</>
  );
}
