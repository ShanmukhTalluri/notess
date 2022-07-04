import React from "react";
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";
function Navbar(props){
    return(<>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode_} bg-${props.mode_}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <h2>My Notes App</h2>
    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>
      <form className="d-flex">
        ...
      <div class={`form-check form-switch ${props.text_changegreen}`}>
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglegreen}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">{props.text_badal_green}</label>
</div>
<div class={`form-check form-switch ${props.text_changered}`}>
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglered}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">{props.text_badal_red}</label>
</div>

        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div> */}
  </div>
  <div class={`form-check form-switch ${props.text_change}`}>
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">{props.text_badal_}</label>
</div>
</nav>
    </>);
}
Navbar.propTypes = {
    title:PropTypes.string,
    about:PropTypes.string,
}
Navbar.defaultProps = {
    title:"Notes App",
    about:"aboutnnnnnnnnn",
}
export default Navbar;