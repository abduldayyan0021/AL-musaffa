const fs = require('fs');
const content = fs.readFileSync('admin.js', 'utf8');
const lines = content.split('\n');
lines.forEach((line, index) => {
  if (line.includes('productIndex')) {
    console.log(`Line ${index + 1}: ${line.trim()}`);
  }
});
