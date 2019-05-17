interface BrowserOS {
    name?: string;
    version?: string;
}
interface TraceItem {
    title: string;
    browser: BrowserOS;
    operatingSystem: BrowserOS;
    userAgent: string;
    url: string;
}
export { TraceItem };
