interface BrowserOS {
    name?: string;
    version?: string;
    iconUrl?: string;
}
interface TraceItem {
    unixTimestamp: number;
    title: string;
    browser: BrowserOS;
    operatingSystem: BrowserOS;
    url: string;
    userAgent: string;
}
export { TraceItem };
