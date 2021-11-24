function Customer(name, satisfaction, balance) {
  this._name = name;
  this._satisfaction = satisfaction || 0;
  this._pizzas = [];
  this._pizzeria = null;
  this._balance = balance || 0;
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

Customer.prototype.getBalance = function (amount) {
  return this._balance;
};

Customer.prototype.increaseBalance = function (amount) {
  this._balance = this._balance + amount;
};

Customer.prototype.withdrawBalance = function (amount) {
  this._balance = this._balance - amount;
};

Customer.prototype.buyPizza = function () { }

Customer.prototype.eatPizza = function () {
  
}

Customer.prototype.eatPizzaAsync = function (callback) {
  setTimeout(
    function () {
      console.log('Pizza eaten');
      callback();
    },
    3000);
};