import React from 'react';
import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'c13fa168-cea5-4630-847d-9c0d00665f01'}
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number ){
        return instance.get( `users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    }
}

export const followAPI = {
    unfollowUsers(id: number){
        return instance.delete(`follow/${id}`)

    },
    followUsers(id: number) {
        return instance.post( `follow/${id}`)
    }
}
export const authMe = () => {
  return instance.get('auth/me')
}