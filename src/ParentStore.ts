import { injectable } from "inversify";

import { StoreFactory } from "./StoreFactory";

@injectable()
export abstract class ParentStore {
    public constructor(
        protected readonly storeFactory: StoreFactory) { }
}
