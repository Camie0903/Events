<template>
    <div>
        <form @submit.prevent="register">
            <input type="text" v-model="FullName" placeholder="Full Name">
            <input type="text" v-model="email" placeholder="Email">
            <input type="text" v-model="password" placeholder="Password">
            <button type="submit">Register</button>
        </form>
         <div v-if="users">
            Welcome {{ users.FullName }}
        </div> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            FullName: "",
            email: "",
            password: "",
        }
    },
    computed: {
        users() {
            return this.$store.state.users
        }
    },
    methods: {   
        register() {
           return this.$store.dispatch("register", {FullName: this.FullName, email: this.email, password: this.password} )
    },
}
}
</script>
<style>
    
</style>