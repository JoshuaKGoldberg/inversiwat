import { injectable } from "inversify";

import { IBasicModel } from "./Stores/Models";
import { ModelStoreFactory } from "./ModelStoreFactory";

export interface IModelStoreDependencies<TModel extends IBasicModel = IBasicModel> {
    model: TModel;
    modelStoreFactory: ModelStoreFactory;
}

@injectable()
export abstract class ModelStore<TModel extends IBasicModel = IBasicModel> {
    public constructor(
        public readonly model: TModel,
        protected readonly modelStoreFactory: ModelStoreFactory) { }
}
