import { inject, injectable } from "inversify";

import { Logger } from "../Logger";
import { ModelStore } from "../ModelStore";
import { IAppleModel, ModelType } from "./Models";

@injectable()
export class AppleStore extends ModelStore<IAppleModel> {
	public static readonly modelType = ModelType.Apple;

	@inject(Logger)
	private readonly logger: Logger;

	public readonly onClick = (): void => {
		this.logger.log("Clicked!");
	}
}
