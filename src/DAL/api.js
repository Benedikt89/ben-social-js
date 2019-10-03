import axios from 'axios';

const instance =  axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '0f32e29f-2408-4879-8199-f94cc9bd7861'},
});


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
            .then(response => {
                return response.data;
            })
    },
};
export const usersAPI = {
    getUsers(pageNumber, pageSize){
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUser(userId){
        return instance.post(`follow/`+userId)
            .then(response => {
                return response.data
            })
    },
    unfollowUser(userId){
        return instance.delete(`follow/`+userId)
            .then(response => {
                return response.data
            })
    },

};