import IPizza from "../interfaces/IPizza";
import IPizzeria from "../interfaces/IPizzeria";

export default class Pizzeria implements IPizzeria {
  private _name: string;
  private _frozenPizzas: Array<IPizza> // IPizza[];
  private _balance: number;
  public constructor(name: string, frozenPizzas: Array<IPizza>) {
    this._name = name;
    this._frozenPizzas = frozenPizzas;
    this._balance = 0;
  }

  public get name(): string {
    return this._name;
  }

  public get frozenPizzas(): Array<IPizza> {
    return this._frozenPizzas;
  }

  public get balance(): number {
    return this._balance;
  }

  public addPizza(pizza: IPizza): void {
    this._frozenPizzas.push(pizza);
  }

  public removePizzaByName(name: string) {
    const indexOfPizza = this._frozenPizzas.findIndex(pizza => pizza.name === name);
    this._frozenPizzas.splice(indexOfPizza, 1);
  }

  public orderPizza(orderedPizzaName: string, cbWithdrawCustomerBalance: (amount: number) => void): IPizza {
    const foundPizza = this._frozenPizzas.find(pizza => pizza.name === orderedPizzaName);

    if (!foundPizza) {
      throw new Error('There is no such pizza!');
    }

    foundPizza.heat();
    this.removePizzaByName(orderedPizzaName);
    cbWithdrawCustomerBalance(foundPizza.price);
    this._balance += foundPizza.price;

    return foundPizza;
  }
}