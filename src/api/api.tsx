import React from 'react';
import axios, {AxiosResponse} from "axios";


const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {'API-KEY': 'c13fa168-cea5-4630-847d-9c0d00665f01'}
});

export const usersAPI = {
  getUsersData(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
      .then(response => response.data);
  },
  unfollowUsers(id: number) {
    return instance.delete<any, AxiosResponse<ResponseUserType>>(`follow/${id}`).then(response => response.data);
  },
  followUsers(id: number) {
    return instance.post<any, AxiosResponse<ResponseUserType>>(`follow/${id}`).then(response => response.data);
  },
}


export const profileAPI = {
  getProfile(userId: number | null) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId: string) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put('profile/status', {status: status});
  },
  saveProfile(profile: ProfileRequestType) {
    return instance.put('profile', profile);
  },
  savePhoto(file: File) {
    const formData = new FormData();
    formData.append('image', file)

    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
export const authAPI = {
  authMe() {
    return instance.get('auth/me');
  },
  login(email: string, password: string, rememberMe: boolean, captcha: string) {
    return instance.post('auth/login', {email, password, rememberMe, captcha});
  },
  logout() {
    return instance.delete('auth/login');
  }
}

export const securityAPI = {
  getCaptcha(){
    return instance.get(`security/get-captcha-url`)
  }
}

export type ResponseUserType<T = {}> = {
  data: T,
  messages: string[],
  fieldsErrors: string[],
  resultCode: number
}

export type ProfileRequestType = {
  userId: number,
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName: string,
  aboutMe: string,
  contacts: ContactsType
}

export type ContactsType = {
  github: string,
  vk: string,
  facebook: string,
  instagram: string,
  twitter: string,
  website: string,
  youtube: string,
  mainLink: string
}