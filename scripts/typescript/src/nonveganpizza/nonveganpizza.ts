import Pizza from '../pizza/pizza.js'

export default class NonVeganPizza extends Pizza {
  private _cholesterolContent: number;
  public constructor(name: string, price: number, cholesterolContent: number) {
    super(name, price);
    this._cholesterolContent = cholesterolContent;
  }

  public get cholesterolContent(): number {
    return this._cholesterolContent;
  }
}