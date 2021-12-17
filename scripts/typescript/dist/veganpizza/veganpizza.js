import Pizza from '../pizza/pizza.js';
export default class VeganPizza extends Pizza {
    constructor(name, price, proteinContent) {
        super(name, price);
        this._proteinContent = proteinContent;
    }
    get proteinContent() {
        return this._proteinContent;
    }
}
