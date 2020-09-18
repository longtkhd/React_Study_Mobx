import { observable, decorate, action } from 'mobx';
import axios from 'axios';
import { BASE_URL } from '../urlConfig'
import setCommonStore from './setCommon'


class MemberStore {
    loading = false;
    success = false;
    error = false;

    getAllUser = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/user/get`, {
                headers: {
                    "x-access-token": `${localStorage.getItem('token')}`,
                },

            })

            if (res) {
                setCommonStore.setUsers = res.data.users;

            }

        } catch (e) {
            MemberStore.error = 'Oops , Something is wrong !!!'

        }

    }
}

decorate(MemberStore, {
    users: observable,
    loading: observable,
    success: observable,
    error: observable,
    getAllUser: action,
})

export default new MemberStore()