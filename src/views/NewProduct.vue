<template>
  <div class="new-product">
    <div class="container">
      <div class="row">
        <h1 class="teal-text text-lighten-1 light col s12">New Product</h1>
        <form @submit.prevent class="col s6">
          <div class="row">
            <div class="input-field col s8">
              <input id="name" type="text" class="validate" v-model="name" />
              <label for="name">Name</label>
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
              <label for="address">Address</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s8">
              <input id="price" type="number" class="validate" v-model="cost" />
              <label for="price">Price</label>
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
          <button class="btn-large waves-effect waves-light col s3" @click="addProduct">
            Create
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
      name: "",
      cost: Number,
      address: "",
      type: 0,
    };
  },
  methods: {
    addProduct() {
      this.$store
        .dispatch("addProduct", {
          product_type_id: this.type,
          name_uz: this.name,
          cost: this.cost,
          address: this.address,
          created_date: new Date().getTime(),
        })
        .then(() => {
          this.$router.push({ name: "home" });
        });
    },
    onInput(num) {
      this.type = num;
    },
  },
};
</script>
<style lang="scss">
.new-product {
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
