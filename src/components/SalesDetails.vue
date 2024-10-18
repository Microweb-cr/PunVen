<script setup>
    import { priceProperty } from '@/helpers';
    import Amount from './Amount.vue';

    defineProps({
        sale: {
            type: Object
        }
    })
</script>

<template>
    <div class="border-solid border border-gray-400 space-y-5 p-5 shadow rounded bg-white">
        <h2 class=" text-2xl font-black">Detalles de la Venta:</h2>
        <p class=" text-xl font-bold text-gray-600">Productos Vendidos</p>

        <ul 
            role="list" 
            class="mt-5 text-gray-600 font-medium"
        >
            <li
                v-for="item in sale.items"
                class=" flex space-x-5 py-5"
            >
                <img 
                    :src="item.image" 
                    :alt="'Imagen de: ' + item.name"
                    class=" h-24 w-24 flex-none rounded-lg shadow border"
                />

                <div class=" flex-auto space-y-2">
                    <h3 class=" text-gray-900">{{ item.name }}</h3>
                    <p>{{ priceProperty(item.price) }}</p>
                    <p>Cantidad: {{ item.quantity }}</p>
                </div>

            </li>
        </ul>

        <dl class=" space-y-5 pt-6 font-medium text-gray-700">
            <Amount class=" bg-gray-100 p-2 rounded shadow">
                <template #label>Subtotal: </template>
                {{ priceProperty(sale.subtotal) }}
            </Amount>

            <Amount class=" bg-gray-100 p-2 rounded shadow">
                <template #label>Impuestos: </template>
                {{ priceProperty(sale.taxes) }}
            </Amount>

            <Amount v-if="sale.discount" class=" bg-green-100 p-2 rounded shadow">
                <template #label>Descuento: </template>
                {{ priceProperty(sale.discount) }}
            </Amount>

            <Amount class=" bg-gray-100 p-2 rounded shadow">
                <template #label>Total Pagado: </template>
                {{ priceProperty(sale.total) }}
            </Amount>
        </dl>

    </div>
</template>
