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
                
                // Split rows. This is tricky because content can contain '),('.
                // But for a rough extraction, splitting by `),(` is a start.
                // A better way: match `(\d+,2,'20.*?','publish',.*?)`
                // Let's just use the crude split and look for publish.
                const rows = rowsStr.split(/,\s*(?=\()/);
                
                for (let row of rows) {
                    if (row.includes("'page'") && row.includes("'publish'") && !row.includes("'revision'")) {
                        // The structure is (ID, post_author, post_date, post_date_gmt, post_content, post_title, ...)
                        // Let's try to extract post_title and post_content using regex.
                        // post_date is like '2015-06-22 04:34:45'
                        const match = row.match(/\(\d+,\d+,'[^']+','[^']+','(.*?)','(.*?)','/);
                        if (match) {
                            pages.push({
                                title: match[2],
                                content: match[1]
                            });
                        }
                    }
                }
            }
        }
    }
    
    fs.writeFileSync(outputFile, JSON.stringify(pages, null, 2));
    console.log(`Extraction complete. Saved to ${outputFile}`);
} catch (e) {
    console.error(e);
}
