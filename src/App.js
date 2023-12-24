import React,{useState} from "react"
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';

// because we can't use router in gh pages in deployement
// import {
//   BrowserRouter as Router,
//   Route,Routes
// } from "react-router-dom";


// here only one element we return which is div but if you want many then use <> </>
// let name="Divyanshu Bhatt"
function App() {

  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)
  // const [styleBack,setStyleBack]=useState({
  //   color:"#042743",backgroundColor:"white"
  // })
  const [styleTxt,setStyleTxt]=useState({
    color:"#042743"
  })

  const showAlert=(message,type)=>{
       setAlert({
        msg:message,
        type:type
       })

       setTimeout(()=>{
            setAlert(null)
       },1500)
  }

  function changeColorTxt(){

    if(mode==='dark')
    {
       setStyleTxt({color:"white"})
    }else if(mode==='danger')
    {
     setStyleTxt({color:"white"})
    }else if(mode==='warning')
    {
     setStyleTxt({color:"white"})
    }else if(mode==='light'){
     setStyleTxt({color:"white"})
    }
  }
  
  // function changeBack()
  // {
  
  //  if(mode==='dark')
  //  {
  //     setStyleBack({color:"white",backgroundColor:"grey"})
  //  }else if(mode==='danger')
  //  {
  //    setStyleBack({color:"white",backgroundColor:"#EF4040"})
  //  }else if(mode==='warning')
  //  {
  //    setStyleBack({color:"white",backgroundColor:"#FFE382"})
  //  }else {
  //    setStyleBack({color:"#042743",backgroundColor:"white"})
  //  }
  
  // }


  function toggleMode(id)
  {
    if(id==='dark'){
        if(mode==='dark'){
        setMode('light')
        document.body.style.backgroundColor='white'
        showAlert("Light mode is enabled","success")
        
       }else{
        setMode('dark')
        document.body.style.backgroundColor='#042743'
        showAlert("Dark mode is enabled","success")
       
       }
    }

    if(id==='danger'){
       if(mode==='danger') {
       setMode('light')
       document.body.style.backgroundColor='white'
       showAlert("Light mode is enabled","success")
      
      }else{
        setMode('danger')
       document.body.style.backgroundColor='#EF4040'
       showAlert("Red mode is enabled","success")
       
      }
   }

   if(id==='warning'){
     if(mode==='warning') {
     setMode('light')
     document.body.style.backgroundColor='white'
     showAlert("Light mode is enabled","success")
     
    }else{
      setMode('warning')
     document.body.style.backgroundColor='#FFE382'
     showAlert("Yellow mode is enabled","success")
     
    }
 }
        changeColorTxt()
        // changeBack()
        
}


  return (
    <>
    {/* <Router> */}
        <Navbar title="My-App" mode={mode} toggleMode={toggleMode}/>
        {/* <Navbar /> */} 
        <Alert alert={alert} />
        <div className="container my-3">
            
       

        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}  styleTxt={styleTxt} />

  {/* <Route exact path="/about" element={<About />} />
  <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}  styleTxt={styleTxt} />} /> */}
  {/* </Routes> */}
           
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
