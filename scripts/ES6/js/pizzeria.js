
export default class Pizzeria {
  #name;
  #frozenPizzas;
  #balance;
  constructor(name, frozenPizzas) {
    this.#name = name;
    this.#frozenPizzas = frozenPizzas;
    this.#balance = 0;
  }

  get name() {
    return this.#name;
  }

  get frozenPizzas() {
    return this.#frozenPizzas;
  }

  get balance() {
    return this.#balance;
  }

  addPizza(pizza) {
    this.#frozenPizzas.push(pizza);
  }

  removePizzaByName(name) {
    const indexOfPizza = this.#frozenPizzas.findIndex(pizza => pizza.name === name);
    this.#frozenPizzas.splice(indexOfPizza, 1);
  }

  orderPizza(orderedPizzaName, cbWithdrawCustomerBalance) {
    let foundPizza = this.#frozenPizzas.find(pizza => pizza.name === orderedPizzaName);

    if (!foundPizza) {
      throw new Error('There is no such pizza!');
    }

    foundPizza.heat();
    this.removePizzaByName(orderedPizzaName);
    cbWithdrawCustomerBalance(foundPizza.price);
    this.#balance += foundPizza.price;

    return foundPizza;
  }
}