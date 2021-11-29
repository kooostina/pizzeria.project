function NonVeganPizza(name, price, cholesterolContent) {
  Pizza.call(this, name, price);
  this._cholesterolContent = cholesterolContent;
}

NonVeganPizza.prototype = Object.create(Pizza.prototype);
NonVeganPizza.prototype.constructor = NonVeganPizza;

NonVeganPizza.prototype.getCholesterolContent = function () {
  return this._cholesterolContent;
};