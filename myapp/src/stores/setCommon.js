import { observable, action, decorate } from 'mobx'

class setCommonStore {
    users = []
    account = 'admin'
    setUsers(user) {
        setCommonStore.users = user;

    }

    setCurrentUser(account) {
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