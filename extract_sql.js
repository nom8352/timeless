const fs = require('fs');

const sqlFile = 'f:\\Antigravity\\timeless\\public_html\\sql\\petrinat_wp266.sql';
const outputFile = 'f:\\Antigravity\\timeless\\extracted_pages.json';

try {
    const content = fs.readFileSync(sqlFile, 'utf8');
    const lines = content.split('\n');
    let pages = [];
    let tablePrefix = '';
    
    // Find table name
    for (let i = 0; i < Math.min(100, lines.length); i++) {
        if (lines[i].includes('CREATE TABLE')) {
            const match = lines[i].match(/CREATE TABLE `?([a-zA-Z0-9_]+posts)`?/);
            if (match) {
                tablePrefix = match[1];
                console.log('Found table name:', tablePrefix);
                break;
            }
        }
    }
    
    for (let line of lines) {
        if (line.includes('INSERT') && line.includes('posts')) {
            const valuesParts = line.split(' VALUES ');
            if (valuesParts.length > 1) {
                let rowsStr = valuesParts[1].trim();
                if (rowsStr.endsWith(';')) rowsStr = rowsStr.slice(0, -1);
                
                const rows = rowsStr.split(/,\s*(?=\()/); // Better split
                
                for (let row of rows) {
                    if (row.includes("'page'") && row.includes("'publish'")) {
                        // Extract title and snippet
                        const parts = row.split("','");
                        if (parts.length > 5) {
                            pages.push({
                                raw: row.substring(0, 100),
                                title: parts[5],
                                content_snippet: parts[4].substring(0, 500)
                            });
                        } else {
                            pages.push(row.substring(0, 500));
                        }
                    }
                }
            }
        }
    }
    
    fs.writeFileSync(outputFile, JSON.stringify(pages, null, 2));
    console.log(`Extraction complete. Found ${pages.length} potential pages.`);
} catch (e) {
    console.error(e);
}
