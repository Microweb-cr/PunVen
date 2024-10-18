import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { query, collection, where } from "firebase/firestore";
import { useFirestore, useCollection } from "vuefire";

export const useSalesStore = defineStore('sales', () => {

    const date = ref('')
    const db = useFirestore()

    const salesSource = computed(() => {
        if(date.value) {
            const q = query(
                collection(db, 'sales'),
                where('date', '==', date.value)
            )
            return q
        }
    })
    const dateSelected = computed(() => date.value)
    const noSales = computed(() => !salesCallection.length && date.value )
    const salesOfDay = computed(() => {
        return salesCallection.value ? salesCallection.value.reduce((total, sale) => total + sale.total, 0) : 0
    })

    const salesCallection = useCollection(salesSource)

    return {
        date,
        dateSelected,
        salesCallection,
        noSales,
        salesOfDay
    }
})