export default function Alert(props) {
    return(
        props.alert && <div className={`alert alert-success alert-dismissible show my-3 animated-alert ${props.animation}`} role="alert">
            <strong >{props.alert.msg}</strong>
        </div>
    ); 
}