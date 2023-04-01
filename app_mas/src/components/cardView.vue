<template>
  <v-row>   
    <v-col
            v-for="(imagen,index) in imagenes" 
            :key="index"
            cols="4">
            <v-card
      class="mx-auto  "
      max-width="344"
      
      
      >
      
      <v-img
        :src="imagen.download_url"
        height="200px"
        cover
        
      ></v-img>
  
      <v-card-title>
        {{ imagen.author }}
      </v-card-title>
  
      <v-card-subtitle>
       {{ imagen.id }}
      </v-card-subtitle>
  
      <v-card-actions>

        <v-btn
          color="black bg-teal-lighten-5"
          variant="text"
        >
          Explorar tienda
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            height {{ imagen.heigth }} whidth {{ imagen.width  }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    </v-col>

  </v-row>
      
</template>
    
  
  <script>
    export default {
      data: () => ({
        show: false,
        imagenes: []
      }),
      methods: {
        fetchImagenes(){
            fetch('https://picsum.photos/v2/list?page=2&limit=12').then(res => res.json()).then(data => this.imagenes = data)
        }
        },
        created(){
            this.fetchImagenes()
        }
}

  </script>