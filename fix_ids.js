const fs = require('fs');
const path = require('path');

const iks = 'c:/Users/vivek/OneDrive/Documents/Desktop/IKS';
const pages = ['rigveda.html', 'samaveda.html', 'yajurveda.html', 'atharvaveda.html', 'ayurveda.html', 'mathematics.html', 'yoga.html', 'architecture.html', 'index.html'];

pages.forEach(page => {
    const filePath = path.join(iks, page);
    let content = fs.readFileSync(filePath, 'utf8');
    
    let prefix = page.replace('.html', '');
    if (prefix.endsWith('veda')) prefix = prefix.replace('veda', '');
    if (page === 'index.html') prefix = 'idx';
    
    let counter = 1;
    content = content.replace(/<p id="[^"]+">/g, '<p>'); // remove bad ids first
    
    content = content.replace(/<p>([\s\S]*?)<\/p>/g, (match, p1) => {
        if (p1.includes('data-hi=')) return match; // skip if it already has translation attributes
        const id = prefix + '_' + counter++;
        return '<p id="' + id + '">' + p1 + '</p>';
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed IDs for ' + page);
});
