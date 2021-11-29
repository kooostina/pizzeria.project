
export default class Pizza {
  #name;
  #price;
  #readiness;
  constructor(name, price) {
    this.#name = name;
    this.#price = price;
    this.#readiness = false;
  }
  get name() {
    return this.#name;
  }

  get price() {
    return this.#price;
  }

  get readiness() {
    return this.#readiness;
  }

  heat() {
    this.#readiness = true;
  }
}