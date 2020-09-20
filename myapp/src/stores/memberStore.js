import { observable, decorate, action, toJS } from 'mobx';
import axios from 'axios';
import { BASE_URL } from '../urlConfig'
import setCommonStore from './setCommon'


class MemberStore {
    loading = false;
    success = false;
    error = false;
    users = []

    getAllUser = async () => {
        try {

            const res = await axios.get(`${BASE_URL}/user/get`, {
                headers: {
                    "x-access-token": `${localStorage.getItem('token')}`,
                },

            })


            // console.log(toJS(this.users)



            if (res) {
                this.users = res.data.users;
                console.log(toJS(this.users))
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