<template>
  
    <div class="p-3 text-center">
      <h1>Inscritos</h1>
      
      <table class="table">
        <thead>
          <tr>
            
            <th>Nombre-</th>
            <th>Ficha-</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(inscrito, index) in inscritos" :key="index">
            <td>{{ inscrito.perfil.usuario.username  }}</td>
            <td>{{ inscrito.ficha.codigo }}</td>
            <button class="btn btn-success" @click="agregar()" type="submit"> Agregar </button>
          </tr>
        </tbody>
      </table>
      <!-- <button v-on:click="agregarSeleccionados(selected)">Agregar seleccionados</button> -->
      <button class="btn btn-danger" @click="cancelar">Cancelar</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        inscritos: []
      };
    },
    created() {
      axios.get('http://127.0.0.1:8000/api/inscrito/')
        .then(response => {
          this.inscritos = response.data.map(inscrito => {
            return {
              ...inscrito,
              selected: false
            }
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    methods: {
      async agregar(id) {
        await axios.put("http://127.0.0.1:8000/api/grupo/"+id+"/",this.grupo).then(response=>{
          console.log(response)
          this.$router.push("/grupo:id")
        })
      },
       
      cancelar() {
        this.$router.push('/CrearGrupo');
      }
    },
    async mounted(){
      let id = this.$route.params.id
      await axios.get("http://127.0.0.1:8000/api/grupo/"+id+"/",this.grupo).then(response=>{
        this.inscritos.perfil.id=response.data.id
        this.inscritos.perfil.username=response.data.username
        this.inscritos.ficha.codigo=response.data.codigo
      })
    }
  }
  </script>
  