import { NavLink } from "react-router-dom";

export default function Navbar (props){
    return(
        <nav className={`navbar bg-${props.mode} border-bottom border-body navbar-expand-lg`} style= {{boxShadow: '0 .5rem 1rem #00000026, inset 0 -1px #ffffff26'}} data-bs-theme={props.mode}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        } aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                                        <NavLink className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        } to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                                        <NavLink className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        } to="/contact">Contact</NavLink>
                </li>
            </ul>
            <div className="form-check form-switch" >
                <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleMode}  />
                <label className="form-check-label" htmlFor="switchCheckDefault" 
                style= {{color: props.darkModeTextColor}}>{props.mode.charAt(0).toUpperCase() + props.mode.slice(1)} Mode</label>
            </div>
          </div>
        </div>
      </nav>
    );
}