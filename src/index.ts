import { UAParser } from "ua-parser-js";
import TraceKit, { StackTrace } from "tracekit";
import { dot } from "dot-object";
import icon from "analytics-icons";
import { TraceItem, Constructor } from "./interfaces";

const dotify = (object: any) => {
  object = dot(object);
  for (let key in object) {
    if (key.includes(".")) {
      object[key.replace(/\./g, "_")] = object[key];
      delete object[key];
    }
  }
  return object;
};

export default class Scrub {
  trace: TraceItem[] = [];
  options?: Constructor;
  constructor(options: Constructor) {
    if (options) this.options = options;
    TraceKit.report.subscribe(this.handler.bind(this));
  }
  createTraceItem(stackTrace: StackTrace) {
    const userAgent = new UAParser(stackTrace.useragent);
    const browserInfo = userAgent.getBrowser();
    const operatingSystemInfo = userAgent.getOS();
    const item: TraceItem = {
      unixTimestamp: Math.floor(new Date().getTime() / 1000),
      title: stackTrace.message,
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
          operatingSystemInfo.name || "windows",
          "https://unpkg.com/analytics-icons/icons/windows.png"
        )
      },
      type: stackTrace.name,
      userAgent: stackTrace.useragent
    };
    if (stackTrace.stack.length) {
      item.url = stackTrace.stack[0].url;
      item.line = stackTrace.stack[0].line;
      item.column = stackTrace.stack[0].column;
      item.func = stackTrace.stack[0].func;
      item.context = stackTrace.stack[0].context.join("\n");
    }
    return item;
  }
  handler(stackTrace: StackTrace) {
    const item = this.createTraceItem(stackTrace);
    this.trace.push(item);
    this.sendToServer(item);
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
  }
  async sendToServer(item: TraceItem) {
    try {
      if (!this.options || !this.options.endpoint) return;
      if (this.options.dotObject) item = dotify(item);
      if (this.options.alsoSend) item = { ...item, ...this.options.alsoSend };
      await fetch(this.options.endpoint, {
        method: this.options.method || "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "scrub"
        }
      });
    } catch (error) {
      // Inception
    }
  }
}

(<any>window).Scrub = Scrub;
