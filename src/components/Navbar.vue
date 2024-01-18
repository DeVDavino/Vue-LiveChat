<template>
  <nav v-if="user">
    <!-- Navbar content goes here -->
    <div>
        <p>Hey there... {{ user.displayName}}</p>
        <p class="email">Currently logged in as... {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import "../assets/main.css"
import useLogout from "@/composables/useLogout.js"
import getUser from "@/composables/getUser.js"


export default {
  name: 'Navbar',
  // Component logic goes here

  setup() {
    const { logout, error} = useLogout()
    const { user } = getUser()

    const handleClick = async () => {
      await logout()
      if(!error.value){
        console.log('user logged out');
      }
    }

    return {handleClick, user}
  }
}
</script>

<style scoped>
/* Component styles go here */
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav p{
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }

  nav p.email  {
    font-size: 14px;
    color: #999;
  }
</style>
