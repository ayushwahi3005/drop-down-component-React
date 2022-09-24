import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

function selected(props) {
    console.log("added",props.list)
  return (
    <div>
        <div className='selected' >
            
       
        {
            props.list.map(element=>{
              return <ul id="ele">{element}
              <button id="remove" onClick={()=>{props.onRemove(element)}}>x</button>
              </ul> 
              
            })}
        <button id="removeAll" onClick={()=>{props.onRemoveAll()}}>Remove All</button>
            
        </div>
    </div>
  )
}

export default selected