var pizzaSeitan = new VeganPizza('Seitanum', 17, 20);

var pizzaRice = new VeganPizza('Risotto', 25, 20);

var pizzaCheesy = new NonVeganPizza('Cheesy', 40,  120 );

var mafia = new Pizzeria('Mafia', [
  pizzaSeitan,
  pizzaRice,
  pizzaCheesy,
  pizzaCheesy,
  pizzaCheesy,
  pizzaSeitan,
]);


var tom = new Customer('Tom', 0, 50);

var orderedPizza = mafia.orderPizza('Cheesy', 17);

console.log('orderedPizza', orderedPizza);

console.log('pizzeria balance', mafia.getBalance());

console.log(mafia);