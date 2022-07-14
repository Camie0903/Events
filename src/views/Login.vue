<template>
    <div class="Login"> <h1>Welcome Please Login</h1>
        <form @submit.prevent="login">
            <input type="text" v-model="email" placeholder="Email">
            <input type="text" v-model="password" placeholder="Password">
            <button type="submit">Login</button>
        </form>
        <div v-if="users">
            Welcome {{ users.FullName }}
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        users() {
            return this.$store.state.users;
        }
    },
    data() {
        return{
            email: "",
            password: "",
        }
    },
    methods: {
        login() {
           this.$store.dispatch("login", { email: this.email, password: this.password })
        },
    }, 
};
</script>
<style scoped>
.Login{
  padding-top: 100px;
 margin-left: 35%;
}

    
</style>