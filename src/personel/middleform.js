
import { NavLink } from 'react-router-dom'
import React,{useState} from 'react'
import './buttoncss.css';


//  export default function Middleform(props) {
 export default function Middleform(props) {


  const[mystyle,setmystyle] = useState({
    backgroundColor:"black",
    color:"white"}
  )
  const[text1,text2]=useState(
    "Enable light mode"
  )
//  const togglem =()=>{
//     if(mystyle.color=='white'){
//       setmystyle({
//         backgroundColor:"white",
//         color:'black',
//       })
//       text2("Enable Dark Mode")
//     }
//       else{
//        setmystyle( {backgroundColor:"black",
//         color:"white"
//       })
//       text2("enable lightmode")
//     }
//  }
//  const togglem =()=>{
//     if(mystyle.color=='white'){
//       setmystyle({
//         backgroundColor:"white",
//         color:'black',
//       })
//       text2("Enable Dark Mode")
//     }
//       else{
//        setmystyle( {backgroundColor:"black",
//         color:"white"
//       })
//       text2("enable lightmode")
//     }
//  }
    const[text, settext] = useState("")

    const onchn=(cont)=>{
      settext(cont.target.value)
    }

    const oncl=(e)=>{
      e.preventDefault()
      const newtext = text.toUpperCase()
      settext(newtext)
      console.log("working",newtext)
      props.showalert("Converted to uppercase successfully","success")
    }
    const onuc=(e)=>{
      e.preventDefault()
      const newtext = text.charAt(0).toUpperCase() + text.slice(1)
      settext(newtext)
      console.log("working",newtext)
      props.showalert("Converted to uppercase successfully","success")
    }
    const onlo=(e)=>{
      e.preventDefault()
      const newtext = text.toLowerCase()
      settext(newtext)
      console.log("working",newtext)
      props.showalert("Converted to lowercase successfully","success")
    }
    const cltxt=(e)=>{
      e.preventDefault()
      const newtext = ("")
      settext(newtext)
      console.log("working",newtext)
      props.showalert("Cleared successfully","success")
    }
   return (
    
  <div className='container my-3'>
    <div className='buttons'>
    <ul>
    <li><NavLink to="/" className="b">Home</NavLink></li>
    <li><NavLink to="/about" className="b">About</NavLink></li>
    </ul>
    </div>
     <div className='container' style = {{backgroundColor:props.mode==='dark'?'#343a40':'white'}}>
       <form>
  <div className="form-group">
    <label for="exampleInputEmail1"  style={{color:props.mode==='dark'?'white':'black'}} ><h4>Enter the text below to analyze</h4></label>
    <input type="text"   className="form-control" id="exampleInputEmail1"    value = {text} onChange = {onchn} aria-describedby="emailHelp" />
  </div>
  <button type="submit" className="btn btn-primary" onClick={oncl}>Uppercase</button>


  <button type="submit" className="btn btn-primary mx-2" onClick={onlo}>Lowercasee</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={onuc}>Uppercase 1st letter</button>
  <button type="submit" className="btn btn-primary mx-2" onClick={cltxt}>Cleartext</button>
</form>
<h4 className='my-4' style={{color:props.mode==='dark'?'white':'black'}}>
  Your text summary
</h4>

<p style={{color:props.mode==='dark'?'white':'black'}}>
  the characters are {text.length} and words are {text.split(" ").length -1 }
</p>
<p style={{color:props.mode==='dark'?'white':'black'}}>
  {0.008 * (text.split(" ").length -1)} minutes read
</p>
<h4 style={{color:props.mode==='dark'?'white':'black'}}>
  Preview
</h4>
<p style={{color:props.mode==='dark'?'white':'black'}}>
{text.length>0?text:"Enter something to preview it here"}
</p>
{/* <button type="submit" className="btn btn-primary " onClick={togglem}>{text1}</button> */}
     </div>
     {/* <NavLink to="/about">aboutt</NavLink> */}
     {/* <br></br> */}
     {/* <NavLink to="/">home</NavLink> */}
     </div>
   )
}
