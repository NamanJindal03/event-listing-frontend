import React, {useState} from 'react'
import Navbar from '../core/navbar'
import {Link} from 'react-router-dom'
import {signup} from '../auth/index'

const Signup = () =>{
    const [values, setValues] = useState({
        name : "",
        email: "",
        password: "",
        confirm_password:"",
        error: "",
        success:false
    })
    const {name, email, password, error, success, confirm_password} = values;
    const handleChange = name => event =>{
        setValues({...values, error:false, [name]:event.target.value})
    }
    const onSubmit = event => {
        event.preventDefault();
        setValues({...values, error:false})
        signup({name, email, password, confirm_password})
            .then(data =>{
                if(data.error){
                    setValues({...values, error: data.error, success:false})
                }else{
                    setValues({...values, name:"", email:"", password:"", confirm_password:"",error: "", success: true})
                }
            })
            .catch(console.log("error in signup"))
    }
    const signUpForm = () =>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input onChange={handleChange("name")} className="form-control" type="text" value={name}/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input onChange={handleChange("email")} className="form-control" type="email" value={email}/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input onChange={handleChange("password")} className="form-control" type="password" value={password}/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Confirm Password</label>
                            <input onChange={handleChange("confirm_password")} className="form-control" type="password" value={confirm_password}/>
                        </div>
                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    const successMessage = () => (
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-success" style={{display: success ? "" : "none"}}> New Account was created succcessfully</div>
            </div>
        </div>
    )
    const errorMessage = () => (
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-danger" style={{display: error ? "" : "none"}}> {error}</div>    
            </div>
        </div>
    )
    return(
        <>
            <Navbar />
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
            <p className="text-white text-center">{JSON.stringify(values)}</p>
        </>
        
    )
}
export default Signup;