<script setup>
    import { ref } from 'vue';
    import Calendar from 'vue-tailwind-datepicker'
    import { useSalesStore } from '@/stores/sales';
    import SalesDetails from '@/components/SalesDetails.vue';
    import { priceProperty } from '@/helpers';

    const sales = useSalesStore()

    const formatter = ref({
        date: 'DD/MM/YYYY',
        month: 'MMMM'
    })

</script>

<template>
    <h1 class=" text-4xl font-black my-10">Resumen de Ventas</h1>

    <div class=" md:flex md:items-start gap-5">
        <div class=" md:w-1/2 lg:w-1/3 bg-white flex justify-center p-5 shadow rounded">
            <Calendar 
                i18n="es-mx"
                as-single
                no-input
                v-model="sales.date"
                :formatter="formatter"
            />
        </div>

        <div class=" md:w-1/2 lg:w-2/3 space-y-5 lg:h-screen lg:overflow-y-scroll p-5 pb-32">
            <p class=" text-center text-lg" v-if="sales.dateSelected">
                Ventas de la fecha: <span class=" font-black">{{ sales.dateSelected }}</span>
            </p>

            <p v-else class=" text-center text-lg">Selecciona una fecha</p>

            <div v-if="sales.salesCallection.length" class="space-y-5">
                <SalesDetails 
                    v-for="sale in sales.salesCallection"
                    :key="sale.id"
                    :sale="sale"
                />

                <p class=" text-center text-3xl bg-white shadow rounded p-2">Total del dia: 
                    <span class=" font-black text-indigo-600">{{ priceProperty(sales.salesOfDay) }}</span>
                </p>
            </div>

            <h3 
                v-else-if="sales.noSales" 
                class=" text-center text-lg font-bold"
            >
                No hay ventas en esta fecha
            </h3>
        </div>
    </div>
</template>
