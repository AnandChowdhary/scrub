import { TraceItem } from "./interfaces";
import TraceKit, { StackTrace } from "tracekit";
import { UAParser } from "ua-parser-js";

export default class Scrub {
  trace: TraceItem[] = [];
  constructor() {
    TraceKit.report.subscribe(this.handler.bind(this));
  }
  createTraceItem(stackTrack: StackTrace): TraceItem {
    const userAgent = new UAParser(stackTrack.useragent);
    return {
      unixTimestamp: Math.floor(new Date().getTime() / 1000),
      title: stackTrack.message,
      browser: userAgent.getBrowser(),
      operatingSystem: userAgent.getOS(),
      userAgent: stackTrack.useragent,
      url: stackTrack.url
    };
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
    const errorsString = document.querySelector("#errorsString");
    if (errorsString)
      errorsString.innerHTML = JSON.stringify(this.trace, null, 2);
    console.log(this.trace);
  }
}

(<any>window).Scrub = Scrub;
