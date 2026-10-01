const fs = require('fs');

const css = fs.readFileSync('css/style.css', 'utf8');
const lines = css.split('\n');

let stack = [];
let insideComment = false;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  for (let j = 0; j < line.length; j++) {
    if (!insideComment && line[j] === '/' && line[j+1] === '*') {
      insideComment = true;
      j++;
    } else if (insideComment && line[j] === '*' && line[j+1] === '/') {
      insideComment = false;
      j++;
    } else if (!insideComment) {
      if (line[j] === '{') {
        stack.push({ lineNum: i + 1, lineText: line.trim() });
      }
      if (line[j] === '}') {
        stack.pop();
      }
    }
  }
}

console.log('Unclosed block(s) in style.css:');
stack.forEach(s => console.log(`Line ${s.lineNum}: "${s.lineText}"`));
