function VeganPizza(name, price, proteinContent) {
  Pizza.call(this, name, price);
  this._proteinContent = proteinContent;
}

VeganPizza.prototype = Object.create(Pizza.prototype);
VeganPizza.prototype.constructor = VeganPizza;

VeganPizza.prototype.getProteinContent = function () {
  return this._proteinContent;
};