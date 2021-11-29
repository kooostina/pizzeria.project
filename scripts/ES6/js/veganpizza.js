import Pizza from './pizza.js'

export default class VeganPizza extends Pizza {
  #proteinContent;
  constructor(name, price, proteinContent) {
    super(name, price);
    this.#proteinContent = proteinContent;
  }

  get proteinContent() {
    return this.#proteinContent;
  }
}