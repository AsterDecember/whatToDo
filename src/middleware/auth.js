import axios from "axios";

/**
 * Api auth
 */

const host = 'https://floating-plains-96602.herokuapp.com/api'

export const signup = (user)=>{
    return axios.post(`${host}/signup`,user,{})
        .then(r=> r.data)
        .catch(e=> e.response)
}

export const login = (user)=>{
    console.log('middleware data:',user)
    const {payload} = user
    console.log('middleware data 2:',payload)
    return axios.post(`${host}/login`,payload,{withCredentials:true})
        .then(r=> {
            console.log('response middleware after api:',r)
            return r
        })
        .catch(e=> e.response)
}


export const getProfile = () =>{
    return axios.get(`${host}/profile`,{withCredentials: true})
        .then(r=> r.data)
        .catch(e=> e.response)
}

export const setUserLocal = (user) =>{
    localStorage.setItem('user', JSON.stringify(user))
}