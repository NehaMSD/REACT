import React from 'react'
function propsComponent(props){
    return(
        <div>
            Hello,{props.name} This is {props.course} class
        </div>
    )
}
export default propsComponent