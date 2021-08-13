<template>
<v-app :class="'theme-' + $store.getters.skin" class="layout__auth flex-center-full">
    <v-main>
        <slot></slot>
    </v-main>
</v-app>
</template>

<script>
export default {
    name: 'AuthLayout',
}
</script>

<style scoped lang="scss">
@import "@/styles/theme/variable.scss";
.layout__auth{
    display: flex;
    background: inherit !important;
}
</style>
