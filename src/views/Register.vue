<template>
    <div>
        <form @submit.prevent="register">
            <input type="text" v-model="FullName" placeholder="Full Name">
            <input type="text" v-model="email" placeholder="Email">
            <input type="text" v-model="password" placeholder="Password">
            <button type="submit">Register</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            FullName: "",
            email: "",
            password: "",
            user: null
        }
    },
    methods: {
        register() {
            fetch('http://localhost:3000/users', {
                method: 'POST',
                body: JSON.stringify({
                    FullName: this.FullName,
                    email: this.email,
                    password: this.password,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                })
                .then((response) => response.json())
                .then((json) => console.log(json));
        }
    },
}
</script>
<style>
    
</style>