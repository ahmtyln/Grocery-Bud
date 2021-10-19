import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import FormList from './components/FormList';
import Alert from './components/Alert';


function App() {

  const [input,setInput] = useState("")
  const [alert,setAlert] = useState({show:false,msg:"",bg:""})

  

  return (
   <div className="container-grocery">
      <Alert alert={alert}/>
      <Header />
      <Form setInput={setInput} input={input} alert={alert} setAlert={setAlert} />
   </div>
  );
}

export default App;
