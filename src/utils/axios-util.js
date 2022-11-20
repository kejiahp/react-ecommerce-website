import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"

const user = JSON.parse(localStorage.getItem("persist:root")).currentUser


const accessToken = JSON.parse(user).accessToken
const isAdmin = JSON.parse(user).isAdmin

console.log(isAdmin)

const TOKEN = accessToken

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})