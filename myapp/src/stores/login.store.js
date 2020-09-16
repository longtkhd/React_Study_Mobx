import React from "react";
import { observable, action, decorate } from 'mobx';
import axios from 'axios'
import { BASE_URL } from '../urlConfig'

export class LoginStore extends React.Component {
    loading = false;
    Token = null;
    errors = null;
    isLogged = false;

    login = async (user) => {
        try {
            const res = await axios.post(BASE_URL, {
                data: {
                    email: user.email,
                    password: user.password
                }
            })
            if (res) {
                console.log(res);
            }

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
    login: action
})