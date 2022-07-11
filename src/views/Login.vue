<template>
    <div>
        <form @submit.prevent="login">
            <input type="text" v-model="email" placeholder="Email">
            <input type="text" v-model="password" placeholder="Password">
            <button type="submit">Login</button>
        </form>
        <div v-if="user">
            Welcome {{ user.FullName }}
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        user() {
            return this.$store.state.user;
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
           this.$store.dispatch("login", { email: this.email, passsword: this.password })
        },
    },
};
</script>
<style>
    
</style>