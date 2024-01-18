import {  ref } from "vue"; 
import { projectAuth } from "@/firebase/config";

const error = ref(null);

const login = async (email, password) => {
    error.value = null;

    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password);
        // if there is no response, throw an error and if there is no error and a response, return the response
        error.value = null;
        return res;

    } catch (err) {
        // if there is an error, it will be displayed and the error will be set to the error message
        console.log(err.message);
        error.value = "Incorrect login credentials";
    }
}

const useLogin = () => {
    return { error, login }
}


export default useLogin;