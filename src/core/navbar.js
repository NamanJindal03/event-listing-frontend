import React from 'react';
import {Link, withRouter} from 'react-router-dom'

const currentTab = (history, path ) =>{
    if(history.location.pathname === path ){
        return {color: "#2ecc72"}
    }else{
        return {color: "#FFFFFF"}
    }
}
const Navbar = ({history}) =>{
    return(
        <div>
            <ul className="nav nav-tabs bg-dark">
                <li className="nav-item">
                    <Link style={currentTab(history, "/")} className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history, "/sign-up")} className="nav-link" to="/sign-up">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history, "/sign-in")} className="nav-link" to="/sign-in">Sign In</Link>
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history, "/sign-out")} className="nav-link" to="/sign-out">Sign Out</Link>
                </li>
            </ul>
        </div>
    )
}
export default withRouter(Navbar);