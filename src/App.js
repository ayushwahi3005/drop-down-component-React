import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import List from './Components/list';
import Selected from './Components/selected';
import React,{useState} from 'react'

function App() {
  const[list,updateList]=useState([])
  const onClicking=(ele)=>{
    updateList([...list,ele])
    document.getElementById(ele).disabled=true;
  }
  const onRemove=(ele)=>{
    updateList(list.filter(e=>{
      return e!==ele
    }))
    document.getElementById(ele).disabled=false;
  }
  const onRemoveAll=()=>{
    list.filter(e=>{
      return document.getElementById(e).disabled=false;
    })
    updateList([])
    
  }

  return (
    <div className="App">
      <div className='container'>

      <Selected list={list} onRemove={onRemove} onRemoveAll={onRemoveAll}/>
     
      <List onClicking={onClicking} />
       
    </div>
    </div>
  );
}

export default App;
