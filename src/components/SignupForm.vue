<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input type="text" required placeholder="display name" v-model="displayName">
            <input type="email" required placeholder="email" v-model="email">
            <input type="password" required placeholder="password" v-model="password">
            <button>Sign</button>
        </form>
    </div>
    
</template>

<script>
import { ref } from 'vue';

export default {

    setup(){
        // refs, tracking what user types in the different inputs fields
        const displayName = ref('');
        const email = ref('');
        const password = ref('');

        // methods
        const handleSubmit = () => {
            console.log(displayName.value, email.value, password.value);
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

<style scoped>
/* Your component styles go here */
</style>
