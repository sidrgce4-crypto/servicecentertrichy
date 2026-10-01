const fs = require('fs');

const css = fs.readFileSync('css/style.css', 'utf8');

// Strip comments
const stripped = css.replace(/\/\*[\s\S]*?\*\//g, '');

let openBraces = 0;
let lineNum = 1;
let errors = [];

const lines = css.split('\n');
let insideComment = false;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  // Basic brace counter ignoring comments
  for (let j = 0; j < line.length; j++) {
    if (!insideComment && line[j] === '/' && line[j+1] === '*') {
      insideComment = true;
      j++;
    } else if (insideComment && line[j] === '*' && line[j+1] === '/') {
      insideComment = false;
      j++;
    } else if (!insideComment) {
      if (line[j] === '{') openBraces++;
      if (line[j] === '}') {
        openBraces--;
        if (openBraces < 0) {
          errors.push(`Unmatched closing brace '}' at line ${i + 1}: "${line.trim()}"`);
          openBraces = 0;
        }
      }
    }
  }
}

if (openBraces !== 0) {
  errors.push(`Unclosed opening braces: ${openBraces} brace(s) still open at end of file`);
}

console.log('--- CSS Syntax Validation ---');
if (errors.length === 0) {
  console.log('PASS: All CSS blocks are properly opened and closed (0 brace mismatch errors).');
} else {
  console.error('FAIL: Found CSS syntax errors:');
  errors.forEach(e => console.error(e));
}
