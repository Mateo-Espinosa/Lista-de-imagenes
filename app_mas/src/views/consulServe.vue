<template>
    <div>
        <h1>Usuarios</h1>
        <ul>
            <li>{{ imagenes }}</li>
            <li v-for="(dato,index) in imagenes" :key="index">
            {{ imagenes.name }}, {{ index }}
        </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name: 'HttpV',
    data () {
        
        return{
            imagenes: []
        }
    },
    methods: {
        axiosData(){
            axios.get('http://localhost:3000/imagenes').then(response => {
                this.imagenes = response.data;
            })
        }
    },
    created(){
        this.axiosData()
    }
}
</script>