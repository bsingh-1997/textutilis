import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from "react-router-dom"
import './buttoncss.css';

const Header = (props) => {
  return (
    <div>
<div className='container rt'>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>


  <a className="navbar-brand" href="#">{props.name}</a>

    <div className="butto" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
      <ul>
    <li><NavLink to="/textutilis" className="b" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Home</NavLink></li>
          <li><NavLink to="/about" className="b" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>About</NavLink></li>
          </ul>
    </div>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {/* <li className="nav-item active">



        <NavLink to="/abb" className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li> */}


      <li className="nav-item ">

        {/* <NavLink >abt</NavLink> */}

      </li>

      <li className="nav-item">

        {/* <NavLink className="nav-link" as={Link} to="/about">About</NavLink> */}
      </li>


      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      {/* <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li> */}
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <div className={` mx-2 custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
  <label className="custom-control-label" htmlFor="customSwitch1"  onClick={props.tgm}>Enable dark mode</label>
</div>

      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{color:props.mode==='dark'?'white':'black'}}>Search</button>
    </form>
  </div>
</nav>
      </div>
      </div>

      
  )
}

export default Header
