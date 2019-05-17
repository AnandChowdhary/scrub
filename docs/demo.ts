const scrub = new (<any> window).Scrub();
console.error = () => {};

// @ts-ignore
console.log("This should throw an error", undefinedVariable);
