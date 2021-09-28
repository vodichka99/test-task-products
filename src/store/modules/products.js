import productsApi from "@/api/products";
export default {
  state: {
    productTypes: [],
    products: [],
    error: null,
    loading: false,
    deleting: false
  },
  mutations: {
    getProductsStart(state) {
      state.loading = true
    },
    getProductsSuccess(state, data) {
      const products = state.products
      state.loading = false
      state.products = data.number == 1 ? data.body : [...products, ...data.body]
    },
    getProductsFailure(state, error) {
      state.loading = false
      state.error = error
    },

    deleteProductStart(state) {
      state.deleting = true
    },
    deleteProductSuccess(state, id) {
      state.deleting = false
      state.products = state.products.filter(item => item.id != id)
    },
    deleteProductFailure(state, error) {
      state.deleting = false
      state.error = error
    },

    addProductStart(state) {
      state.loading = true
    },
    addProductSuccess(state) {
      state.loading = false
    },
    addProductFailure(state, error) {
      state.loading = false
      state.error = error
    },

    updateProductStart(state) {
      state.loading = true
    },
    updateProductSuccess(state) {
      state.loading = false
    },
    updateProductFailure(state, error) {
      state.loading = false
      state.error = error
    },

  },
  actions: {
    getProducts(context, number) {
      return new Promise(resolve => {
        context.commit('getProductsStart')
        productsApi.getProducts(number)
          .then(response => {
            context.commit('getProductsSuccess', { body: response.data, number })
            resolve(response)
          })
          .catch(error => {
            context.commit('getProductsFailure', error)
            alert(error)
          })
      })
    },
    deleteProduct(context, id) {
      return new Promise(resolve => {
        context.commit('deleteProductStart')
        productsApi.deleteProduct(id)
          .then(response => {
            context.commit('deleteProductSuccess', id)
            resolve(response)
          })
          .catch(error => {
            context.commit('deleteProductFailure', error)
            alert(error)
          })
      })
    },
    addProduct(context, data) {
      return new Promise(resolve => {
        context.commit('addProductStart')
        productsApi.addProduct(data)
          .then(response => {
            context.commit('addProductSuccess')
            alert('product has been added');
            resolve(response)
          })
          .catch(error => {
            context.commit('addProductFailure', error)
            alert(error)
          })
      })
    },
    updateProduct(context, data) {
      return new Promise(resolve => {
        context.commit('updateProductStart')
        productsApi.updateProduct(data)
          .then(response => {
            context.commit('updateProductSuccess')
            alert('product has been updated');
            resolve(response)
          })
          .catch(error => {
            context.commit('updateProductFailure', error)
            alert(error)
          })
      })
    },
  },
  getters: {
    getProducts(state) {
      return state.products
    }
  }
}