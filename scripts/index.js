var pizzaSeitan = new VeganPizza('Seitanum', 17, 20);

var pizzaRice = new VeganPizza('Seitanum', 25, 20);

var pizzaCheesy = new NonVeganPizza('Cheesy', 40,  120 );

var mafia = new Pizzeria('Mafia', [
  pizzaSeitan,
  pizzaRice,
  pizzaCheesy,
  pizzaCheesy,
  pizzaCheesy,
  pizzaSeitan,
]);