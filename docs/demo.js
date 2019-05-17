var scrub = new window.Scrub();
console.error = function () { };
// @ts-ignore
console.log("This should throw an error", undefinedVariable);
