import React,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showalert("converted to uppercase","success")
       }
    const handlelClick=()=>{
        // console.log("clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showalert("converted to lowercase","success")
    }
    const handlecleanClick=()=>{
        // console.log("clicked"+text);
        let newText='';
        setText(newText)
        props.showalert("text have been cleared","success")
    }
    
    const handleOnChange=(event)=>{
        //onchange ke liye listen nhi krenge toh hm usko change ni kr skte the
        // console.log("Onclicked");
        setText(event.target.value);//using to enter text in textarea
    }

    const handleCopy=()=>{
        // console.log("I am a copy");
        // var text=document.getElementById("mybox");
        // text.select();
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showalert("text have been copied","success")
    }

    const handleExtraspaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showalert("extra spaces removed","success")
        
    }

    const [text,setText]=useState('')
    //hooks is used
    // const [text,setText]=useState('Enter TExt here') 
    //if u wanna change the inner text use setText
    // text="new text"; //wrong way to change the state
    // setText("new text"); //correct way to change the state


    return (
        <>
       
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2 >{props.heading}</h2>
        <div className="mb-3">
            
            <textarea className="form-control " value={text} onChange={handleOnChange}id="mybox" style={{background: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
            
         </div>
        
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handlelClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handlecleanClick}>Clean Text </button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text </button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraspaces}>Remove extra space</button>
    
    </div>
    <div className="container " style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h2>Preview</h2>
            {/* <p>{text}</p> */}
            <p>{text.length>0?text:"nothing to preview"}</p>
        </div>
 </>
  );
}
