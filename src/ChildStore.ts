import { inject, injectable } from "inversify";

import { ParentStore } from "./ParentStore";
import { Logger } from "./Logger";
import { StoreFactory } from "./StoreFactory";

export type IChildStoreCreator = (storeFactory: StoreFactory) => ChildStore;

@injectable()
export class ChildStore extends ParentStore {
    @inject(Logger)
    public readonly logger: Logger;
}
