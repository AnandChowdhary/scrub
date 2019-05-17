import { StackTrace } from "tracekit";
import { TraceItem, Constructor } from "./interfaces";
export default class Scrub {
    trace: TraceItem[];
    options?: Constructor;
    constructor(options: Constructor);
    createTraceItem(stackTrace: StackTrace): TraceItem;
    handler(stackTrace: StackTrace): void;
    updateValue(): void;
    sendToServer(item: TraceItem): Promise<void>;
}
