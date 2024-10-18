<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div>
        <RouterLink
            :to="{name: 'shop'}"
        >
            <h1 class=" text-4xl font-black text-white">
                Pun<span class=" text-green-500">Ven</span>
            </h1>
        </RouterLink>
    </div>
</template>
