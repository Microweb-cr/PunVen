<script setup>
    import Link from '@/components/Link.vue';
    import Product from '@/components/Product.vue';
    import { useProductsStore } from '@/stores/products';

    const products = useProductsStore()
</script>

<template>
    <div>
        <Link
            to="new-products"
        >
            Agregar Producto
        </Link>

        <h1 class=" text-4xl font-black my-10">Todos los Productos</h1>

        <p v-if="products.noResults" class=" text-2xl text-center font-black">No Hay Resultado</p>

        <ul 
            v-else
            role="list"
            class=" grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 last-of-type:mb-10"
        >
            <Product 
                v-for="product in products.productsCollection"
                :key="product.id"
                :product="product"
            />
        </ul>

    </div>
</template>
