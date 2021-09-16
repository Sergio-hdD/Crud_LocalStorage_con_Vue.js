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
        },
        editarTarea: function(index) {
            this.tareas[index].estado = true;
        }
    },
    computed:{//Cada vez que haya una modificación

    }
})//instancio vue, es decir llamo a la librería que copie en el scrip "<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>" en el html