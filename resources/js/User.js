export default class User {
    constructor (payload) {
        this.payload = payload || { roles: [] };
    }

    name() {
        return this.payload.name;
    }

    account() {
        return this.payload.account;
    }

    roles() {
        return this.payload.roles;
    }
}