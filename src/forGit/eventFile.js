import React from 'react'


function Eventfile() {
    const display=()=>{
        alert("Welcome to ReactJS Event")
    }
    return (
    <button onClick={display}>Click here for Event</button>
  )
}

export default Eventfile