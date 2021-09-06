import React,{useState} from 'react'

export default function Textform(props) {
    const handleupclick= () =>{
        console.log("it was clicked...")
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert('Converted to uppercase','success')
    }
    const handlelowclick= ()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    const handlecopy= ()=>{
      var text=document.getElementById('mybox')
      text.select();
      navigator.clipboard.writeText(text.value)
    }
    const handlechange=(event)=>{
        setText(event.target.value)
    }
    
    const [text,setText] = useState('');
    return (
        <>
        <div className="container">
            <div className="mb-3">
                <h1 >{props.heading}</h1>
                <label style={{color:props.mode === 'dark'?'white':'black'}} for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea style={{backgroundColor:props.mode === 'dark'?'black':'white',color:props.mode === 'dark'?'white':'black'}}  className="form-control" value={text} onChange={handlechange}  id="mybox" rows="7"></textarea>
                <button className="btn btn-primary my-3 mx-2" onClick={handleupclick}>Convert Text to UpperCase</button>
                <button className="btn btn-primary my-3" onClick={handlelowclick}>Convert Text to LowerCase</button>
                <button className="btn btn-primary my-3" onClick={handlecopy}>Copy</button>
            </div>
            <div className="container2 my-3">
                <h1  style={{color:props.mode === 'dark'?'white':'black'}}>Text Summary..</h1>
                <p  style={{color:props.mode === 'dark'?'white':'black'}}>{text.split(" ").length}words and {text.length}characters</p>
            </div>
        </div>    
        </>    
    )

}
