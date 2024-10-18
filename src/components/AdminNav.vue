<script setup>
    import { RouterLink } from 'vue-router';
    import Link from './Link.vue';
    import Logo from './Logo.vue';
</script>

<template>
    <header class=" px-10 py-5 bg-gray-800 flex justify-between absolute top-0 w-full z-10">
        <Logo />

        <nav>
            <RouterLink
                :to="{name: 'products'}"
                class=" text-white rounded font-bold py-2 px-5 hover:bg-gray-900 "
            >
                Productos
            </RouterLink>

            <RouterLink
                :to="{name: 'sales'}"
                class=" text-white rounded font-bold py-2 px-5 hover:bg-gray-900"
            >
                Ventas
            </RouterLink>

            <Link
                to="shop"
            >
                Tienda
            </Link>
        </nav>
    </header>
</template>
