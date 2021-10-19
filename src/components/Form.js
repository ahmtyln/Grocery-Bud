import React, { useState } from 'react'
import FormList from './FormList';
import ClearItems from "./ClearItems";

const Form = ({ setInput, input, setAlert, alert }) => {
    const [inputList, setInputList] = useState([])
    const[isEditing,setIsEditing] = useState(false)
    const[editId,setEditId] = useState(null)

    const onFormSubmit = (e) => {
        e.preventDefault();
        const { show, msg, bg } = alert;
        if (!input) {
            setAlert({ show:true, msg:"enter value", bg:"danger" })
            setTimeout(() => {
                setAlert(alert)
            }, 1000); 
        } else if(input && isEditing){
            setInputList(inputList.map((item) =>{
                if(item.id === editId){
                    return {...item,title:input}
                }
                return item
            }))
            setInput("");
            setEditId(null);
            setIsEditing(false);
            setAlert({ show:true, msg:"Value Changed", bg:"success" })
            setTimeout(() => {
                setAlert(alert)
            }, 1000); 
        } else {
            setInputList([...inputList, { id: new Date().getTime().toString(), title: input, completed:true }]);
            setAlert({ show:true, msg:"Item added", bg:"success" })
            setTimeout(() => {
                setAlert(alert)
            }, 1000);
            setInput("");
        }

    };

    const editItem = (id) =>{
        const spesificItem = inputList.find((item) => item.id===id);
        setIsEditing(true);
        setEditId(id);
        setInput(spesificItem.title)
    }
    

    return (
        <div className="container-form">
            <form className="form-control" onSubmit={onFormSubmit}>
                <input className="input-text" type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="e.g eggs" />
                <button className="input-submit" type="submit">{isEditing ? "Edit" : "Submit" }</button>
                <FormList inputList={inputList} setInputList={setInputList} alert={alert} setAlert={setAlert} editItem={editItem}  />
                <ClearItems inputList={inputList} setInputList={setInputList} alert={alert} setAlert={setAlert} />
            </form>


        </div>
    )
}

export default Form
