
function Title(props) {
    return(

            <h1 style={{textAlign: props.position, textShadow:props.textShadow, marginTop:props.marginTop, marginBottom:props.marginBottom }}> 
             {props.children}
             </h1>
    )
}

export default Title