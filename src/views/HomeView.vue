<template>
  <HomeCom/>
</template>

<script>
import { defineComponent } from 'vue';

import HomeCom from '../components/HomeCom.vue'
export default defineComponent({
  name: 'HomeView',

  components: {
    HomeCom,
  },
});
</script>
