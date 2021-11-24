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

Pizzeria.prototype.getFrozenPizzas = function () {
  return this._frozenPizzas;
};

Pizzeria.prototype.getBalance = function () {
  return this._balance;
};

Pizzeria.prototype.increaseBalance = function (amount) {
  this._balance = this._balance + amount;
};

Pizzeria.prototype.orderPizza = function (orderedPizzaName, pizzaPrice) {
  var foundPizza;
  this._frozenPizzas.forEach(function (pizza) {
    if (pizza.getName() === orderedPizzaName) {
      foundPizza = pizza;
    }
  });

  foundPizza.setReady();

  this.increaseBalance(pizzaPrice);

  this.removePizzaByName(foundPizza);

  return foundPizza;
}


// Pizzeria.prototype.orderPizza = function (isVegan, pizzaPrice) {
//   if (isVegan) {
//     var foundPizza;
//     console.log(this._frozenPizzas);
//     this._frozenPizzas.forEach(function (pizza) {
//       if (pizza instanceof VeganPizza) {
//         foundPizza = pizza;
//       }
//     });

//     return foundPizza;
//   }

// }