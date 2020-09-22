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

    CreateUser = async (data) => {
        try {
            const formData = new FormData();
            formData.append('fullName', data.fullName);
            formData.append('email', data.email);
            formData.append('role', data.role);
            formData.append('studentCode', data.studentCode);
            formData.append('phone', data.phone);
            formData.append('address', data.address);
            formData.append('dob', data.dob);
            formData.append('gender', data.gender);
            const config = {
                method: 'post',
                url: `${BASE_URL}/user/add`,
                headers: {
                    "x-access-token": `${localStorage.getItem('token')}`,
                },
                data: formData
            }


            const res = await axios(config







            );
            if (res) {
                this.getAllUser();
                console.log(res)
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
    CreateUser: action,
})

export default new MemberStore()