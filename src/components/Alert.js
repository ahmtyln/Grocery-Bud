import React from 'react'

const Alert = ({ alert }) => {
    const { show, msg, bg } = alert
    return (<div className="alert">
                {
           show &&  <div className = {bg} >
                        <p>{msg}</p>
                    </div > 
                }
            </div>
    )
}

export default Alert
