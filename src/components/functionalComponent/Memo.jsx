import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const Memo = () => {
    const [number,updateNumber] = useState(0)
    const [dark,updateTheme] = useState(false)
    const doubleNumber = useMemo(()=>{
        return doubleNumberSlow(number)
    },[number])
    console.log(doubleNumber)
        
    const theme = useMemo(() => {
        return {
        backgroundColor:dark?"black":"white",
        color:dark?"white":"black"
        }
        },[dark]);
        function doubleNumberSlow(num){
            console.log("Is it calling?")
            for(let i=0;i<100000;i++){}
            return num * 2;
    }
    return (
        <div>
            <h1>This is a Dangerous hook which is called useMemo.</h1>
            <input type="number" value={number} onChange={(event)=>updateNumber(event.target.value)}/>
            <button onClick={() => updateTheme(dark => !dark) }>click to change theme</button>
            <h2 style={theme}>The doubled number is {doubleNumber}</h2>
        </div>
    )
};

export default Memo;