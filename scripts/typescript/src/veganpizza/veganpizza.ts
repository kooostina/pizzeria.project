import Pizza from '../pizza/pizza.js'

export default class VeganPizza extends Pizza {
  private _proteinContent: number;
  public constructor(name: string, price: number, proteinContent: number) {
    super(name, price);
    this._proteinContent = proteinContent;
  }

  public get proteinContent(): number {
    return this._proteinContent;
  }
}