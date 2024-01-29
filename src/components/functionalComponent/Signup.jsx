import { Link } from "react-router-dom"

const Signup=()=>{
    return( 
        <div>
            <h1>Signup</h1> 
            <form> 
                <label for="name">Username: </label> 
                <input type="text"/><br></br><br></br> 
                <label for="email">Email: </label> 
                <input type="email"/><br></br><br></br> 
                <label for="password">Password: </label> 
                <input type="password"/><br></br><br></br> 
                <label for="cpassword">Confirm Password: </label> 
                <input type="password"/><br></br><br></br> 
                <input type="submit"/> 
                <div class="signup"> 
                <p>Already have an Account?</p> 
                <Link to = "/Login">Login</Link> 
               </div> 
           </form>
        </div>
    )
}

export default Signup;