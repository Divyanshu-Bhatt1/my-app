import React,{useState} from 'react'



export default function TextForm(props) {

  const [text,setText]=useState('Enter text here');
  // const [styleBack,setStyleBack]=useState({
  //   color:"#042743",backgroundColor:"white"
  // })
  // const [styleTxt,setStyleTxt]=useState({
  //   color:"#042743"
  // })

  function handleUpClick(){
    console.log("Button1 is clicked")
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase","success")
  }

  function handleLoClick(){
    console.log("Button2 is clicked")
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase","success")
  }

  function handleClearClick(){
    console.log("Button3 is clicked")
    let newText=("");
    setText(newText)
    props.showAlert("Text field is empty","success")
  }

  function handleOnChange(e) // onchange and this fx is used to get the input else we can't take input the answer
  {
    console.log(e.target.value)
    setText(e.target.value)
  }

  // function changeColorTxt(){

  //    if(props.mode==='dark')
  //    {
  //       setStyleTxt({color:"white"})
  //    }else if(props.mode==='danger')
  //    {
  //     setStyleTxt({color:"white"})
  //    }else if(props.mode==='warning')
  //    {
  //     setStyleTxt({color:"white"})
  //    }else{
  //     setStyleTxt({color:"white"})
  //    }
  // }

  // function changeBack()
  // {

    // if(props.mode==='dark')
    // {
    //    setStyleBack({color:"white",backgroundColor:"grey"})
    // }else if(props.mode==='danger')
    // {
    //   setStyleBack({color:"white",backgroundColor:"red"})
    // }else if(props.mode==='warning')
    // {
    //   setStyleBack({color:"white",backgroundColor:"yellow"})
    // }else{
    //   setStyleBack({color:"#042743",backgroundColor:"white"})
    // }

  // }
  // {color:props.mode==='dark'?'white':'#042743'}

  function changeBack()
  {
    if(props.mode==='dark')
    {
       return{color:"white",backgroundColor:"grey"}
    }else if(props.mode==='danger')
    {
      return{color:"white",backgroundColor:"#EF4040"}
    }else if(props.mode==='warning')
    {
      return{color:"white",backgroundColor:"#FFE382"}
    }else{
      return {color:"#042743",backgroundColor:"white"}
    }
  }

  function word()
  {
    if(text.length===0)
    {
      return "0";
    }else{
      return (text.split(" ").length)-1
    }
  }
  
  return (
    <>
    <div className="container" style={props.styleTxt}>
    <h1>{props.heading}</h1>
   <div className="mb-3">
   {/* {backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'} */}
        <textarea className="form-control" value={text} onChange={handleOnChange} rows="8" id="my-box" style={changeBack()}></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear the Field</button>
    </div>

    <div className="container my-3" style={props.styleTxt}>
      <h1>Your text summary</h1>
      <p>{word()} words and {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text.length<0?text:"Enter the text in the text-box above to preview it"}</p>
    </div>
    </>
  )
}
