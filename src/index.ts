import { ScrubInterface } from "./interfaces";
import TraceKit, { StackTrace } from "tracekit";

export default class Scrub implements ScrubInterface {
  constructor() {
    TraceKit.report.subscribe(this.handler);
  }
  handler(StackTrace: StackTrace) {
    console.log("Tracing this", StackTrace);
  }
}

(<any>window).Scrub = Scrub;
