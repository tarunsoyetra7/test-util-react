export default function Alert(props) {
    return(
        props.alert && <div className={`alert alert-success alert-dismissible show my-3 animated-alert ${props.animation}`} role="alert">
            <strong >{props.alert.msg}</strong>
            {/* Progress Bar */}
            <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${props.progress}%` }}
                ></div>
            </div>
        </div>
    ); 
}