import React from 'react'
import { NavLink } from 'react-router-dom';
import './buttoncss.css';

const Middle = (props) => {
  return (
    <>      {/* <div className='container'  > */}
        {/* <div className='buttons1'>
          <ul>
            <li><NavLink to="/textutilis" className="c">Home</NavLink></li>
            <li><NavLink to="/about" className="c">About</NavLink></li>
          </ul>
        </div> */}
        {/* <div className="accordion my-4" id="accordionExample" style={{ backgroundColor: props.mode === 'dark' ? 'white' : 'grey' }}>
          <div className="card" style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white' }}>
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button className="btn btn-link" type="button" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Introduction
                </button>
              </h2>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                {props.body1}
              </div>
            </div>
          </div>
          <div className="card" style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white' }}>
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} aria-expanded="false" aria-controls="collapseTwo">
                  available items
                </button>
              </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

                {props.body2}
                <img src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg'></img>
                
              </div>
            </div>
          </div>
          <div className="card" style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white' }}>
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button style={{ color: props.mode === 'dark' ? 'white' : 'black' }} className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
                  Collapsible Group Item #3
                </button>
              </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body">
                {props.body3}
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
      <div className='container' style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white' }}>
        <div className="jumbotron" style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white' }}>
          <h1 className="display-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Text-Utilis!</h1>
          <p className="lead" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>This is a simple text utilis app made using html,css,javascript,reactJs and github.Dark mode is also used in this website to enhance the user experience .</p>
          <hr className="my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} />
          <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>The estimated reading time is also calculated after the text is entered inside input box .</p>
          <a className="btn btn-primary btn-lg" href="#" role="button" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Learn more</a>
          
        </div>
      </div>
    </>
  )
}

export default Middle


