<template>
  <div class="main">
    <div class="container">
      <h1 class="center-align cyan-text text-darken-2">Main Page</h1>
      <router-link :to="{name: 'new_product'}" class="teal-text text-lighten-1 new-product-link">Add New Product +</router-link>
      <div class="collection">
        <div class="collection-item" v-for="item in products" :key="item.id">
          <div class="collection-item-content">
            <div class="collection-item-string">
              name:
              <span class="teal-text text-lighten-1">{{ item.name_uz }}</span>
            </div>
            <div class="collection-item-string">
              price:
              <span class="teal-text text-lighten-1">{{ item.cost }}</span>
            </div>
            <div class="collection-item-string">
              date:
              <span class="teal-text text-lighten-1">{{
                getDate(item.created_date)
              }}</span>
            </div>
          </div>
          <button
            class="waves-effect waves-light btn teal lighten-1 btn-edit"
            @click="toEdit(item)"
          >
            edit
          </button>
          <button
            class="waves-effect waves-light btn red btn-delete"
            @click="deleteProduct(item.id)"
          >
            delete
          </button>
        </div>
      </div>
      <button
        class="waves-effect waves-light btn products-btn"
        @click="getProducts(++counter)"
      >
        More Products
      </button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      counter: 1,
    };
  },
  methods: {
    getDate(num) {
      return new Date(num);
    },
    getProducts(num) {
      this.$store.dispatch("getProducts", num).then((res) => {
        if (!res.data.length) {
          this.counter -= 1;
        }
      });
    },
    deleteProduct(id) {
      this.$store.dispatch("deleteProduct", id);
    },
    toEdit(product) {
      localStorage.setItem('product', JSON.stringify(product))
      this.$router.push({ name: "edit_product", params: { id: product.id } });
    },
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },
  mounted() {
    this.getProducts(this.counter);
  },
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  padding-bottom: 40px;
}
.main {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  span {
    text-transform: capitalize;
    font-weight: bold;
    display: block;
    margin-left: 5px;
  }
  .collection {
    &-item {
      &-string {
        display: flex;
      }
      display: flex;
      align-items: flex-start;
    }
  }
  .btn-delete {
    margin-left: 10px;
  }
  .btn-edit {
    margin-left: 40px;
  }
  .btn {
    margin-top: 10px;
  }
  h1 {
    font-weight: 400;
    text-transform: uppercase;
  }
  // .products-btn{
  //   margin-bottom: 40px;
  // }
  .new-product-link{
    font-size: 20px;
  }
}
</style>
