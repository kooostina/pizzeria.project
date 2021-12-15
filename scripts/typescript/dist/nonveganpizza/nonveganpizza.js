import Pizza from '../pizza/pizza';
export default class NonVeganPizza extends Pizza {
    constructor(name, price, cholesterolContent) {
        super(name, price);
        this._cholesterolContent = cholesterolContent;
    }
    get cholesterolContent() {
        return this._cholesterolContent;
    }
}
