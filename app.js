const app = new Vue({//esta llave denota que es un array (un objeto)
    el: '#app', //detecto el id = app
    data:{//en data abro un objeto, para trabajar con datos
       titulo: 'GYM con Vue',
       tareas: [],
       nuevaTarea: ''
    },
    methods: {
        agregarTarea: function(){
         this.tareas.push({
            nombre: this.nuevaTarea,
            estado: false
         })
         this.nuevaTarea = ''; //limpio el input   
         this.actualizarTareasEnLocalStorage();
        },
        editarTarea: function(index) {
            this.tareas[index].estado = true;
            this.actualizarTareasEnLocalStorage();
        },
        eliminarTarea: function(index) {
            this.tareas.splice(index, 1);//indico desde dónde y cuantos
            this.actualizarTareasEnLocalStorage();
        },
        actualizarTareasEnLocalStorage: function() {
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    created: function(){//Esto se ejecuta primero que todo al iniciar la app
        let datosDB = JSON.parse( localStorage.getItem('gym-vue') )
        //el "localStorage.getItem('gym-vue')" si no existe "gym-vue" en locaStorage devuel null
        //si existe "gym-vue" en locaStorage devuelve un array, por eso se parsea
        if (datosDB == null) {
            this.tareas = [];
        }else{
            this.tareas = datosDB;
        }
    }
})//instancio vue, es decir llamo a la librería que copie en el scrip "<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>" en el html