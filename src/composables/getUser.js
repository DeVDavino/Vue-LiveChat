import {ref} from 'vue'
import { projectAuth } from '@/firebase/config'

const user = ref (projectAuth.currentUser)

// fire when there is an authentication change in progress (login or logout signup)
projectAuth.onAuthStateChanged(_user => {
    console.log('user state changed, current user: ' + _user)
    user.value = _user
})

const getUser = () =>{
    return { user }
}

export default getUser