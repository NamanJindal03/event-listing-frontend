import React from 'react'
const Card = (props)=>{
    const {name, location, description, dateTime, conductedBy, contactOrganizer, cost} = props;
    return(
        
        <div className="card mb-3" style={{maxWidth: 900,width: 500 }}>
            <h5 className="card-header">{location}</h5>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Date & Time: {dateTime}</p>
                <span>Event Cost:</span><button  className="btn btn-success">{cost}</button>
                <hr/>
                <h6 className="card title">Conducted By</h6>
                <div style={{display:'flex',justifyContent:"space-around"}}>
                    <span className="card-text">{conductedBy}</span>
                    <span className="card-text">{contactOrganizer}</span>
                </div>
                
                
            </div>
        </div>
    ) 
    
}
export default Card;