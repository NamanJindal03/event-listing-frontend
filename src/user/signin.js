import React, {useState} from 'react'
import Navbar from '../core/navbar'
import { Redirect} from 'react-router-dom'

import {signin, isAuthenticated, authenticate} from "../auth/index"
const Signin = () =>{
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        didRedirect: false
    })
    const {email, password, error, loading, didRedirect} = values;
    //fills in all the values of the user
    const {user} = isAuthenticated();
    console.log(user);
    const handleChange = name => event =>{
        setValues({...values, error:false, [name]:event.target.value})
    }
    const onSubmit = event => {
        event.preventDefault();
        setValues({...values, error: false, loading: true})
        signin({email, password})
            .then(data => {
                if(data.error){
                    setValues({...values, error: data.error, loading: false})
                }else{
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            didRedirect:true
                        })
                    })
                }
                return;
            })
            .catch(console.log("signin request failed"))
    }
    const signInForm = () =>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input onChange={handleChange("email")} className="form-control" type="email" value={email}/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input onChange={handleChange("password")} className="form-control" type="password" value={password}/>
                        </div>
                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    const loadingMessage = () => {
        return(
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
    }
    const errorMessage = () => (
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-danger" style={{display: error ? "" : "none"}}> {error}</div>    
            </div>
        </div>
    )
    const performRedirect = () =>{
        if(didRedirect){
            return <Redirect to ="/" />
            //history.push("/sign-in")
        }
    }
    return(
        <>
            <Navbar />
            <h1 className="text-white d-flex justify-content-center"> Sign In</h1>
            {loadingMessage()}
            {errorMessage()}
            {signInForm()}
            {performRedirect()}
            {/* <p className="text-white text-center ">{JSON.stringify(values)}</p> */}
        </>
        
    )
}
export default Signin;