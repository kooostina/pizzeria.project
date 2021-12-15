export default class Customer {
    constructor(name, satisfaction = 0, balance = 50) {
        this._name = name;
        this._satisfaction = satisfaction;
        this._pizzas = [];
        this._pizzeria = null;
        this._balance = balance;
    }
    get name() {
        return this._name;
    }
    get satisfaction() {
        return this._satisfaction;
    }
    get pizzas() {
        return this._pizzas;
    }
    get pizzeria() {
        return this._pizzeria;
    }
    choosePizzeria(pizzeria) {
        this._pizzeria = pizzeria;
    }
    get balance() {
        return this._balance;
    }
    increaseBalance(amount) {
        this._balance += amount;
    }
    withdrawBalance(amount) {
        this._balance -= amount;
    }
    buyPizza(orderedPizzaName) {
        // const callback = this.withdrawBalance.bind(this);
        var _a;
        const boughtPizza = (_a = this.pizzeria) === null || _a === void 0 ? void 0 : _a.orderPizza(orderedPizzaName, (amount) => this.withdrawBalance(amount)); /*(amount: number): void => this._balance -= amount)*/
        if (boughtPizza) {
            this._pizzas.push(boughtPizza);
        }
        return boughtPizza;
    }
    buyPizzaAsyncCallback(orderedPizzaName, callback) {
        setTimeout(() => {
            var _a;
            let error;
            const boughtPizza = (_a = this._pizzeria) === null || _a === void 0 ? void 0 : _a.orderPizza(orderedPizzaName, amount => this.withdrawBalance(amount));
            if (boughtPizza) {
                this._pizzas.push(boughtPizza);
            }
            else {
                error = new Error('Pizza can not be bought!');
            }
            callback(error, boughtPizza);
        }, 2000);
    }
    buyPizzaAsyncPromises(orderedPizzaName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var _a;
                const boughtPizza = (_a = this._pizzeria) === null || _a === void 0 ? void 0 : _a.orderPizza(orderedPizzaName, amount => this.withdrawBalance(amount));
                if (boughtPizza) {
                    this._pizzas.push(boughtPizza);
                    resolve(boughtPizza);
                }
                else {
                    reject(new Error('Pizza can not be bought!'));
                }
            }, 2000);
        });
    }
    eatPizza() {
        this._pizzas.forEach(pizza => {
            this._satisfaction++;
        });
        this._pizzas = [];
    }
}
