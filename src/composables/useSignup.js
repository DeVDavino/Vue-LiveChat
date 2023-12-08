import { projectAuth } from "@/firebase/config";
import { ref } from "vue"


const error = ref(null);

// function that allows the user to signup
// if there is an error, it will be displayed, this will need to be resetted otherwise it will keep showing the user the error
const signup = async (email, password, displayName) => {
    error.value = null;

    try {
        // await is used to wait for the promise to resolve (either success or fail)
        // projectAuth is the firebase auth service, createUserWithEmailAndPassword is a method that creates a new user with the specified email and password
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        if (!res) {
            throw new Error('Could not complete the signup')
        }
        await res.user.updateProfile({ displayName })
        error.value = null
        console.log(res.user);
        return res

    } catch (err) {
        // if there is an error, it will be displayed and the error will be set to the error message
        console.log(err.message)
        error.value = err.message
    }
}

// used the return values
const useSignup = () => {

    return { error, signup }
}

export default useSignup