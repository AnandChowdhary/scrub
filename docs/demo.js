var scrub = new window.Scrub({
    endpoint: "http://0.0.0.0:3589/https://anandchowdhary8.wixsite.com/mysite/_functions/issues",
    dotObject: true,
    alsoSend: {
        statusCode: "new"
    }
});
// @ts-ignore
console.log("This should throw an error", undefinedVariable);
