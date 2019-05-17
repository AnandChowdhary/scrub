import { ScrubInterface } from "./interfaces";
import { StackTrace } from "tracekit";
export default class Scrub implements ScrubInterface {
    constructor();
    handler(StackTrace: StackTrace): void;
}
