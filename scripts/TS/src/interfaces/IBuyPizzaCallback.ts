import IPizza from "./IPizza";

export type IBuyPizzaCallback = (error: Error | undefined, pizza: IPizza | undefined) => void;