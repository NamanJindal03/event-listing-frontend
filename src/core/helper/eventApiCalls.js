import API from "../../backend"
import { isAuthenticated} from "../../auth/index"

export const createEventCall = event =>{
    console.log(isAuthenticated().token);
    if(isAuthenticated()){
        var bearer = `bearer ${isAuthenticated().token}`
    }
    
    console.log(bearer);
    console.log(JSON.stringify(event));
    return fetch (`${API}/event/create-event`,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization : bearer,
        },
        body: JSON.stringify(event)
    })
    .then(response =>{
        return response.json();
    })
    .catch(err =>{
        console.log(err);
    })
}
export const displayEvent = event =>{
    console.log(isAuthenticated().token);
        if(isAuthenticated()){
            var bearer = `bearer ${isAuthenticated().token}`
        }
        
        return fetch (`${API}/event/all-events`,{
            method: "GET",
            headers:{
                
                Authorization : bearer,
            }
        })
        .then(response =>{
            console.log("api response")
            return response.json();
        })
        .catch(err =>{
            console.log(err);
        })
}
