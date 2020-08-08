import React, {useState} from 'react'
import Navbar from '../core/navbar'
import {createEventCall} from './helper/eventApiCalls'

const CreateEvent = () =>{
    //using react hooks to declare states
    const [values, setValues] = useState({
        name : "",
        description: "",
        location: "",
        dateTime: "",
        cost:"",
        error: "",
        success:false
    })
    //desctructing states 
    const {name, description, location,  dateTime, cost, error, success} = values;

    //updating states when form is filled - using highorder functions
    const handleChange = name => event =>{
        setValues({...values, error:false, [name]:event.target.value})
    }
    //upon clicking the submit button
    const onSubmit = event => {
        event.preventDefault();
        setValues({...values, error:false})
        //calling the createEventCall api
        createEventCall({name, description, location, dateTime,cost})
            .then(data =>{
                //if error then set the error state and success state
                if(data.error){
                    setValues({...values, error: data.error, success:false})
                }else{
                    //clearing all state as success
                    setValues({...values, name:"", description:"", location:"", dateTime:"",cost:"",error: "", success: true})
                }
            })
            .catch(err =>{
                console.log(err);
            })
    }
    //form 
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
                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    //if event succesfully created then displays a success message
    const successMessage = () => (
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-success" style={{display: success ? "" : "none"}}> New Event Succesfully Created</div>
            </div>
        </div>
    )
    //if event fails to create then displays error message
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
            <h1 className="text-white d-flex justify-content-center"> Create Event</h1>
            {successMessage()}
            {errorMessage()}
            {eventCreationForm()}
            {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
        </>
        
    )
}
export default CreateEvent;