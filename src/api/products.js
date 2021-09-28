import axios from "@/api/axios";

const addProduct = (data) => {
  return axios.post('/', data)
}
const getProducts = (number) => {
  return axios.get('', { params: { page: number, perPage: 10 } })
}
const updateProduct = (data) => {
  return axios.put('/', data)
}
const deleteProduct = (id) => {
  return axios.delete('/' + id)
}

export default {
  getProducts,
  deleteProduct,
  updateProduct,
  addProduct
}