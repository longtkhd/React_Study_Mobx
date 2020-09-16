import React from "react";
import { observable, action, decorate } from 'mobx';
import axios from 'axios'
import { BASE_URL } from '../urlConfig'

export class LoginStore {


    loading = false;
    Token = null;
    errors = null;
    isLogged = false;
    username = null;
    password = '';

    setUsername(username) {
        LoginStore.username = username;
    }
    setPassword(pass) {
        LoginStore.password = pass;
    }

    login = async () => {

        try {

            const res = await axios.post(`${BASE_URL}/user/login`, {

                email: LoginStore.username,
                password: LoginStore.password

            })


        } catch (error) {
            this.errors = 'invalied'
        }
    }




}
decorate(LoginStore, {
    loading: observable,
    Token: observable,
    errors: observable,
    isLogged: observable,
    login: action,
    setUsername: action,
    setPassword: action
})