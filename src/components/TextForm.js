import React,{useState} from 'react'

export default function
    TextForm(props) {
        const [text,setText]=useState('Heya!'); //check 7 file
        // text="comming? or not?"//can't direct set the state you have to use the function setText for the updation/modification 
        // setText("NEeww TEXT");//correct way to change the state
        const handleUpClick =()=>{
            // console.log("Uppercase was clicked")
            let newText = text.toUpperCase();
            setText(newText)
        }
        const handleLoClick =()=>{
            let newText = text.toLowerCase();
            setText(newText)
        }
        const handleOnChange =(event)=>{
            // console.log("OnChange")
            setText(event.target.value);// whatever the targeted tag value is, set it to that and let the user able to write text
        }
        const handleCopyClick =()=>{
            var text= document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value)
        }
        const handleExtraSpaces=()=>{
            let newText=text.split(/[ ]+/);
            setText(newText.join(" "))
        }
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>
               Convert to Uppercase 
            </button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>
               Convert to Lowercase 
            </button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
               Copy text 
            </button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
               Remove extra spaces
            </button>
        </div>
        <div className='container'>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
