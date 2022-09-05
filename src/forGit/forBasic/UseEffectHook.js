import React from 'react'
import { useState, useEffect } from 'react';

function UseEffectHook() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("useeffect")
    })
  return (
  <>
  <h1>useEffect in React {count}</h1>
  <button onClick={()=>setCount(count+1)} >Update Count</button>
  </>
    )
}

export default UseEffectHook