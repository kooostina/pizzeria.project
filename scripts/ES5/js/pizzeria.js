function Pizzeria(name, frozenPizzas) {
  this._name = name;
  this._frozenPizzas = frozenPizzas;
  this._balance = 0;
}

Pizzeria.prototype.getName = function () {
  return this._name;
};

Pizzeria.prototype.getFrozenPizzas = function () {
  return this._frozenPizzas;
};

Pizzeria.prototype.getBalance = function () {
  return this._balance;
};

Pizzeria.prototype.addPizza = function (pizza) {
  this._frozenPizzas.push(pizza);
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

Pizzeria.prototype.orderPizza = function (orderedPizzaName, cbWithdrawCustomerBalance) {
  // var foundPizza = this.removePizzaByName(orderedPizzaName);

  var foundPizza;
  this._frozenPizzas.forEach(function (pizza) {
    if (pizza.getName() === orderedPizzaName) {
      foundPizza = pizza;
    }
  });

  // console.log('found pizza', foundPizza);

  if (!foundPizza) {
    throw new Error('There is no such pizza!');
  }

  foundPizza.setReady();
  this.removePizzaByName(orderedPizzaName);
  cbWithdrawCustomerBalance(foundPizza.getPrice());
  this._balance = this._balance + foundPizza.getPrice();

  return foundPizza;
};

Pizzeria.prototype.orderPizzaAsync = function (orderedPizzaName, cbWithdrawCustomerBalance, callback) {
  setTimeout(
    function () {
      var error;
      var foundPizza;
      this._frozenPizzas.forEach(function (pizza) {
        if (pizza.getName() === orderedPizzaName) {
          foundPizza = pizza;
        }
      });

      if (!foundPizza) {
        error = new Error('There is no such pizza!');
      } else {
        foundPizza.setReady();
        this.removePizzaByName(orderedPizzaName);
        cbWithdrawCustomerBalance(foundPizza.getPrice());
        this._balance = this._balance + foundPizza.getPrice();
      }

      callback(error, foundPizza);
      console.log('found pizza in orderPizza',foundPizza);

    }.bind(this),
    2000
  );
};