import Pizza from './pizza.js'

export default class NonVeganPizza extends Pizza {
  #cholesterolContent;
  constructor(name, price, cholesterolContent) {
    super(name, price);
    this.#cholesterolContent = cholesterolContent;
  }

  get cholesterolContent() {
    return this.#cholesterolContent;
  }
}