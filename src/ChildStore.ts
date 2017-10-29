import { inject, injectable } from "inversify";

import { ParentStore } from "./ParentStore";
import { Logger } from "./Logger";

@injectable()
export class ChildStore extends ParentStore {
    @inject(Logger)
    public readonly logger: Logger;
}
