import API from "../backend"

//hitting signup api
export const signup = user =>{  
    return fetch (`${API}/user/register`,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response =>{
        return response.json();
    })
    .catch(err =>{
        console.log(err);
    })
}

//hitting signin api
export const signin = user =>{
    return fetch (`${API}/user/login`,{
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response =>{
        return response.json();
    })
    .catch(err =>{
        console.log(err);
    })
}

//hitting signout api
export const signout = next =>{
    if(typeof window !=="undefined"){
        localStorage.removeItem("jwt");
        if(isAuthenticated()){
            var bearer = `bearer ${isAuthenticated().token}`
        }
        next();
        return fetch(`${API}/user/logout`, {
            method: 'GET',
            headers:{
                Authorization : bearer,
            }
        })
        .then(response => console.log("signout success"))
        .catch(err => console.log(err))
    }
}

//setting tokens in the localStorage
export const authenticate = (data, next) =>{
    if(typeof window !=="undefined"){
        localStorage.setItem("jwt", JSON.stringify(data))
        next();
    }
}

//authenticating user function
export const isAuthenticated =() =>{
    if(typeof window =="undefined"){
        
        return false
    }
    if(localStorage.getItem("jwt")){
        
        return JSON.parse(localStorage.getItem("jwt"))
    }else{
        return false;
    }
}