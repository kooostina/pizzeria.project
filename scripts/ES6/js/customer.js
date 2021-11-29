function Customer(name, satisfaction, balance) {
  this._name = name;
  this._satisfaction = satisfaction;
  this._pizzas = [];
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

// My old buyPizza method
// Customer.prototype.buyPizza = function (orderedPizzaName) {

//   var callback = this.withdrawBalance.bind(this);

//   var boughtPizza = this._pizzeria.orderPizza(orderedPizzaName, callback);

//   return boughtPizza;
// };

// Customer.prototype.eatPizza = function (pizza) {
//   console.log('It was a nice ' + pizza.getName() + '!');
//   this._pizzas.push(pizza);
//   this._satisfaction++;
// };


// // My new buyPizza method
// Customer.prototype.buyPizza = function (orderedPizzaName) {

//   var callback = this.withdrawBalance.bind(this);

//   // console.log(this._pizzeria);

//   var boughtPizza = this._pizzeria.orderPizza(orderedPizzaName, callback);

//   this._pizzas.push(boughtPizza);

//   // console.log(this._pizzas);
// };

// My new buyPizza method
Customer.prototype.buyPizzaAsync = function (orderedPizzaName, callback) {
  setTimeout(
    function () {
      var error;
      var boughtPizza;
      var withdrawBalance = this.withdrawBalance.bind(this);

      boughtPizza = this._pizzeria.orderPizza(orderedPizzaName, withdrawBalance);

      // console.log('bought pizza', boughtPizza);

      if (boughtPizza) {
        this._pizzas.push(boughtPizza);
      } else {
        error = new Error('Pizza can not be bought!');
      }
      callback(error, boughtPizza);
    }.bind(this),
    2000
  )
};


// buyPizza method with async orderPizza
// Customer.prototype.buyPizza = function (orderedPizzaName) {

//   var cbWithdrawCustomerBalance = this.withdrawBalance.bind(this);

//   // console.log(this._pizzeria);

//   this._pizzeria.orderPizzaAsync(orderedPizzaName, cbWithdrawCustomerBalance, function (error, pizza) {
//     if (error) {
//       console.log(error);
//     } else {
//       this._pizzas.push(pizza);
//     }

//     this._pizzeria.orderPizzaAsync(orderedPizzaName, cbWithdrawCustomerBalance, function (error, pizza) {
//       if (error) {
//         console.log(error);
//       } else {
//         this._pizzas.push(pizza);
//       }

//       this._pizzeria.orderPizzaAsync(orderedPizzaName, cbWithdrawCustomerBalance, function (error, pizza) {
//         if (error) {
//           console.log(error);
//         } else {
//           this._pizzas.push(pizza);
//         }
//       });
//     });

//   });
// };
// this._pizzas.push(pizza);
Customer.prototype.eatPizza = function () {

  this._pizzas.forEach(function (pizza) {
    console.log('It was a nice ' + pizza.getName() + '!');
    this._satisfaction++;
  }.bind(this));

  this._pizzas = [];
};



// Customer.prototype.eatPizzaAsync = function (callback) {
//   setTimeout(
//     function () {
//       console.log('Pizza eaten');
//       callback();
//     },
//     3000);
// };