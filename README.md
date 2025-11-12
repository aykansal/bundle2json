# bundle2json

A Node.js utility to combine user-supplied HTML, CSS, and JavaScript source files into a single JSON file. This is useful for bundling code as data, sharing front-end resources, or storing code content for programmatic use and code generation AI agents.

## Features

- Reads user-provided HTML, CSS, and JS files
- Outputs a structured JSON file with code content
- Simple API, configurable paths

## Installation

```bash
npm install bundle2json
```

## Usage

```js
const { combineToJson } = require('bundle2json');

combineToJson({
  htmlPath: 'index.html',
  cssPath: 'style.css',
  jsPath: 'script.js',
  outputPath: 'bundle.json'
});
```

All arguments are optional—use only the code types you need. The output JSON will include only provided file content.

## Example Output

```json
{
  "html": "<html>...</html>",
  "css": "body { ... }",
  "js": "console.log('Hello, world!');"
}
```

## API

### combineToJson(options)

| Option      | Type   | Description                     |
|-------------|--------|---------------------------------|
| htmlPath    | string | Path to HTML file (optional)    |
| cssPath     | string | Path to CSS file (optional)     |
| jsPath      | string | Path to JS file (optional)      |
| outputPath  | string | Path to output JSON file        |

## License

MIT