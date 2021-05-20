import axios from 'axios'

const baseUrlLocal = 'http://localhost:3000/'
const axiosInstance = axios.create({
  baseURL: baseUrlLocal
})
export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}
export { axiosInstance }
