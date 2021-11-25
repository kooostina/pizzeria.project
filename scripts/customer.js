function Customer(name, satisfaction, balance) {
  this._name = name;
  this._satisfaction = satisfaction;
  this._pizzasInStomach = [];
  this._pizzeria = null;
  this._balance = balance;
}

Customer.prototype.getName = function () {
  return this._name;
};

Customer.prototype.getSatisfaction = function () {
  return this._satisfaction;
};

Customer.prototype.getPizzas = function () {
  return this._pizzas;
};

Customer.prototype.getPizzeria = function () {
  return this._pizzeria;
};

Customer.prototype.setPizzeria = function (pizzeria) {
  this._pizzeria = pizzeria;
};

Customer.prototype.getBalance = function () {
  return this._balance;
};

Customer.prototype.increaseBalance = function (amount) {
  this._balance = this._balance + amount;
};

Customer.prototype.withdrawBalance = function (amount) {
  this._balance = this._balance - amount;
};

Customer.prototype.buyPizza = function (orderedPizzaName) {

  var callback = this.withdrawBalance.bind(this);

  var boughtPizza = this._pizzeria.orderPizza(orderedPizzaName, callback);

  return boughtPizza;
};

Customer.prototype.eatPizza = function (pizza) {
  console.log('It was a nice ' + pizza.getName() + '!');
  this._pizzasInStomach.push(pizza);
  this._satisfaction++;
};

Customer.prototype.eatPizzaAsync = function (callback) {
  setTimeout(
    function () {
      console.log('Pizza eaten');
      callback();
    },
    3000);
};