import { injectable } from "inversify";

@injectable()
export class Logger {
    public log(message: string): void {
        console.log("Logging:", message);
    }
}
