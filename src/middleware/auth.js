import axios from "axios";

/**
 * Api auth
 */
const signup = (user)=>{
    return axios.post(`${host}/signup`,user,{})
        .then(r=> r.data)
        .catch(e=> e.response)
}

const login = (user)=>{
    return axios.post(`${host}/login`,user,{withCredentials:true})
        .then(r=> r.data)
        .catch(e=> e.response)
}

const getProfile = () =>{
    return axios.get(`${host}/profile`,{withCredentials: true})
        .then(r=> r.data)
        .catch(e=> e.response)
}
