import IPizza from "./IPizza";

export default interface IPizzeria {
  readonly name: string;
  orderPizza(orderedPizzaName: string, callback: (amount: number) => void): IPizza;
}