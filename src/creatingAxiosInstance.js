import axios from 'axios'

export const creatingAxiosInstance = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        Authorization: `Bearer 3a84683b2c630f23d313c740b7891b569242f5faf58f07b54d42df3f8dc9a66e774b20f3e240c049f4c2b436884da5c04ebe6c80fea94d789708fe7f9ab41f7d633d2f88e793b7f0a02968d87c73c5b6ffc6d8000fac7f89515587d2e22aefe5f589779eab4391b558cfc8d62d30b03170496926b4db9f4f39f4c7dfd898b6d5`,
            }
});
