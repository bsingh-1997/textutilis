import './App.css';
import Header from './personel/header';
import Middle from './personel/middle';
import { useState } from 'react';
import Middleform from './personel/middleform';
import Alert from './personel/alert';
import React from 'react';
import Content from './personel/content';
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
      document.body.style.backgroundColor = '#343a43'
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
      {/* <Content/> */}
      <BrowserRouter>
      <Header name="Text-Utils" mode={mode} tgm={tgm} />
      <Alert alert={alert} />

        <Routes>

          <Route path='/textutilis' element={<Middleform showalert={showalert} mode={mode} />} ></Route>
          {/* <Route exact path='/textutilis' element={<Content/>}></Route> */}
          {/* <Route exact path="/about" element={<Middle />} /> */}
          <Route exact path="/about" element={<Middle />}></Route>

        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;