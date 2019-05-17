import { StackTrace } from "tracekit";
import { TraceItem } from "./interfaces";
export default class Scrub {
    trace: TraceItem[];
    constructor();
    createTraceItem(stackTrack: StackTrace): TraceItem;
    handler(stackTrace: StackTrace): void;
    updateValue(): void;
}
