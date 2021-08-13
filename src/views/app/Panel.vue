<template>
    <v-container fluid class="p-0">
      <panel-tree/>
    </v-container>
</template>

<script>
import PanelTree from '../../components/app/PanelTree.vue'

export default {
  name: 'Panel',
  components: {
    PanelTree,
  }
}
</script>