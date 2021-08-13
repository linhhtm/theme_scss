<template>
<v-app :class="'theme-' + $store.getters.skin" class="layout__admin">
    <Header />
    <v-main>
        <slot></slot>
    </v-main>
    <Footer />
</v-app>
</template>

<script>
import Footer from '../layout/Footer.vue';
import Header from '../layout/Header.vue';

export default {
    name: 'AdminLayout',
    components: {
        Header,
        Footer,
    },
}
</script>

<style scoped lang="scss">
@import "@/styles/theme/variable.scss";
.layout__admin{
    max-width: $screen-max-width;
    width: 100%;
    background: #dedede;
    margin: auto;
    footer, header{
        left: 50% !important;
        max-width: $screen-max-width;
        width: 100%;
        right: unset !important;
        transform: translate(-50%) !important;
    }
}
</style>
