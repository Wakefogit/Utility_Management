const setUser = (user) => {
    localStorage.setItem("user",JSON.stringify(user));
}

 

const getUser = () => {
    let user = localStorage.getItem("user")
    if(user != "undefined"){
        return JSON.parse(user);
    }else{
        return null;
    }

}

 

const setAuthToken = (token) => {

    localStorage.setItem("authToken",token)

}

 

const getAuthToken = () => {

    return localStorage.getItem("authToken")

}

 

export {

    setUser,

    getUser,

    setAuthToken,

    getAuthToken

}

 