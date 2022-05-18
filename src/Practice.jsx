import React, { useState } from 'react'

const Practice = () => {
    const [data , setData] = useState("Hello Everybody How are You?")
    const [text , setText] = useState("On Click Me");
    const [color , setColor] = useState("red");
    
    const double = () =>{
        setData("Hello Everybody How are You?")
        setText("On Click Me");
    }

    const click = () => {
      //alert("this is work")
       setText("Plz Double click");
       setData("Plz double click & return to home page")
       setColor("green");
    }
  return (
   <>
   <div className='main' style={{backgroundColor: {color}}}>
       <div className='main-area'>
       <h1 onClick={click}>{data}</h1>
       <button onClick={click} onDoubleClick={double}>{text}</button>
       </div>
   </div>
   </>
  )
}

export default Practice;