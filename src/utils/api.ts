import axios from "axios"

export const signUpAPI = async (values: Object) => {
    try {
        const response = await axios.post("http://localhost:5550/users/signup", values) 
        console.log(response.data)
    }catch (error){
        console.log(error)
    }

}