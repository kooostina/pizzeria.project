import { IBuyPizzaCallback } from '../interfaces/IBuyPizzaCallback';
import IPizza from '../interfaces/IPizza';
import IPizzeria from '../interfaces/IPizzeria';

export default class Customer {
  private _name: string;
  private _satisfaction: number;
  private _pizzas: Array<IPizza>;
  private _pizzeria: IPizzeria | null;
  private _balance: number;
  public constructor(name: string, satisfaction: number = 0, balance: number = 50) {
    this._name = name;
    this._satisfaction = satisfaction;
    this._pizzas = [];
    this._pizzeria = null;
    this._balance = balance;
  }

  public get name(): string {
    return this._name;
  }

  public get satisfaction(): number {
    return this._satisfaction;
  }

  public get pizzas(): Array<IPizza> {
    return this._pizzas;
  }

  public get pizzeria(): IPizzeria | null {
    return this._pizzeria;
  }

  public choosePizzeria(pizzeria: IPizzeria): void {
    this._pizzeria = pizzeria;
  }
  
  public get balance(): number {
    return this._balance;
  }

  public increaseBalance(amount: number): void {
    this._balance += amount;
  }

  public withdrawBalance(amount: number): void {
    this._balance -= amount;
  }

  public buyPizza(orderedPizzaName: string): IPizza | undefined {
    // const callback = this.withdrawBalance.bind(this);

    const boughtPizza: IPizza | undefined = this.pizzeria?.orderPizza(orderedPizzaName, (amount: number) => this.withdrawBalance(amount)) /*(amount: number): void => this._balance -= amount)*/

    if (boughtPizza) {
      this._pizzas.push(boughtPizza);
    }

    return boughtPizza;
  }

  public buyPizzaAsyncCallback(orderedPizzaName: string, callback: IBuyPizzaCallback): void {
    setTimeout(() => {
      let error: Error | undefined;
      const boughtPizza: IPizza | undefined = this._pizzeria?.orderPizza(orderedPizzaName, amount => this.withdrawBalance(amount));

      if (boughtPizza) {
        this._pizzas.push(boughtPizza);
      } else {
        error = new Error('Pizza can not be bought!');
      }
      callback(error, boughtPizza);
    }, 2000)
  }

  public buyPizzaAsyncPromises(orderedPizzaName: string): Promise<IPizza> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const boughtPizza: IPizza | undefined = this._pizzeria?.orderPizza(orderedPizzaName, amount => this.withdrawBalance(amount));
        if (boughtPizza) {
          this._pizzas.push(boughtPizza);
          resolve(boughtPizza);
        } else {
          reject(new Error('Pizza can not be bought!'));
        }
      }, 2000)
    })
  }

  public eatPizza(): void {
    this._pizzas.forEach(pizza => {
      console.log(`It was a nice ${pizza.name}!`);
      this._satisfaction++;
    });

    this._pizzas = [];
  }
}