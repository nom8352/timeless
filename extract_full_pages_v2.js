const fs = require('fs');

const sqlFile = 'f:\\Antigravity\\timeless\\public_html\\sql\\petrinat_wp266.sql';
const outputFile = 'f:\\Antigravity\\timeless\\extracted_full_pages.json';

try {
    const content = fs.readFileSync(sqlFile, 'utf8');
    const lines = content.split('\n');
    let pages = [];
    
    for (let line of lines) {
        if (line.includes('INSERT INTO') && line.includes('wp266_posts')) {
            const valuesParts = line.split(' VALUES ');
            if (valuesParts.length > 1) {
                let rowsStr = valuesParts[1].trim();
                if (rowsStr.endsWith(';')) rowsStr = rowsStr.slice(0, -1);
                
                // Split by '),('
                const rows = rowsStr.split(/\),\s*\(/);
                
                for (let row of rows) {
                    if (row.includes("'page'") && row.includes("'publish'") && !row.includes("'revision'")) {
                        // Let's try to extract post_title by looking at the 6th field usually
                        // We can just dump the whole row to see
                        pages.push(row);
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
