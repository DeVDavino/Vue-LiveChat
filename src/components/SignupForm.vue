<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input type="text" required placeholder="display name" v-model="displayName">
            <input type="email" required placeholder="email" v-model="email">
            <input type="password" required placeholder="password" v-model="password">
            <!-- if there is an error the div class will be displayed, else nothing at all NULL -->
            <div class="error">{{ error }}</div>
            <button>Sign up</button>
        </form>
    </div>
    
</template>

<script>
import useSignup from '@/composables/useSignup';
import { ref } from 'vue';

export default {

    setup(props, context){

        const { error, signup } = useSignup();

        // refs, tracking what user types in the different inputs fields
        const displayName = ref('');
        const email = ref('');
        const password = ref('');
        
        // methods
        const handleSubmit =  async () => {
            await  signup(email.value, password.value, displayName.value);
            // only going to run if there is no error
            if(!error.value) {
                context.emit('signup');
            }
        }

        return {
            displayName,
            email,
            password,
            handleSubmit,
            error,
        }
    }
};

</script>

<style>
/* Your component styles go here */
</style>
