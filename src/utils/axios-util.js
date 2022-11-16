import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzRmZTI1YTcxYjc3YzAxN2U2MzM2MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODYzNjI5MCwiZXhwIjoxNjY4ODk1NDkwfQ.taenZ7HnQiKaCrUr9PC6Dg5wWY0U0HSGdvtnPf7PbYA";

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})