<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input type="text" required placeholder="display name" v-model="displayName">
            <input type="email" required placeholder="email" v-model="email">
            <input type="password" required placeholder="password" v-model="password">
            <button>Sign up</button>
        </form>
    </div>
    
</template>

<script>
import useSignup from '@/composables/useSignup';
import { ref } from 'vue';

export default {

    setup(){

        const { error, signup } = useSignup();

        // refs, tracking what user types in the different inputs fields
        const displayName = ref('');
        const email = ref('');
        const password = ref('');
        
        // methods
        const handleSubmit =  async () => {
            await  signup(email.value, password.value, displayName.value);
            // only going to run if there is no error
            console.log('user signed up');
        }

        return {
            displayName,
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
