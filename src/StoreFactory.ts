import { Container } from "inversify";

import { ChildStore } from "./ChildStore";
import { TYPES } from "./Types";

export class StoreFactory {
    public constructor(
        private readonly container: Container,
    ) { }

    public create(): ChildStore {
        return this.container.get<() => ChildStore>(TYPES.ChildStore)();
    }
}
