import React from "react";
class StateComponent extends React.Component{ //extend-Component class //oops-inheritance(JAVA)
    constructor(){
        super()
        this.state={
            name:"KEC",
            course:"MERN"
        }
    }
    changeState=()=>{
        console.log("KONGU ENGINEERING COLLEGE") //use state should be used when we come to hooks
    }
    render(){
        return(
            <div>
                <h1>This is State Component.</h1>
                <h2><p>Hello,<b>{this.state.name}</b><br></br>This is {this.state.course} class.</p></h2> 
                <h3> I am changing the state of {this.state.name} to {this.changeState()}</h3>
                <button onClick={this.changeState}>Click me to change the state</button>        
            </div>

        )
    }
}
export default StateComponent;
