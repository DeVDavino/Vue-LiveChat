<template>
    <form>
        <textarea placeholder="Type a message and hit enter to send..." v-model="message" @keypress.enter.prevent="handleSubmit">
        </textarea>
        <div class="error">{{error}}</div>
    </form>
</template>

<script>
import getUser from '@/composables/getUser'
import useCollection from '@/composables/useCollection';
import {ref} from 'vue'
// import firebase so that timestamp can be used
import firebase from 'firebase/app';

export default {
    setup(){
        // check for the current logged in user
        const { user } = getUser()
        const message = ref('')
        const { addDoc, error } = useCollection('messages')
        
        // function gets fired when the user clicks on a message
        const handleSubmit = async () =>{
            // creating the object
            const chat = {
                name: user.value.displayName,
                // getting the message and applying it to the chat object
                message: message.value,
                // get the current timestamp of the message and apply it to the chat object
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            }
            // logging the message to the console
            // console.log(chat)

            await addDoc(chat)
            // reset the message value to an empty string
            if(!error.value){
                message.value = ''
            }
        }

        return {message, handleSubmit, error}
    } 
}
</script>

<style scoped>
    form{
        margin: 10px;
    }

    textarea{
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;

    }
</style>