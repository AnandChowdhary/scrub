const scrub = new (<any> window).Scrub({
  endpoint: "https://anandchowdhary8.wixsite.com/mysite/_functions/issues",
  dotObject: true,
  alsoSend: {
    status: "new"
  }
});

// @ts-ignore
console.log("This should throw an error", undefinedVariable);
