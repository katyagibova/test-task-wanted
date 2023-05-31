import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: false,
    timeout: 10000,
});

export const api = {
    getUsers(country, score) {
        const filters = {
            country: country,
            score: score
        }
        return apiClient.get(`/users`, filters);
    },
}