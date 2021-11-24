function Pizza(name, price) {
  this._name = name;
  this._price = price;
  this._readiness = false;
}

Pizza.prototype.getName = function () {
  return this._name;
};

Pizza.prototype.getPrice = function () {
  return this._price;
};

Pizza.prototype.getReadiness = function () {
  return this._readiness;
};

Pizza.prototype.setReady = function () {
  this._readiness = true;
};