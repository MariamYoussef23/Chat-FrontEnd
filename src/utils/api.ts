import axios from "axios"

export const signUpAPI = async (values: Object) => {
    try {
        const response = await axios.post("http://localhost:5550/users/signup", values) 
        //saving response to local storage 
        localStorage.setItem('token', JSON.stringify(response.data.token))
    }catch (error){
        console.log(error)
    }

}