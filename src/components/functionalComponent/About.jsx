import React, {useEffect, useState} from "react";

const About=()=>{
    const[tabName,setTabName]=useState("You are free from cold don't take any pills to avoid side effects.")
    const updateTablet=()=>{
        setTabName("Welcome to cold club take this tablet citracin to cure it. ");
    }
    const updateTablet1=()=>{
        setTabName("Welcome to fever club take this tablet Dolo-650 to cure it. ");
    }
    const updateTablet2=()=>{
        setTabName("Welcome to epilepsy club take this tablet Levipil to cure it. ");
    }

    useEffect(()=>{
        console.log("Side effects are sleepy and drowsiness");
    },[]);

    return(
        <div>
            <h1>{tabName}</h1>
            <button onClick={updateTablet}>Click me if you get cold</button>
            <button onClick={updateTablet1}>Click me if you get fever</button>
            <button onClick={updateTablet2}>Click me if you get epilepsy</button>

        </div>
    )
}

export default About;