interface BrowserOS {
  name?: string;
  version?: string;
  iconUrl?: string;
}

interface TraceItem {
  unixTimestamp: number;
  title: string;
  type: string;
  browser: BrowserOS;
  operatingSystem: BrowserOS;
  url?: string;
  userAgent: string;
  line?: number;
  column?: number;
  func?: string;
  context?: string;
}

interface Constructor {
  endpoint?: string;
  method?: string;
  dotObject?: boolean;
  alsoSend?: any;
}

export { TraceItem, Constructor };
