export const enum ModelType {
    Apple = "apple",
}

export interface IBasicModel {
	type: ModelType;
}

export type IModel =
    | IAppleModel
;

export interface IAppleModel extends IBasicModel {
    type: ModelType.Apple;
}
