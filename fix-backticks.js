const fs = require('fs');

const filePath = './expand-alto-batch36.js';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace all triple backticks with empty string
content = content.replace(/```/g, '');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed: Removed all triple backticks from expand-alto-batch36.js');
