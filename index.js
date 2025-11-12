const fs = require('fs');

function bundle2json({ htmlPath, cssPath, jsPath, outputPath }) {
  const html = htmlPath ? fs.readFileSync(htmlPath, 'utf8') : '';
  const css = cssPath ? fs.readFileSync(cssPath, 'utf8') : '';
  const js = jsPath ? fs.readFileSync(jsPath, 'utf8') : '';

  const json = {
    html,
    css,
    js
  };
  outputPath ?? fs.writeFileSync(outputPath, JSON.stringify(json, null, 2), 'utf8');
  return json;
}

module.exports = {
  bundle2json
};
