var pizzaSeitan = new VeganPizza('Seitanum', 17, 20);

var pizzaRice = new VeganPizza('Risotto', 25, 20);

var pizzaCheesy = new NonVeganPizza('Cheesy', 40,  120 );

var mafia = new Pizzeria('Mafia', [
  pizzaSeitan,
  pizzaRice,
  pizzaCheesy
]);


var tom = new Customer('Tom', 0, 50);

// var orderedPizza = mafia.orderPizza('Risotto', 17);

// console.log('orderedPizza', orderedPizza);
tom.setPizzeria(mafia);
console.log('chosen pizzeria', tom.getPizzeria());
tom.buyPizza('Seitanum');
tom.eatPizza();

console.log('pizzas in customer stomach', tom.getPizzas());
console.log('pizzas in pizzeria fridge', mafia.getFrozenPizzas());

console.log('pizzeria balance', mafia.getBalance());
console.log('customer balance', tom.getBalance());

console.log(mafia);
console.log(tom);