<template>
   <div :class="{ 'not-selected': isSelected }" class="filter">
      <div class="filter__title">{{ title }}</div>
      <label @click="gg" v-for="filter in filters" :key="filter.id" class="filter__item"
         ><input v-model="filterId" :value="filter.id" type="checkbox" /> {{ filter.name }}</label
      >
   </div>
</template>

<script>
export default {
   name: 'FilterItem',
   data() {
      return {}
   },
   props: {
      title: {
         type: String,
         default: 'Фільтр',
      },
      filters: {
         type: Array,
         default: () => [],
      },
      modelValue: {
         type: Array,
         default: () => [],
      },
      modelModifiers: {
         default: () => [],
      },
   },
   computed: {
      filterId: {
         get() {
            return this.modelValue
         },
         set(newArray) {
            this.$emit('update:modelValue', newArray)
         },
      },
      isSelected() {
         return this.filterId.length === 0 && this.modelModifiers.check
      },
   },
}
</script>

<style lang="scss" scoped>
.filter {
   padding: 5px;
   display: flex;
   flex-direction: column;
   // .filter__title
   &__title {
      color: #1f79aa;
      font-size: 18px;
      &:not(:last-child) {
         margin-bottom: 8px;
      }
   }
   // .filter__item
   &__item {
   }
   &:not(:last-child) {
      margin-bottom: 20px;
   }
}
.not-selected {
   outline: 1px solid green;
}
</style>
