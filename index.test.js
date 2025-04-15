const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('Debe contener el título Hola Mundo 👋', () => {
  const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
  const dom = new JSDOM(html);
  const h1 = dom.window.document.querySelector('h1');
  expect(h1.textContent).toContain('Hola Mundo');
});
