<template>
    <v-container class="auth flex-center-full">
      <auth-card/>
    </v-container>
</template>

<script>
import AuthCard from '../../components/auth/AuthCard.vue'

export default {
  name: 'Auth',
  components: {
    AuthCard,
  }
}
</script>
<style>
.auth{
    height: 100%;
}
</style>