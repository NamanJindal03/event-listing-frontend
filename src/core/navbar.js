import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth/index'

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
            <ul className="nav nav-tabs bg-dark" style={{justifyContent:"space-between"}}>
                <li className="nav-item">
                    <Link style={{color:'red'}} className="nav-link" to="/">Book My Event</Link>
                </li>
                <span style={{display:'flex'}}>
                <li className="nav-item">
                    <Link style={currentTab(history, "/")} className="nav-link" to="/">Home</Link>
                </li>
                {!isAuthenticated() && (
                    <>
                        <li className="nav-item">
                            <Link style={currentTab(history, "/sign-up")} className="nav-link" to="/sign-up">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={currentTab(history, "/sign-in")} className="nav-link" to="/sign-in">Sign In</Link>
                        </li>
                    </>
                )}
                
                {isAuthenticated() && (
                    <li className="nav-item">
                        <span className="nav-link text-warning" onClick={()=>{
                            signout(() => {
                                history.push("/sign-in")
                            })
                        }}>
                            Signout
                        </span>
                        {/* <Link style={currentTab(history, "/sign-out")} className="nav-link" to="/sign-out">Sign Out</Link> */}
                    </li>
                )}
                </span> 
            </ul>
        </div>
    )
}
export default withRouter(Navbar);