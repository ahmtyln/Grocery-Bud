import React from 'react'

const ClearItems = ({ inputList, setInputList,alert,setAlert}) => {
    const showAlert = () => {
        const { show, msg, bg } = alert;
        setAlert({ show: true, msg: "List has zero item", bg: "info" })
        setTimeout(() => {
            setAlert(alert)
        }, 1000);
    }

    const clearAll = () => {
        setInputList([]);
        showAlert();
    }

    return (
        <div>
            {inputList[0] ? <button className="clear-items" onClick={clearAll} type="submit">Clear All</button> : null}
        </div>
    )
}

export default ClearItems
