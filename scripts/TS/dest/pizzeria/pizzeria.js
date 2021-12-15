export default class Pizzeria {
    constructor(name, frozenPizzas) {
        this._name = name;
        this._frozenPizzas = frozenPizzas;
        this._balance = 0;
    }
    get name() {
        return this._name;
    }
    get frozenPizzas() {
        return this._frozenPizzas;
    }
    get balance() {
        return this._balance;
    }
    addPizza(pizza) {
        this._frozenPizzas.push(pizza);
    }
    removePizzaByName(name) {
        const indexOfPizza = this._frozenPizzas.findIndex(pizza => pizza.name === name);
        this._frozenPizzas.splice(indexOfPizza, 1);
    }
    orderPizza(orderedPizzaName, cbWithdrawCustomerBalance) {
        const foundPizza = this._frozenPizzas.find(pizza => pizza.name === orderedPizzaName);
        if (!foundPizza) {
            throw new Error('There is no such pizza!');
        }
        foundPizza.heat();
        this.removePizzaByName(orderedPizzaName);
        cbWithdrawCustomerBalance(foundPizza.price);
        this._balance += foundPizza.price;
        return foundPizza;
    }
}
