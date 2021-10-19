import React from 'react'
import { FaEdit } from "react-icons/fa"
import { MdDelete,MdOutlineIncompleteCircle } from "react-icons/md"


const FormList = ({ inputList, setInputList, alert, setAlert,editItem}) => {

    const showAlert = () => {
        const { show, msg, bg } = alert;
        if (inputList.length === 1) {
            setAlert({ show: true, msg: "List has zero item", bg: "info" })
            setTimeout(() => {
                setAlert(alert)
            }, 1000);
        } else {
            setAlert({ show: true, msg: "Item Removed", bg: "danger" })
            setTimeout(() => {
                setAlert(alert)
            }, 1000);
        }
    }

    const deleteItem = ({ id }) => {
        setInputList(inputList.filter((item) => item.id !== id));
        showAlert();
    }

    const completeItem = ({id,completed}) =>{
       const element = inputList.findIndex(elem =>elem.id===id);
       const newInputList = [...inputList];
       newInputList[element] = {
           ...newInputList[element],
           completed:!completed,
       };

       setInputList(newInputList);
    }


    return (
        <div className="container-formlist">
            {

                inputList && inputList.map((item) => {
                    const { id, title,completed } = item;
                    return (<div className="form-list-container" key={id}>
                        <li className="form-list" >
                            <input className= { completed ? "list" : "unlist" }  type="text" value={title} />
                            <div className="completed-icon" onClick={() => completeItem(item)}><MdOutlineIncompleteCircle /></div>
                            <div className="edit-icon" onClick={() => editItem(id)}><FaEdit /></div>
                            <div className="delete-icon" onClick={() => deleteItem(item)}><MdDelete /></div>
                        </li>
                    </div>)
                })

            }
        </div>
    )
}

export default FormList;
