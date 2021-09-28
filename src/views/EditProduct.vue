<template>
  <div class="edit-product">
    <div class="container">
      <div class="row">
        <h1 class="teal-text text-lighten-1 light col s12">Edit Product Page</h1>
        <form @submit.prevent class="col s6">
          <div class="row">
            <div class="input-field col s8">
              <input id="name" type="text" class="validate" v-model="name" />
            </div>
          </div>
          <div class="row">
            <div class="input-field col s8">
              <input
                id="address"
                type="text"
                class="validate"
                v-model="address"
              />
            </div>
          </div>
          <div class="row">
            <div class="input-field col s8">
              <input id="price" type="number" class="validate" v-model="cost" />
            </div>
          </div>
          <!-- <div class="row"> -->
          <div class="product-type">
            <span class="product-type-title">Type: </span>
            <div class="product-type-wrapper col s8">
              <label>
                <input
                  class="with-gap"
                  name="group"
                  type="radio"
                  @input="onInput(1)"
                />
                <span>Plants</span>
              </label>
              <label>
                <input
                  class="with-gap"
                  name="group"
                  type="radio"
                  @input="onInput(2)"
                />
                <span>Animals</span>
              </label>
              <label>
                <input
                  class="with-gap"
                  name="group"
                  type="radio"
                  @input="onInput(3)"
                />
                <span>Trees</span>
              </label>
            </div>
          </div>
          <!-- </div> -->
          <button class="btn-large waves-effect waves-light col s3" @click="updateProduct">
            Update
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: this.getProduct().name_uz,
      cost: this.getProduct().cost,
      address: this.getProduct().address,
      type: this.getProduct().product_type_id,
    };
  },
  methods:{
    getProduct(){
      return JSON.parse(localStorage.getItem("product"));
    },
    onInput(num) {
      this.type = num;
    },
    updateProduct() {
      this.$store
        .dispatch("updateProduct", {
          product_type_id: this.type,
          name_uz: this.name,
          cost: this.cost,
          address: this.address,
          created_date: new Date().getTime(),
          id: this.$route.params.id
        })
        .then(() => {
          this.$router.push({ name: "home" });
        });
    }
  },
};
</script>
<style lang="scss">
.edit-product {
  // .input-field {
  //   padding: 0;
  // }
  .btn-large {
    margin-top: 40px;
  }
  .row {
    margin-bottom: 0;
  }
  .product-type {
    display: flex;
    flex-direction: column;
    &-title {
      margin-bottom: 15px;
      margin-top: 20px;
    }
    &-wrapper {
      display: flex;
      justify-content: space-between;
      margin-left: 0 !important;
      padding: 0 !important;
    }
  }
}
</style>