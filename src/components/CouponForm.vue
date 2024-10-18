<script setup>
    import { useCouponStore } from '@/stores/coupons';

    const store = useCouponStore()
</script>

<template>
    <p
        class=" mt-5 py-5 font-bold border-t border-gray-400"
    >
        ¿Tienes un cupón?
    </p>

    <div
        class="flex"
    >
        <input 
            type="text" 
            name=""
            placeholder="Ingresa un cupón"
            class="p-2 bg-white border-gray-500 w-full rounded shadow"
            v-model="store.couponInput"
        />

        <button 
            type="button"
            class="p-3 bg-green-500 hover:bg-green-600 font-bold rounded shadow ml-3 text-white 
            disabled:opacity-30 disabled:cursor-not-allowed"
            @click="store.applyCoupon"
            :disabled="store.isValidCoupon"
        >
            Aplicar
        </button>

    </div>

    <div>
        <p 
            class="my-2 uppercase text-center text-indigo-600 font-extrabold"
        >{{ store.couponValidationMessage }}</p>
    </div>
</template>
