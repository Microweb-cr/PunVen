<script setup>
    import { priceProperty } from '@/helpers'
    import { useCartStore } from '@/stores/cart';

    const cart = useCartStore()

    defineProps({
        product: {
            type: Object
        }
    })
</script>

<template>
    <div
        class=" rounded bg-white shadow relative mt-10"
    >
        <img 
            :src="product.image" 
            :alt="'Imagen de: ' + product.name"
        />

        <div
            class=" p-3 space-y-2"
        >
            <h3 class=" text-xl font-black text-gray-600">{{ product.name }}</h3>
            <p class=" text-gray-600">Disponibles: {{ product.availability }}</p>
            <p class="text-2xl font-extrabold text-gray-900">{{ priceProperty(product.price) }}</p>
        </div>

        <button
            type="button"
            class=" absolute top-5 right-1"
            @click="cart.addItem(product)"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12 p-2 text-indigo-500 hover:text-white hover:bg-indigo-700 hover:shadow-lg rounded-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
            </svg>

        </button>
    </div>
</template>
