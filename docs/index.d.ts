import { TraceItem } from "./interfaces";
import { StackTrace } from "tracekit";
export default class Scrub {
    trace: TraceItem[];
    constructor();
    createTraceItem(stackTrack: StackTrace): TraceItem;
    handler(stackTrace: StackTrace): void;
    updateValue(): void;
}
