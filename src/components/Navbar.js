import React from 'react'
import PropTypes from 'prop-types'
// import {
//   Link
// } from "react-router-dom";


export default function Navbar(props) {
  const findId=(e)=>{
    console.log(e.target.id)
    const i=e.target.id

    let ele=document.body.getElementsByTagName('input');
    for(let j=0;j<3;j++)
    {
       if(ele[j]!==e.target && ele[j].checked)
       {
        ele[j].checked=false;
       }
    }
    props.toggleMode(i)
  
  }



  return (
     <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}

      <div className={`form-check mx-3 form-switch text-${props.mode==='light'?'dark':'light'}`}  >
  <input className="form-check-input" type="checkbox" id="dark" name="check" value="1" onClick={findId}/>
  <label className="form-check-label" htmlFor="dark">Enable Dark Mode</label>
</div>

<div className={`form-check mx-3 form-switch text-${props.mode==='light'?'danger':'light'}`}  >
  <input className="form-check-input" type="checkbox" id="danger" name="check" value="1" onClick={findId}/>
  <label className="form-check-label" htmlFor="danger">Enable Red Mode</label>
</div>

<div className={`form-check mx-3 form-switch text-${props.mode==='light'?'warning':'light'}`}  >
  <input className="form-check-input" type="checkbox" id="warning" name="check" value="1" onClick={findId} />
  <label className="form-check-label" htmlFor="warning">Enable Yellow Mode</label>
</div>
    </div>
  </div>
</nav>        
     </>
  )
}

Navbar.propTypes={title:PropTypes.string} // ye btata hai ki ham value string hi bheje agr number bhejenge toh error dikayega
// Navbar.propTypes={title:PropTypes.string.isRequired}  // agr hum title nhi bhejenge as a proper then error will occur
Navbar.defaultProps={ // if we don't send the props then it will set title as that string
    title:"Set-Title-Here"
}