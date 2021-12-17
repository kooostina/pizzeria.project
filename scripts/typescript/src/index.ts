import VeganPizza from './veganpizza/veganpizza.js';
import NonVeganPizza from './nonveganpizza/nonveganpizza.js';
import Customer from './customer/customer.js';
import Pizzeria from './pizzeria/pizzeria.js';
import IPizza from './interfaces/IPizza.js';

const pizzaSeitan: VeganPizza = new VeganPizza('Seitanum', 17, 20);

const pizzaRice: VeganPizza = new VeganPizza('Risotto', 25, 20);

const pizzaCheesy: NonVeganPizza = new NonVeganPizza('Cheesy', 40, 120);

const mafia: Pizzeria = new Pizzeria('Mafia', [
  pizzaSeitan,
  pizzaRice,
  pizzaCheesy
]);


const tom: Customer = new Customer('Tom', 0, 100);

tom.choosePizzeria(mafia);

tom.buyPizzaAsyncCallback('Seitanum', (error, pizza) => {
  if (error) {
    console.log(error);
  } else {
    console.log(pizza);
  }

  tom.buyPizzaAsyncCallback('Cheesy', (error, pizza) => {
    if (error) {
      console.log(error);
    } else {
      console.log(pizza);
    }

    tom.buyPizzaAsyncCallback('Risotto', (error, pizza) => {
      if (error) {
        console.log(error);
      } else {
        console.log(pizza);
      }
      setTimeout(() => tom.eatPizza(), 2000);
    });
  });
});

tom.buyPizzaAsyncPromises('Risotto')
  .then(pizza => {
    console.log('first pizza bought', pizza);
    return tom.buyPizzaAsyncPromises('Cheesy');
  })
  .then(pizza => {
    console.log('second pizza bought', pizza);
    return tom.buyPizzaAsyncPromises('Seitanum');
  })
  .then(pizza => {
    console.log('third pizza bought', pizza);
    console.log('All pizzas are bought');
    tom.eatPizza();
  })
  .catch(error => {
    console.log(error.message);
  })

  async function buyPizzaAsyncAwait(): Promise<void> {
  try {
    const firstPizza: IPizza = await tom.buyPizzaAsyncPromises('Risotto');
    console.log('first pizza bought', firstPizza);

    const secondPizza: IPizza = await tom.buyPizzaAsyncPromises('Cheesy');
    console.log('second pizza bought', secondPizza);

    const thirdPizza: IPizza = await tom.buyPizzaAsyncPromises('Seitanum');
    console.log('third pizza bought', thirdPizza);
    console.log('All pizzas are bought');

    tom.eatPizza();
  } catch (error) {
    console.log(error);
  }
}

buyPizzaAsyncAwait();