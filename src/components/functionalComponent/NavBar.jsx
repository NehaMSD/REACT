import "../../css/NavBar.css"
import { Link } from "react-router-dom"

const NavBar=()=>{
    return(
        <ol>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/reference">Reference</Link></li>
            <li><Link to="/memo">Memo</Link></li>
            <li><Link to="/callback">Callback</Link></li>
            <li><Link to="/signup">Signup</Link></li>
        </ol>
    )
}
export default NavBar;
