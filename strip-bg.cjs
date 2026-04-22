const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file === 'page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const originalContent = content;
      
      // Remove bg-surface from classNames
      content = content.replace(/className=\"([^\"]*)bg-surface([^\"]*)\"/g, 'className=\"$1$2\"');
      content = content.replace(/className=\'([^\']*)bg-surface([^\']*)\'/g, 'className=\'$1$2\'');
      content = content.replace(/className=\{\`([^\`]*)bg-surface([^\`]*)\`\}/g, 'className={\`$1$2\`}');
      
      // Remove any double spaces that might have been created
      content = content.replace(/className=\"([^\"]*)\s{2,}([^\"]*)\"/g, 'className=\"$1 $2\"');
      
      // Remove specific dark mode styles that hide the background
      content = content.replace(/style=\{\{\s*background:\s*["']var\(--color-abyss\)["']\s*\}\}/g, '');
      content = content.replace(/style=\{\{\s*background:\s*["']var\(--bg-page\)["']\s*\}\}/g, '');
      content = content.replace(/style=\{\{\s*background:\s*["']#F8F9FA["']\s*\}\}/g, '');
      
      // Clean up empty style={} remaining after replacements
      content = content.replace(/style=\{\{\s*\}\}/g, '');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated ' + fullPath);
      }
    }
  }
}

processDir('src/app/(portal)');
console.log('Done processing background removals.');
