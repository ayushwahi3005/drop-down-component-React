import React from 'react'
import '../App.css';

function list(props) {
  return (
    <div>
         <select className='subject' id="sub" onChange={()=>{props.onClicking(document.getElementById("sub").value)}}>
          <option className='first' id="Java" onClick={()=>{props.onclicking("Java")}}>Java</option>
          <option className='second' id="Python" onClick={()=>{props.onclicking("Python")}}>Python</option>
          <option className='third' id="C++" onClick={()=>{props.onclicking("C++")}}>C++</option>
          <option className='forth' id=".Net" onClick={()=>{props.onclicking(".Net")}} >.Net</option>
        </select>
    </div>
  )
}

export default list