<template>
 <v-app :class="'theme'- + $store.getters.theme" :is="layout">
    <v-snackbar v-model="isShow" transition="slide-y-transition">
        {{ message }}
    </v-snackbar>
     <router-view></router-view>
 </v-app>
</template>

<script>
import { mapState } from 'vuex';
import './styles/style.scss' //must included here to overwrite theme css
export default {
    name: 'App',
    computed: {
        ...mapState('alert', {
            message: 'message',
            isShow: 'isShow',
        }),
        layout() {
            return (this.$route.meta.layout || 'admin-layout');
        },
    },
    created(){
        if(!sessionStorage.getItem('token') && this.$route.path !== '/auth'){
            this.$router.push('/auth')
        } else if(sessionStorage.getItem('token') && this.$route.path !== '/'){
            this.$router.push('/')
        }
    }
}
</script>