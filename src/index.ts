import { Container } from "inversify";
import "reflect-metadata";

import { ChildStore } from "./ChildStore";
import { Logger } from "./Logger";
import { StoreFactory } from "./StoreFactory";
import { TYPES } from "./Types";

const container = new Container();

container.bind(Logger).toSelf();

container
    .bind(TYPES.ChildStore)
    .toFactory(
        () =>
            (modelStoreFactory) => new ChildStore(modelStoreFactory));

const storeFactory = new StoreFactory(container);

const childStore = storeFactory.create();

childStore.logger.log("Why am I undefined?");
