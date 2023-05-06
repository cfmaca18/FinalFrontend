<template v-if="$store.state.user.isAuthenticated">
  <div class="container">
    <h1>Agregar Grupo</h1>
    <form @submit.prevent="crearGrupo"><br><br>
      <div class="form-group" >
        <label  for="nombre_grupo">Nombre:</label>
        <input type="text" class="form-control" id="nombre_grupo" v-model="nombre_grupo">
      </div>
      <!-- <div class="form-group">
        <label for="descripcion">Descripción:</label>
        <textarea class="form-control" id="descripcion" v-model="descripcion"></textarea>
      </div> -->
      <button type="submit" class="btn btn-primary">Agregar Grupo</button>
      <button class="btn btn-success" v-on:click="verGrupos">Ver Grupos</button><br><br>
      <button  class="btn btn-danger" v-on:click="cancelar" > Cancelar </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nombre_grupo: '',
    //   descripcion: ''
    };
  },

  methods: {
    crearGrupo() {
      axios.post('http://localhost:8000/api/grupo/', {
        nombre_grupo: this.nombre_grupo,
        // descripcion: this.descripcion
      })
      .then(response => {
        console.log(response.data);
        this.$router.push('/ListaMiembrosGrupo');
      })
      .catch(error => {
        console.log(error.response.data);
      })   
    },
    verGrupos(){
        this.$router.push('/ListaGrupos')
    },
    cancelar(){
        this.$router.push('/inicio')
    }
  },
//   async verGrupos(){
//     this.$router.push('/ListaGrupos')
//   }
};
</script>
