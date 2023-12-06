<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input type="email" required placeholder="email" v-model="email">
            <input type="password" required placeholder="password" v-model="password">
            <button>Log in</button>
        </form>
    </div>
    
</template>

<script>
import { ref } from 'vue';

export default {

    setup(){
        //refs, are used to track the data that the user fills into the input field of the form
        const email = ref('');
        const password = ref('');

        // methods
        const handleSubmit = () => {
            console.log(email.value, password.value);
        }

        return {
            email,
            password,
            handleSubmit
        }
    }
};

</script>

<style>
/* Your component styles go here */
</style>
