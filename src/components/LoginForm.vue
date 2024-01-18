<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input type="email" required placeholder="email" v-model="email">
            <input type="password" required placeholder="password" v-model="password">
            <div class="error">{{ error }}</div>
            <button>Log in</button>
        </form>
    </div>
    
</template>

<script>
import { ref } from 'vue';
import useLogin from '@/composables/useLogin';

export default {
    // props and context are used for emitting events which we will use to switch between the login and signup form (redirect to chatroom)
    setup(props, context){
        //refs, are used to track the data that the user fills into the input field of the form
        const email = ref('');
        const password = ref('');

        // login composable that handles the login logic
        const { error, login } = useLogin();

        // methods
        const handleSubmit = async () => {
            await login(email.value, password.value);
            if(!error.value) {
                context.emit('login');
            }
        }

        return {
            email,
            password,
            handleSubmit,
            useLogin,
            error,
        }
    }
};

</script>

<style>
/* Your component styles go here */
</style>
