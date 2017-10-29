import { inject, injectable } from "inversify";

import { StoreFactory } from "./StoreFactory";
import { TYPES } from "./Types";

@injectable()
export abstract class ParentStore {
    @inject(TYPES.StoreFactory)
    protected readonly storeFactory: StoreFactory;
}
