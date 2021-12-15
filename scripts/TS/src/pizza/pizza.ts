import IPizza from "../interfaces/IPizza";

export default abstract class Pizza implements IPizza {
  private _name: string;
  private _price: number;
  private _readiness: boolean;
  public constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
    this._readiness = false;
  }
  public get name(): string {
    return this._name;
  }

  public get price(): number {
    return this._price;
  }

  public get readiness(): boolean {
    return this._readiness;
  }

  public heat(): void {
    this._readiness = true;
  }
}