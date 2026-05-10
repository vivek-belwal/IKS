const fs = require('fs');
const path = require('path');

const iks = 'c:/Users/vivek/OneDrive/Documents/Desktop/IKS';
const pages = ['rigveda.html', 'samaveda.html', 'yajurveda.html', 'atharvaveda.html', 'ayurveda.html', 'mathematics.html', 'yoga.html', 'architecture.html', 'index.html'];

let allData = {};

pages.forEach(page => {
    const filePath = path.join(iks, page);
    let content = fs.readFileSync(filePath, 'utf8');
    
    let regex = /<p id="([^"]+)">([\s\S]*?)<\/p>/g;
    let match;
    let pageData = {};
    while ((match = regex.exec(content)) !== null) {
        let text = match[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        pageData[match[1]] = text;
    }
    allData[page] = pageData;
});

fs.writeFileSync(path.join(iks, 'extracted_text.json'), JSON.stringify(allData, null, 2), 'utf8');
console.log('Extracted exact paragraph text successfully.');
