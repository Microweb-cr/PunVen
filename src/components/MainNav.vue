<script setup>
    import { useProductsStore } from '@/stores/products';
    import Logo from './Logo.vue';
    import Link from './Link.vue';

    const products = useProductsStore()

</script>

<template>
    <header class=" px-10 py-5 bg-gray-800 flex flex-col lg:flex-row 2xl:flex-row gap-5 lg:items-center lg:justify-between absolute top-0 w-full z-10">
        <div>
            <Logo />

            <div class="flex flex-row gap-5 text-white mt-2">
                <h2 class="w-full text-lg font-extrabold">Filtros: </h2>
                <div
                    class="w-full md:w-auto flex items-center gap-2"
                    v-for="category in products.categories"
                    :key="category.id"
                >
                    <input
                        type="radio"
                        name="category"
                        :value="category.id"
                        class="h-4 w-4 rounded border-gray-400 text-indigo-700 focus:ring-indigo-800"
                        :checked="products.selectedCategory === category.id"
                        @change="products.selectedCategory = +$event.target.value"
                    />
                    <label 
                        :for="'category-' + category.id" 
                        class="text-gray-200"
                        @click="products.selectedCategory = category.id"
                    >
                        {{ category.name }}
                    </label>
                </div>
            </div>

        </div>

        <nav>
            <Link
                to="sales"
            >
                Administración
            </Link>
        </nav>
    </header>
</template>
