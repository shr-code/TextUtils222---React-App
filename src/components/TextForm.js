import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Heya!'); //check 7 file
    // text="comming? or not?"//can't direct set the state you have to use the function setText for the updation/modification 
    // setText("NEeww TEXT");//correct way to change the state
    const handleUpClick = () => {
        // console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case","success")

    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case","success")

    }
    const handleOnChange = (event) => {
        // console.log("OnChange")
        setText(event.target.value);
        // whatever the targeted tag value is, set it to that and let the user able to write text
    }
    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied","success")

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces","success")

    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}></textarea>
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
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in the textbox to preview it"}</p>
            </div>
        </>
    )
}
