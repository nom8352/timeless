const fs = require('fs');

const sqlFile = 'f:\\Antigravity\\timeless\\public_html\\sql\\petrinat_wp266.sql';
const outputFile = 'f:\\Antigravity\\timeless\\extracted_full_pages.json';

try {
    const content = fs.readFileSync(sqlFile, 'utf8');
    
    // We are looking for lines with INSERT INTO `wp266_posts`
    // And within those, we want to extract (ID, author, date, date_gmt, CONTENT, TITLE, excerpt, STATUS...)
    // A crude but effective regex for WP posts:
    // \((\d+),\d+,'[^']+','[^']+','(.*?)','(.*?)','[^']*','publish'
    
    let pages = [];
    const lines = content.split('\n');
    
    for (let line of lines) {
        if (line.includes('INSERT') && line.includes('posts')) {
            const valuesParts = line.split(' VALUES ');
            if (valuesParts.length > 1) {
                let rowsStr = valuesParts[1].trim();
                if (rowsStr.endsWith(';')) rowsStr = rowsStr.slice(0, -1);
                
                const rows = rowsStr.split(/\),\s*(?=\()/); 
                
                for (let row of rows) {
                    if (row.includes("'page'") && row.includes("'publish'")) {
                        // The title usually comes before the excerpt which is usually empty '', then 'publish'
                        // Let's just find the title and content using indexOf
                        
                        // row format generally: (ID, author, date, date_gmt, 'CONTENT', 'TITLE', 'EXCERPT', 'STATUS', ...
                        // Because CONTENT can have anything, we find the boundaries.
                        
                        // 1. strip leading '('
                        let temp = row.startsWith('(') ? row.substring(1) : row;
                        
                        // 2. find first 4 fields: ID, author, date, dategmt
                        let fieldEnd = 0;
                        for(let i=0; i<4; i++) {
                            let nextComma = temp.indexOf(',', fieldEnd);
                            // If the field is a string, it might have commas inside it, but dates usually don't.
                            if (temp[fieldEnd] === "'") {
                                nextComma = temp.indexOf("',", fieldEnd) + 1;
                            }
                            fieldEnd = nextComma + 1;
                        }
                        
                        // Content starts at fieldEnd
                        let contentStart = fieldEnd;
                        // It starts with a quote if it's not NULL, but content is usually a string
                        if (temp[contentStart] === "'") contentStart++;
                        
                        // Now we look backwards from 'publish' to find the TITLE
                        let publishIdx = temp.indexOf(",'publish'");
                        if (publishIdx !== -1) {
                            // Before publish, there is excerpt. `,'excerpt','publish'`
                            // find the comma before excerpt
                            let excerptEnd = publishIdx;
                            let excerptStartQuote = temp.lastIndexOf("',", excerptEnd - 1);
                            if (temp[excerptEnd-1] === "'") {
                                // Excerpt is a string
                                let excerptStart = temp.lastIndexOf(",'", excerptEnd - 1);
                                
                                // Before excerpt is TITLE
                                let titleEnd = excerptStart;
                                let titleStart = temp.lastIndexOf(",'", titleEnd - 1) + 2;
                                let title = temp.substring(titleStart, titleEnd - 1);
                                
                                // Before TITLE is CONTENT
                                let contentEnd = titleStart - 3;
                                
                                let finalContent = temp.substring(contentStart, contentEnd);
                                
                                // Unescape WordPress SQL escapes
                                finalContent = finalContent.replace(/\\r\\n/g, '\n')
                                                           .replace(/\\n/g, '\n')
                                                           .replace(/\\"/g, '"')
                                                           .replace(/\\'/g, "'");

                                pages.push({
                                    title: title,
                                    content: finalContent.trim()
                                });
                            }
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
