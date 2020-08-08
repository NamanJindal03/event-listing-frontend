import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Card from './card'
import '../style.css';
import Navbar from './navbar'
import {displayEvent} from './helper/eventApiCalls'
function Home() {
    const [values, setValues] = useState({
        loading: true,
        error:"",
        success:false,
        events:[],
        
    })
    const {loading, error, success, events} = values;
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
    const preload = () =>{
        displayEvent()
            .then(data =>{
                if(data.error){
                    setValues({...values, error: data.error, success:false})
                }else{
                    setValues({...values, events: [...data.events], loading:false, success: true})
                    //console.log(data);
                }
                return;
            })
            .catch(err =>{
                console.log(err);
            })
        
    }
    useEffect(()=>{
        preload()  
    },[])
    const addEvents = () =>{
        console.log("here");
        return(
            <div className="align-cards">
                {success && (
                    //console.log(JSON.stringify(events)),
                    events.map((event)=>{
                        const {name, _id, location, description, dateTime, user, cost} = event
                        return <Card 
                            name = {name}
                            key = {_id}
                            location = {location}
                            description = {description}
                            dateTime = {dateTime}
                            conductedBy = {user.name}
                            contactOrganizer = {user.email}
                            cost = {cost}
                        />
                    })
                    
                )}
            </div>
        )
    }
    return (
            <>
            <Navbar/>
            {errorMessage()}
            {loadingMessage()}
            <h1 className="text-white d-flex justify-content-center"> All Events Happening Around</h1>
            <span className="d-flex justify-content-end" style={{marginRight:10}}>
                <Link to="/create-event">
                    <button className="btn btn-success ">
                        <i className="fa fa-plus" aria-hidden="true" style={{marginRight:4}}></i>Create Event
                    </button> 
                </Link>
            </span>
            {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
            {addEvents()}
            {success && events.length===0 && <div className="text-white">No Events Are There</div>}
            </>
        
    );
}

export default Home;
