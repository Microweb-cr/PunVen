<script setup>
    import ShoppingCardItem from './ShoppingCardItem.vue';
    import { useCartStore } from '@/stores/cart';
    import Amount from './Amount.vue';
    import { priceProperty } from '@/helpers';
    import CouponForm from './CouponForm.vue';
    import { useCouponStore } from '@/stores/coupons';

    const cart = useCartStore()
    const coupon = useCouponStore()
</script>

<template>
    <p 
        v-if="cart.isEmpty"
        class=" text-center text-4xl text-gray-900 font-bold"
    >
        El Carrito está vacio
    </p>

    <div
        v-else
    >
        <p class="text-4xl text-center font-bold text-gray-900">Resumen de Venta</p>

        <ul
            role="list"
            class=" mt-6 divide-y divide-gray-400 last-of-type:border-b border-gray-400"
        >
            <ShoppingCardItem 
                v-for="item in cart.items"
                :key="item.id"
                :item="item"
            />
        </ul>

        <dl class=" space-y-5 pt-6 font-medium text-gray-700">
            <Amount>
                <template #label>Subtotal: </template>
                {{ priceProperty(cart.subtotal) }}
            </Amount>

            <Amount>
                <template #label>Impuestos: </template>
                {{ priceProperty(cart.taxes) }}
            </Amount>

            <Amount v-if="coupon.isValidCoupon">
                <template #label>Descuento: </template>
                {{ priceProperty(coupon.discount) }}
            </Amount>

            <Amount>
                <template #label>Total a Pagar: </template>
                {{ priceProperty(cart.total) }}
            </Amount>
        </dl>

        <CouponForm />

        <button 
            type="button"
            class="p-3 bg-indigo-500 hover:bg-indigo-600 font-bold rounded shadow mt-3 text-white w-full"
            @click="cart.checkout"
        >Confirmar Compra</button>
    </div>
</template>
