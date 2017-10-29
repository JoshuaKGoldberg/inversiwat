import { Container } from "inversify";

import { ModelStore } from "./ModelStore";
import { IBasicModel } from "./Stores/Models";

export interface IModelStoreClass {
	modelType: string;
	new(model: IBasicModel, modelStoreFactory: ModelStoreFactory): ModelStore;
}

export type IModelStoreCreator<TModelStore extends ModelStore = ModelStore> =
	(model: IBasicModel, modelStoreFactory: ModelStoreFactory) => TModelStore;

export class ModelStoreFactory {
	private readonly registrations = new Map<string, IModelStoreClass>();

	public constructor(
		private readonly container: Container,
		storeClasses: IModelStoreClass[]) {
			for (const storeClass of storeClasses) {
				this.registrations.set(storeClass.modelType, storeClass);
			}
		}

	public create = <TModel extends IBasicModel, TModelStore extends ModelStore = ModelStore>(
		model: TModel,
	): TModelStore => {
		const modelStoreClass = this.registrations.get(model.type);
		if (modelStoreClass === undefined) {
			throw new Error(`Unknown model type: '${model.type}'.`);
		}

		return this.container.get<IModelStoreCreator<TModelStore>>(modelStoreClass.modelType)(model, this);
	}
}
