import { observable, action, decorate } from 'mobx';
import axios from 'axios'
import { BASE_URL } from '../urlConfig'
import history from '../utils/history'
// import { useHistory } from 'react-router-dom'
class LoginStore {






    loading = false;
    Token = null;
    errors = null;
    isLogged = false;
    // username = null;
    // password = '';

    setUsername(username) {
        LoginStore.username = username;
    }
    setPassword(pass) {
        LoginStore.password = pass;
    }

    login = async (email, password) => {

        try {

            const res = await axios.post(`${BASE_URL}/user/login`, {

                email: email,
                password: password

            })
            if (res) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('isAuthenticated', true)
                LoginStore.isLogged = true;
                LoginStore.Token = res.data.token;
                // history.push('/');


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
    setPassword: action
})

export default new LoginStore()