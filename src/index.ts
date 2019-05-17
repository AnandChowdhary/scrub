import { UAParser } from "ua-parser-js";
import TraceKit, { StackTrace } from "tracekit";
import icon from "analytics-icons";
import { TraceItem } from "./interfaces";

export default class Scrub {
  trace: TraceItem[] = [];
  constructor() {
    TraceKit.report.subscribe(this.handler.bind(this));
  }
  createTraceItem(stackTrack: StackTrace): TraceItem {
    const userAgent = new UAParser(stackTrack.useragent);
    const browserInfo = userAgent.getBrowser();
    const operatingSystemInfo = userAgent.getOS();
    return {
      unixTimestamp: Math.floor(new Date().getTime() / 1000),
      title: stackTrack.message,
      browser: {
        ...browserInfo,
        iconUrl: icon(
          browserInfo.name || "chrome",
          "https://cdnjs.cloudflare.com/ajax/libs/browser-logos/51.0.13/chrome/chrome_128x128.png"
        )
      },
      operatingSystem: {
        ...operatingSystemInfo,
        iconUrl: icon(
          operatingSystemInfo.name || "chrome",
          "https://cdnjs.cloudflare.com/ajax/libs/browser-logos/51.0.13/chrome/chrome_128x128.png"
        )
      },
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
