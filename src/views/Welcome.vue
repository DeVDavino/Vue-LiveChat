<template>

    <div class="welcome container">
        
        <h1>Welcome</h1>
        <SignupForm />
       
    </div>

</template>

<script>
import SignupForm from '@/components/SignupForm.vue'

    export default {
        name: 'Welcome',
        components: {
            SignupForm
        },
    }

</script>

<style scoped>

        .welcome {
            text-align: center;
            padding: 20px 0px;
        }
</style>
