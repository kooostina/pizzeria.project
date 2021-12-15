export default interface IPizza {
  readonly name: string;
  readonly price: number;
  heat(): void;
}