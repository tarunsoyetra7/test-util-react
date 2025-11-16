import { useState } from "react"

export default function TextBox(props) {

    const[text , updateText] = useState('');

    const handelOnChange = (event) => {
        updateText(event.target.value);
    }

    const handleCaseChange = (event) => {
        if(event.target.value === 'Uppercase') {
            updateText(text.toUpperCase());
            props.showAlert("Text coverted to uppercase");
        }
        else if(event.target.value === 'Lowercase') {
            updateText(text.toLowerCase());
            props.showAlert("Text coverted to uppercase");
        }  
        else {            
            updateText('');
            props.showAlert("Text cleared");
        }
    }

    const handleOnCopy = () => {
        var copyText = document.getElementById("myTextBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text copied to clipboard");
    }

    return (
        <div className="container my-5">
            <h3 style={{color: props.textAreaStyle.color}}>{props.heading}</h3>
            <textarea className="form-control my-3" value={text} onChange={handelOnChange} id="myTextBox" rows="6" style={{backgroundColor: props.textAreaStyle.backgroundColor, color: props.textAreaStyle.color}}></textarea>
            <button className={`btn btn-${props.mode === 'dark' ? 'outline-info' : 'primary'} mx-2`} onClick={handleCaseChange} value="Uppercase">Uppercase</button>
            <button className={`btn btn-${props.mode === 'dark' ? 'outline-info' : 'primary'} mx-2`} onClick={handleCaseChange} value="Lowercase">Lowercase</button>
            <button className={`btn btn-${props.mode === 'dark' ? 'outline-info' : 'primary'} mx-2`} onClick={handleOnCopy} value="clear">Copy Text</button>
            <button className={`btn btn-${props.mode === 'dark' ? 'outline-info' : 'primary'} mx-2`} onClick={handleCaseChange} value="clear">Clear</button>
        </div>
    )
}
