<template>
    <v-icon :class="{ 'cursor-pointer': pointer }">
        <slot></slot>
    </v-icon>
</template>
<script>
export default {
    name: 'Icon',
    props: {
        pointer: {
            type: Boolean,
            default: false,
        },
    }
}
</script>