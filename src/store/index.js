import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  getters: {
  },
  mutations: {
    setUser: (state, user) => {
      state.user =user
    }
  },
  actions: {
    login: async (context, data) => {
     const{email, password} = data
     const response = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`)
     const userData = await response.json();
     console.log(userData)
     context.commit(setUser, userData[0]) 
    }
  },
  modules: {
  }
})
