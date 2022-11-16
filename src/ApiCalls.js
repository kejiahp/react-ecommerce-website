import { publicRequest } from "./utils/axios-util"

export const getAllProducts = (categories) => {
    return publicRequest.get(`/products?category=${categories ? categories: ''}`)
}

export const getSingleProduct = (id) => {
    return publicRequest.get(`/products/find/${id}`)
}