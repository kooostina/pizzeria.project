
import VeganPizza from './veganpizza.js'
import NonVeganPizza from './nonveganpizza.js'
import Pizzeria from './pizzeria.js'
import Customer from './customer.js'

const pizzaSeitan = new VeganPizza('Seitanum', 17, 20);

const pizzaRice = new VeganPizza('Risotto', 25, 20);

const pizzaCheesy = new NonVeganPizza('Cheesy', 40, 120);

const mafia = new Pizzeria('Mafia', [
  pizzaSeitan,
  pizzaRice,
  pizzaCheesy
]);


const tom = new Customer('Tom', 0, 100);

// var orderedPizza = mafia.orderPizza('Risotto', 17);

// console.log('orderedPizza', orderedPizza);
tom.choosePizzeria(mafia);
// console.log('chosen pizzeria', tom.getPizzeria());
tom.buyPizzaAsync('Seitanum', (error, pizza) => {
  if (error) {
    console.log(error);
  } else {
    console.log(pizza);
  }

  tom.buyPizzaAsync('Cheesy', (error, pizza) => {
    if (error) {
      console.log(error);
    } else {
      console.log(pizza);
    }

    tom.buyPizzaAsync('Risotto', (error, pizza) => {
      if (error) {
        console.log(error);
      } else {
        console.log(pizza);
      }
      tom.eatPizza();
    });
  });
});



// console.log('pizzas in customer stomach', tom.getPizzas());
// console.log('pizzas in pizzeria fridge', mafia.getFrozenPizzas());

// console.log('pizzeria balance', mafia.getBalance());
// console.log('customer balance', tom.getBalance());

// console.log(mafia);
// console.log(tom);