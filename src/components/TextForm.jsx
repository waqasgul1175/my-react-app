import React,{useState} from 'react'

export default function Textform(props) {
  
  const [text, setText] = useState("paste");
  
  const handleUpClick = () => {
    // alert("Uppercase was clicked" + text);
    setText(text.toUpperCase());
    let newText = text.toUpperCase();
    setText(newText);
  }
   const HandleLoClick = () => {
    // alert("Uppercase was clicked" + text);
    setText(text.toLowerCase());
    let newText = text.toLowerCase();
    setText(newText);
  }
    const handleClearClick = () => {
    setText("");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  
  return (
    <>
    <div className="container">
          <h1>{props.headings}  </h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
      <br />
          <button className="btn btn-secondary mx-1" onClick={handleUpClick}>UpperCase</button>
          <button className="btn btn-secondary mx-1" onClick={HandleLoClick}>lowerCase</button>
          <button className="btn btn-secondary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div></div>

    <div className="container my-3">
<h1>Your Text Summary </h1>
<p>{text.split(" ").length} words and {text.length} characters </p>
<p>{0.008 * text.split(" ").length} Minutes to read </p>
<h2>Preview</h2>
<div>{text}</div>
    </div>
    </>
  )
}
