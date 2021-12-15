import Pizza from '../pizza/pizza';
export default class VeganPizza extends Pizza {
    constructor(name, price, proteinContent) {
        super(name, price);
        this._proteinContent = proteinContent;
    }
    get proteinContent() {
        return this._proteinContent;
    }
}
