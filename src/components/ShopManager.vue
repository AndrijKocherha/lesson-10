<template>
   <div class="shop-container">
      <products-filters />
      <products-list />
   </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProductsFilters from './ProductsFilters.vue'
import ProductsList from './ProductsList.vue'
export default {
   components: { ProductsList, ProductsFilters },
   name: 'ShopManager',
   methods: {
      ...mapActions(['setData']),
   },
   created() {
      this.setData()
   },
}
</script>

<style lang="scss" scoped>
.shop-container {
   display: grid;
   gap: 20px;
   grid-template-columns: minmax(300px, 200px) 1fr;
}
</style>
