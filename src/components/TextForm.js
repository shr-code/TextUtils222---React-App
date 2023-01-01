import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState(''); //check 7 file
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
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text)
        // navigator.clipboard.writeText(text.value)
        // document.getSelection().removeAllRanges()
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
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
                    Copy text
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
                    Remove extra spaces
                </button>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something in the textbox to preview it"}</p>
            </div>
        </>
    )
}
