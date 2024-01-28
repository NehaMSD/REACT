import { useState } from "react";
import { useCallback } from "react";
const Callback = () => {
    const [count, setCount] = useState(0);
    const list=[10,20,30,40,50]   //{0:10,1:20,2:30,3:40,4:50}
    const list1=[...list,60,70]
    list.forEach(element => {
       console.log(element) 
    });
    const handlingCallbackFunc = useCallback(() => {
        console.log(`Button clicked or not if yes print the count if not dont print,Count:${count}`);
    }, [count])

    return (
        <div>
            <h1>This is Callback example.</h1>
            <h2>Count : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Add one</button><br></br><br></br>
            <button onClick={handlingCallbackFunc}>Callback Count</button>
            <ul>
              {list1.map((val,index) => (
                <li key={index}>{val}</li>
              ))}
            </ul>
        </div>
    )
}
export default Callback;