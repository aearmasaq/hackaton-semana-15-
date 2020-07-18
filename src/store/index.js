import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios:[]
  },
  mutations: {
     llenarUsuario(state, usuarioAccion ){
      state.usuarios = usuarioAccion;
    }
  },
  actions: {
    async obtenerUsuarios({commit}){
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      const info = await data.json()

      commit('llenarUsuario', info)
    }
  },
  modules: {
  }
})
