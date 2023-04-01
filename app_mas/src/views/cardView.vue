<template>
    <plantillaPrincipal>
      <cardView />
  </plantillaPrincipal>
    
</template>

<script>
import { defineComponent } from 'vue';

import cardView from '@/components/cardView.vue';
import plantillaPrincipal from '@/components/plantillaPrincipal.vue';

export default defineComponent({
  name: 'tiendaView',

  components: {
    cardView,
    plantillaPrincipal,
  },
}); 
</script>