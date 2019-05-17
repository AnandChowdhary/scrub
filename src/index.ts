import { TraceItem } from "./interfaces";
import TraceKit, { StackTrace } from "tracekit";

export default class Scrub {
  trace: TraceItem[] = [];
  constructor() {
    TraceKit.report.subscribe(this.handler.bind(this));
  }
  createTraceItem(stackTrack: StackTrace): TraceItem {
    const title = stackTrack.message;
    return { title };
  }
  handler(stackTrace: StackTrace) {
    const item = this.createTraceItem(stackTrace);
    this.trace.push(item);
    this.updateValue();
  }
  updateValue() {
    const value = document.querySelector("#value");
    if (value)
      value.innerHTML = `${this.trace.length} error${
        this.trace.length === 1 ? "" : "s"
      }`;
  }
}

(<any>window).Scrub = Scrub;
