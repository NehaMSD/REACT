import "../../css/PropsComponent.css"
import "../../css/NavBar.css"

function PropsComponent(props){
    return(
        <div style={{"backgroundColor":"yellow",color:"white"}}>
            Hello,{props.name} This is {props.course} class
        </div>
    )
}
export default PropsComponent