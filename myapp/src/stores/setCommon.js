import { observable, action, decorate } from 'mobx'

class setCommonStore {
    users = [];
    account = 'admin'
    setUsers(user) {
        this.users = user;
    }

    setAccount(account) {
        this.account = account;
    }

}

decorate(setCommonStore, {
    users: observable,
    account: observable,
    setUsers: action,
    setAccount: action

})

export default new setCommonStore();