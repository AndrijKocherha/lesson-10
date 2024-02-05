<template>
   <div class="filters-container">
      <filter-item v-model.check="sellersId" title="Продавець" :filters="sellersList" />
      <filter-item v-model.check="brandsId" title="Бренд" :filters="brandsList" />
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import FilterItem from './FilterItem.vue'
export default {
   components: { FilterItem },
   name: 'ProductsFilters',
   computed: {
      ...mapGetters(['sellersList', 'brandsList', 'selectedSellersId', 'selectedBrandsId']),
      sellersId: {
         get() {
            return this.selectedSellersId
         },
         set(newArray) {
            this.setSelectedId({ type: 'selectedSellersId', array: newArray })
         },
      },
      brandsId: {
         get() {
            return this.selectedBrandsId
         },
         set(newArray) {
            this.setSelectedId({ type: 'selectedBrandsId', array: newArray })
         },
      },
   },
   methods: {
      //...mapActions(['setSelectedSellersId', 'setSelectedBrandsId']),
      ...mapActions(['setSelectedId']),
   },
}
</script>

<style lang="scss" scoped>
.filters-container {
   border: 1px solid #000;
   padding: 10px;
}
</style>
