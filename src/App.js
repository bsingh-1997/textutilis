import logo from './logo.svg';
import './App.css';
import Header from './personel/header';
import Middle from './personel/middle';
import Middlecont from './personel/middlecont';
import Middlecont2 from './personel/middlecont2';
import { useState } from 'react';
import Middleform from './personel/middleform';
import Alert from './personel/alert';


import React from 'react';
import ReactDOM from 'react-dom'

// import {Switch} from 'react-router-dom';
// import {Route,Switch} from 'react-router';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const tgm = () => {
    if (mode === 'light') {
      setmode("dark")
      document.body.style.backgroundColor = 'grey'
      document.title = 'Text-utility Dark mode'
      showalert("Dark mode has been enabled sucessfully", "success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.title = 'Text-utility'
    }
  }
  return (
    <>
      {/* <Header name="Text-Utils" mode={mode} tgm={tgm} /> */}
      {/* <Alert alert={alert} /> */}

      <BrowserRouter basename='/textutilis'>
        {/* <Switch> */}
        <Routes>
          {/* <Route path="/textutilis" element={<Middleform showalert={showalert} mode = {mode}/>}></Route> */}
          <Route exact path='/textutiliui' element={<Header name="Text-Utils" mode={mode} tgm={tgm} />}/>
          {/* <Route exact path='/about' element={<Alert alert={alert} />}/> */}
          <Route exact path='/textutilier' element={<Middleform showalert={showalert} mode={mode} />} />
          <Route exact path="/abouft" element={<Middle />} />
        </Routes>

        {/* </Switch> */}
      </BrowserRouter>


      {/* <Middle 
    body1="this is stuff for body 1"
    body2="this is stuff for body two"
    body3="this is stuff for body 3ree"
    mode={mode}/>
    <Middlecont mode = {mode}/> */}

    </>
  );
}

export default App;