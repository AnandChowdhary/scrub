# 🧹 Scrub

[![Travis CI](https://img.shields.io/travis/AnandChowdhary/scrub.svg)](https://travis-ci.org/AnandChowdhary/scrub)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/scrub.svg)](https://github.com/AnandChowdhary/scrub/blob/master/LICENSE)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AnandChowdhary/scrub.svg)
[![Minzipped size](https://img.shields.io/bundlephobia/minzip/scrub-js.svg)](https://www.npmjs.com/package/scrub-js)
[![NPM version](https://img.shields.io/npm/v/scrub-js.svg)](https://www.npmjs.com/package/scrub-js)
[![Types](https://img.shields.io/npm/types/scrub-js.svg)](https://www.npmjs.com/package/scrub-js)

With Scrub, you can easily track errors and send them to your backend.

## ⭐ Getting started

Install Scrub as a dependency:

```bash
npm install scrub-js
```

Or, if you're using Yarn:

```bash
yarn add scrub-js
```

Then import the library:

```js
import Scrub from "scrub-js";
```

And initialize it with your settings:

```js
const scrub = new Scrub({ endpoint: "https://example.com/track" });
```

You can also use a CDN:

```html
<script src="https://unpkg.com/scrub-js"></script>
```

Now, your errors are tracked. Try it with `throw new Error("Example error");`.

This is what an error object looks like:

```js
const error = {
  "unixTimestamp": 1558166641,
  "title": "undefinedVariable is not defined",
  "browser": {
    "name": "Chrome",
    "version": "74.0.3729.157",
    "major": "74",
    "iconUrl": "https://cdnjs.cloudflare.com/ajax/libs/browser-logos/51.0.13/chrome/chrome_128x128.png"
  },
  "operatingSystem": {
    "name": "Mac OS",
    "version": "10.14.3",
    "iconUrl": "https://unpkg.com/analytics-icons/icons/windows.png"
  },
  "type": "ReferenceError",
  "url": "https://anandchowdhary.github.io/scrub/demo.js",
  "line": 9,
  "column": 43,
  "func": "?",
  "context": `
    alsoSend: {
        statusCode: "new"
      }
    });
    console.log("This should throw an error", undefinedVariable);
  `
};
```

## 📝 License

MIT
