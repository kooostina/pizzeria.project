export default class Customer {
  #name;
  #satisfaction;
  #balance;
  #pizzas;
  #pizzeria;
  constructor(name, satisfaction, balance) {
    this.#name = name;
    this.#satisfaction = satisfaction;
    this.#balance = balance;
    this.#pizzas = [];
    this.#pizzeria = null;
  }

  get name() {
    return this.#name;
  }

  get satisfaction() {
    return this.#satisfaction;
  }

  get balance() {
    return this.#balance;
  }

  get pizzas() {
    return this.#pizzas;
  }

  get pizzeria() {
    return this.#pizzeria;
  }

  choosePizzeria(pizzeria) {
    this.#pizzeria = pizzeria;
  }

  increaseBalance(amount) {
    this.#balance += amount;
  }

  withdrawBalance(amount) {
    this.#balance -= amount;
  }

  buyPizza(orderedPizzaName) {
    // const callback = this.withdrawBalance.bind(this);

    const boughtPizza = this.#pizzeria.orderPizza(orderedPizzaName, amount => this.withdrawBalance(amount) /*amount => this.#balance -= amount*/ );

    this.#pizzas.push(boughtPizza);

    return boughtPizza;
  }

  buyPizzaAsyncCallback(orderedPizzaName, callback) {
    setTimeout(() => {
      let error;
      const boughtPizza = this.#pizzeria.orderPizza(orderedPizzaName, amount => this.withdrawBalance(amount));

      if (boughtPizza) {
        this.#pizzas.push(boughtPizza);
      } else {
        error = new Error('Pizza can not be bought!');
      }
      callback(error, boughtPizza);
    }, 2000)
  }

  buyPizzaAsyncPromises(orderedPizzaName) {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        const boughtPizza = this.#pizzeria.orderPizza(orderedPizzaName, amount => this.withdrawBalance(amount));
        // console.log(boughtPizza);
        if (boughtPizza) {
          this.#pizzas.push(boughtPizza);
          resolve(boughtPizza);
        } else {
          reject(new Error('Pizza can not be bought!'));
        }
      }, 2000)
    })
  }

  eatPizza() {
    this.#pizzas.forEach(pizza => {
      console.log(`It was a nice ${pizza.name}!`);
      this.#satisfaction++;
    });

    this.#pizzas = [];
  }
}