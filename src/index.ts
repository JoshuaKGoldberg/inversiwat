import { Container } from "inversify";
import "reflect-metadata";

import { ChildStore } from "./ChildStore";
import { Logger } from "./Logger";
import { StoreFactory } from "./StoreFactory";
import { TYPES } from "./Types";

const container = new Container();

container.bind(TYPES.Logger).to(Logger);
container.bind(TYPES.StoreFactory).toConstantValue(new StoreFactory(container));

container
    .bind(TYPES.ChildStore)
    .toFactory(
        () =>
            () => new ChildStore());

const storeFactory = new StoreFactory(container);

const childStore = storeFactory.create();

childStore.logger.log("Why am I undefined?");
