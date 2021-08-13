<template>
    <v-footer app darkheight="30"
      :class="this.$store.getters.tenant_short"
      class="footer justify-center"
    >{{ $t("copyright") }} <v-spacer></v-spacer >{{ this.$store.state.version }}
      </v-footer >
</template>
<script>
export default{
    name: 'Footer',
    data(){
        return {
             
        }
    }
}
</script>
<style scoped lang="scss">
@import '@/styles/theme/variable.scss';
.footer{
  height: $footer-height;
}
</style>