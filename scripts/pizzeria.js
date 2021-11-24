function Pizzeria(name, frozenPizzas) {
  this._name = name;
  this._frozenPizzas = frozenPizzas || [];
  this._balance = 0;
}

Pizzeria.prototype.getName = function () {
  return this._name;
};

Pizzeria.prototype.addPizzas = function (pizzas) {
  this._frozenPizzas.push(pizzas);
};

Pizzeria.prototype.removePizzaByName = function (name) {
  var indexOfPizza;
  this._frozenPizzas.forEach(function (pizza, index) {
    if (pizza.getName() === name) {
      indexOfPizza = index;
    }
  });
  this._frozenPizzas.splice(indexOfPizza, 1);
};

Pizzeria.prototype.getBalance = function () {
  return this._balance;
};

Pizzeria.prototype.increaseBalance = function (amount) {
  this._balance = this._balance + amount;
};

Pizzeria.prototype.getFrozenPizzas = function () {
  return this._frozenPizzas;
};

Pizzeria.prototype.orderPizza = function () {
}