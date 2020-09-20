import { observable, action, decorate } from 'mobx';
import axios from 'axios'
import { BASE_URL } from '../urlConfig'
import setCommonStore from './setCommon'
class LoginStore {
    loading = false;
    Token = null;
    errors = null;
    isLogged = false;
    account = null;
    // username = null;
    // password = '';

    // setUsername(username) {
    //     LoginStore.username = username;
    // }
    // setPassword(pass) {
    //     LoginStore.password = pass;
    // }

    login = async (email, password) => {

        try {

            const res = await axios.post(`${BASE_URL}/user/login`, {

                email: email,
                password: password

            })
            if (res) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('isAuthenticated', true)
                // this.isLogged = true;
                // this.Token = res.data.token;
                // this.account = email;
                setCommonStore.setCurrentUser(email)




            }


        } catch (error) {
            this.errors = 'invalied'
        }
    }

    logout = async () => {
        localStorage.clear();
        LoginStore.isLogged = false;
        LoginStore.Token = null;

    }




}
decorate(LoginStore, {
    loading: observable,
    Token: observable,
    errors: observable,
    isLogged: observable,
    login: action,
    logout: action,
    setUsername: action,
    setPassword: action,
    account: observable,
})

export default new LoginStore()