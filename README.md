# hackaton-semana-16
Hackaton de la semana 16

RETO 1: 

1.- ¿Qué es Vuex?

Es un complemento oficial para Vue.js que ofrece un almacén de datos centralizado para usar dentro de su aplicación. Está muy influido por la arquitectura de la aplicación Flux, que presenta un flujo de datos unidireccional que conduce a un diseño y un razonamiento más simples.

2.- ¿Cuáles son los principales conceptos de VUEX y ejemplificarlos?

Estado (en el código state):
-Es un objeto que puede contener cualquier tipo de información: strings, arrays u otros objetos.
-Es la información que almacenamos de forma centralizada en toda la app.

Ejemplo:
/componente*/
const Counter = {
  template: `<div>{{ contador }}</div>`,
  computed: {
    count () {
      return store.state.contador 
    }
  }
}


Mutaciones (en el código mutations):
-Son funciones.
-Son las únicas funciones que pueden modificar el estado.
-Son llamadas por las acciones.
Se pueden inicializar en el componente a utilizar a través de commit o inicializarse a través de una acción.
-Son síncronas.
/*Ejemplo*/
const store = new Vuex.Store({
  state: {
    contador:1
  },
  mutations: {
    increment (state) {
      // mutate state
      state.contador++
    }
  }
})

store.commit('increment')

Acciones (en el código actions):
-Son funciones.
-Poseen la lógica de negocio.
-Para cambiar el estado deben de llamar a mutaciones a través de commit.
-Pueden llamar otras acciones a través de dispatch.
-La forma de inicializarse en el componente es a través de dispatch o utilizando modulos.
-Son asíncronas.

/*ejemplo*/

const store = new Vuex.Store({
  state: {
    contador: 0
  },
  mutations: {
    increment (state) {
      state.contador++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})

Getters (en el código getters).
-Son funciones.
-No cambian el estado pero sí que lo formatean para que podemos utilizar esa información de la manera que la necesitemos.
-Sería lo más parecido a una propiedad computed en el componente.
-Un ejemplo sería una función que filtrara el estado. No lo modifica pero te devuelve un nuevo objeto diferente con los datos filtrados que necesitas.

/*Ejemplo*/
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: 'Hola', estado: true },
      { id: 2, text: 'Perú', estado: false }
    ]
  },
  getters: {
    estadosTodos: state => {
      return state.todos.filter(todo => todo.estado)
    }
  }
})


ventajas:
*nos ayuda a lidiar con la gestión compartida de los  estados.
*Atravez de vuex se puede hacer proyectos escalables.
*Nos ayuda a descomponer un proyecto en partes pequeñas y de esa manera trabajarlo  mejor.
* Vuex nos provee de metodos y helpers para el manejo y manipulación de los estados.
*Es de facil mantenimiento el proyecto en desarrollo.


Desventajas:
* Relentiza el desarrollo de un proyecto.
* Eleva el costo de desarrollo.

3.- ¿Por qué usar un administrador de estado?

Al usar un administrador de estado nos ayudan a centralizar el estado y administrarlo y un administrador o patron se llama redux el cual nos permite  compartir los estados de nuestra aplicación y escuchar los valores desde cuaalquier componente.