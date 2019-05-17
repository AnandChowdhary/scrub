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
<script src="https://unpkg.com/scrub"></script>
```

Now, your errors are tracked. Try it with `throw new Error("Example error");`.

## 📝 License

MIT
