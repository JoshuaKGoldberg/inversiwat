import { Container } from "inversify";
import "reflect-metadata";

import { Logger } from "./Logger";
import { ModelStore } from "./ModelStore";
import { IModelStoreCreator, ModelStoreFactory } from "./ModelStoreFactory";
import { AppleStore } from "./Stores/AppleStore";
import { IAppleModel, ModelType } from "./Stores/Models";

const container = new Container();

container.bind(Logger).toSelf();

container
    .bind<IModelStoreCreator>(ModelType.Apple)
    .toFactory<ModelStore>(
        () =>
            (model: IAppleModel, modelStoreFactory) => new AppleStore(model, modelStoreFactory));

const modelStoreFactory = new ModelStoreFactory(container, [AppleStore]);

const appleStore = modelStoreFactory.create<IAppleModel, AppleStore>({
    type: ModelType.Apple
});

// appleStore.logger will be undefined here :(
appleStore.onClick();
