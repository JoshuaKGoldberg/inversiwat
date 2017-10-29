import { inject, injectable } from "inversify";

import { ParentStore } from "./ParentStore";
import { Logger } from "./Logger";
import { TYPES } from "./Types";

@injectable()
export class ChildStore extends ParentStore {
    @inject(TYPES.Logger)
    public readonly logger: Logger;
}
