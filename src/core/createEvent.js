import React, {useState} from 'react'
import Navbar from '../core/navbar'
import {Link} from 'react-router-dom'
import {signup} from '../auth/index'

const CreateEvent = () =>{
    const [values, setValues] = useState({
        name : "",
        description: "",
        location: "",
        dateTime: "",
        cost:"",
        error: "",
        success:false
    })
    const {name, description, location, time, dateTime, cost, error, success} = values;
    const handleChange = name => event =>{
        setValues({...values, error:false, [name]:event.target.value})
    }
    // const onSubmit = event => {
    //     event.preventDefault();
    //     setValues({...values, error:false})
    //     signup({name, email, password, confirm_password})
    //         .then(data =>{
    //             if(data.error){
    //                 setValues({...values, error: data.error, success:false})
    //             }else{
    //                 setValues({...values, name:"", email:"", password:"", confirm_password:"",error: "", success: true})
    //             }
    //         })
    //         .catch(console.log("error in signup"))
    // }
    const eventCreationForm = () =>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input onChange={handleChange("name")} className="form-control" type="text" value={name}/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Description</label>
                            <input onChange={handleChange("description")} className="form-control" type="text" value={description}/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Location</label>
                            <input onChange={handleChange("location")} className="form-control" type="text" value={location}/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Date and Time</label>
                            <input onChange={handleChange("dateTime")} className="form-control" type="datetime-local" value={dateTime}
                                id="example-datetime-local-input"
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Event Cost</label>
                            <input onChange={handleChange("cost")} className="form-control" type="number" value={cost}/>
                        </div>
                        <button  className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    const successMessage = () => (
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-success" style={{display: success ? "" : "none"}}> New Event Succesfully Created</div>
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
            {eventCreationForm()}
            <p className="text-white text-center">{JSON.stringify(values)}</p>
        </>
        
    )
}
export default CreateEvent;