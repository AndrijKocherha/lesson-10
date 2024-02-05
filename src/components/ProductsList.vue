<template>
   <div class="products-list">
      <div class="products-list__container">
         <div v-for="product in productsList" class="product" :key="product.id">
            <div class="product__iamge"><img :src="product.imageSrc" alt="" /></div>
            <div class="product__conatent">
               <div class="product__descr">{{ product.title }}</div>
               <div class="product__price">{{ product.price }} ₴</div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
   name: 'ProductsList',
   computed: {
      ...mapGetters(['productsList']),
   },
}
</script>

<style lang="scss" scoped>
.products-list {
   &__container {
      display: grid;
      gap: 40px;
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
   }
}
.product {
   display: flex;
   flex-direction: column;
   // .product__iamge
   &__iamge {
      img {
         max-width: 100%;
      }
      flex: 1 1 auto;
   }
   // .product__conatent
   &__conatent {
   }
   // .product__descr
   &__descr {
      margin-bottom: 20px;
   }
   &__price {
      color: red;
      font-size: 21px;
   }
}
.price {
}
</style>
