import { products, sellers, brands } from '@/data/products'
import { createStore } from 'vuex'
export default createStore({
   state: {
      productsList: [],
      sellersList: [],
      brandsList: [],
      selectedSellersId: [],
      selectedBrandsId: [],
   },
   getters: {
      productsList: (state) => {
         return state.productsList.filter((product) => {
            let result = true
            if (state.selectedSellersId.length >= 1) {
               result = state.selectedSellersId.includes(product.seller)
            }
            if (state.selectedBrandsId.length >= 1) {
               result = state.selectedBrandsId.includes(product.brandId)
            }
            return result
         })
      },
      sellersList: ({ sellersList }) => sellersList,
      brandsList: ({ brandsList }) => brandsList,
      selectedSellersId: ({ selectedSellersId }) => selectedSellersId,
      selectedBrandsId: ({ selectedBrandsId }) => selectedBrandsId,
   },
   mutations: {
      setData(state, { products, sellers, brands }) {
         state.productsList = products
         state.sellersList = sellers
         state.brandsList = brands
      },
      //setSelectedSellersId(state, array) {
      //   state.selectedSellersId = array
      //},
      //setSelectedBrandsId(state, array) {
      //   state.selectedBrandsId = array
      //},
      setSelectedId(state, { type, array }) {
         state[type] = array
      },
   },
   actions: {
      setData({ commit }) {
         commit('setData', { products, sellers, brands })
      },
      //setSelectedSellersId({ commit }, array) {
      //   commit('setSelectedSellersId', array)
      //},
      //setSelectedBrandsId({ commit }, array) {
      //   commit('setSelectedBrandsId', array)
      //},
      setSelectedId({ commit }, { type, array }) {
         commit('setSelectedId', { type, array })
      },
   },
})
