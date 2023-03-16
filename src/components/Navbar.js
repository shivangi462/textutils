//import { getByTitle } from '@testing-library/react'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
                <a className="nav-link active" href="/about">{props.aboutus}</a>
          </li>
          {/* <li className="nav-item">
                <Link className="nav-link active" to="/blog">{props.blog}</Link>
          </li> */}
           {/* <a className="nav-link disabled">Disabled</a> */}
        </ul>
        
        
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        
            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
          
        </div>

      </div>
    </div>
  </nav>
  
  )
}
 //check so that only string is entered
Navbar.propTypes={
    // title : PropTypes.string,
    title : PropTypes.string.isRequired,
    aboutus : PropTypes.string.isRequired
}
//u can set default title
Navbar.defaultProps={
    title: 'set title here',
    aboutus : 'about textUtils',
    blog : 'Blog here'
}