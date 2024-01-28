import "../../css/PropsComponent.css"
import "../../css/NavBar.css"

function PropsComponent(props){
    return(
        <div style={{"backgroundColor":"teal",color:"black"}}>
            Hello,{props.name} This is {props.course} class
        </div>
    )
}
export default PropsComponent
