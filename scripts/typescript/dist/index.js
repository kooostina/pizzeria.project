import VeganPizza from './veganpizza/veganpizza';
import NonVeganPizza from './nonveganpizza/nonveganpizza';
import Customer from './customer/customer';
import Pizzeria from './pizzeria/pizzeria';
const pizzaSeitan = new VeganPizza('Seitanum', 17, 20);
const pizzaRice = new VeganPizza('Risotto', 25, 20);
const pizzaCheesy = new NonVeganPizza('Cheesy', 40, 120);
const mafia = new Pizzeria('Mafia', [
    pizzaSeitan,
    pizzaRice,
    pizzaCheesy
]);
const tom = new Customer('Tom', 0, 100);
tom.choosePizzeria(mafia);
// tom.buyPizzaAsyncCallback('Seitanum', (error, pizza) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(pizza);
//   }
//   tom.buyPizzaAsyncCallback('Cheesy', (error, pizza) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(pizza);
//     }
//     tom.buyPizzaAsyncCallback('Risotto', (error, pizza) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(pizza);
//       }
//       setTimeout(() => tom.eatPizza(), 2000);
//     });
//   });
// });
// tom.buyPizzaAsyncPromises('Risotto')
//   .then(pizza => {
//     console.log('first pizza bought', pizza);
//     return tom.buyPizzaAsyncPromises('Cheesy');
//   })
//   .then(pizza => {
//     console.log('second pizza bought', pizza);
//     return tom.buyPizzaAsyncPromises('Seitanum');
//   })
//   .then(pizza => {
//     console.log('third pizza bought', pizza);
//     console.log('All pizzas are bought');
//     tom.eatPizza();
//   })
//   .catch(error => {
//     console.log(error.message);
//   })
async function buyPizzaAsyncAwait() {
    try {
        const firstPizza = await tom.buyPizzaAsyncPromises('Risotto');
        console.log(firstPizza);
        const secondPizza = await tom.buyPizzaAsyncPromises('Cheesy');
        console.log(secondPizza);
        const thirdPizza = await tom.buyPizzaAsyncPromises('Seitanum');
        console.log(thirdPizza);
        tom.eatPizza();
    }
    catch (error) {
        console.log(error);
    }
}
buyPizzaAsyncAwait();
