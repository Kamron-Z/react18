import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {'API-KEY': '1872b366-9534-436e-b8ef-8cb260d3e39e'}
})

export const userApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(data => data.data)
    },
    onFollow(userId) {
        return instance.post('follow/' + userId).then(data => data.data)
    },
    onUnFollow(userId) {
        return instance.delete('follow/' + userId).then(data => data.data)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    }
}

export const authApi = {
    me() {
        return instance.get('auth/me').then(data => data.data)
    }
}
