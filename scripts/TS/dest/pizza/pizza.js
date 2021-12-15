export default class Pizza {
    constructor(name, price) {
        this._name = name;
        this._price = price;
        this._readiness = false;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    get readiness() {
        return this._readiness;
    }
    heat() {
        this._readiness = true;
    }
}
