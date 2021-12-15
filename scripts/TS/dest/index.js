var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import VeganPizza from './veganpizza/veganpizza.js';
import NonVeganPizza from './nonveganpizza/nonveganpizza.js';
import Customer from './customer/customer.js';
import Pizzeria from './pizzeria/pizzeria.js';
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
function buyPizzaAsyncAwait() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const firstPizza = yield tom.buyPizzaAsyncPromises('Risotto');
            console.log(firstPizza);
            const secondPizza = yield tom.buyPizzaAsyncPromises('Cheesy');
            console.log(secondPizza);
            const thirdPizza = yield tom.buyPizzaAsyncPromises('Seitanum');
            console.log(thirdPizza);
            tom.eatPizza();
        }
        catch (error) {
            console.log(error);
        }
    });
}
buyPizzaAsyncAwait();
