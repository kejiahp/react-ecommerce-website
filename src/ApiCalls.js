import { publicRequest } from "./utils/axios-util"
import { loginFailure, loginSuccess, loginStart } from '../src/redux/userReducer'

export const getAllProducts = (categories) => {
    return publicRequest.get(`/products?category=${categories ? categories: ''}`)
}

export const getSingleProduct = (id) => {
    return publicRequest.get(`/products/find/${id}`)
}

export const loginUser = async (dispatch,user) => {
    dispatch(loginStart())
    try{
        const res = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(res.data))
    }catch(e){
        dispatch(loginFailure())
    }
}