<script setup>
    import { RouterLink } from 'vue-router';

    defineProps({
        to: {
            type: String
        }
    })
    
</script>

<template>
    <RouterLink
        :to="{name: to}"
        class=" rounded bg-green-500 hover:bg-green-600 text-white shadow font-bold py-2 px-10 mx-3"
    >
        <slot></slot>
    </RouterLink>
</template>
