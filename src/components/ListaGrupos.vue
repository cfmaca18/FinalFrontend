<template>
    <div>
      <h1>Grupos</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre Grupo</th>
            
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="(grupo, index) in grupos" :key="index">
            <td>{{ grupo.nombre_grupo }}</td>
            <td>
            <router-link :to="'/grupo/' + grupo.id">Ver Grupo</router-link>
          </td>
        
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        grupos: []
      };
    },
    created() {
      axios.get('http://127.0.0.1:8000/api/grupo/')
        .then(response => {
          this.grupos = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  </script>
  