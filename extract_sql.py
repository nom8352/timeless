import re
import json

sql_file = r"f:\Antigravity\timeless\public_html\sql\petrinat_wp266.sql"
output_file = r"f:\Antigravity\timeless\extracted_pages.json"

try:
    with open(sql_file, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    # WordPress SQL dumps usually have INSERT INTO `wp_posts` VALUES (...)
    # Since parsing SQL with regex is fragile, we'll try a heuristic approach.
    # Looking for INSERT statements for wp_posts
    insert_pattern = re.compile(r"INSERT INTO `[^`]*posts` VALUES \((.*?)\);", re.IGNORECASE | re.DOTALL)
    
    pages = []
    
    # We will search for all INSERT INTO posts statements.
    # WordPress rows: ID, post_author, post_date, post_date_gmt, post_content, post_title, post_excerpt, post_status, comment_status, ping_status, post_password, post_name, to_ping, pinged, post_modified, post_modified_gmt, post_content_filtered, post_parent, guid, menu_order, post_type, post_mime_type, comment_count
    
    # A safer approach for a massive SQL string: regex findall for post_title and post_content using known post_type='page'
    # Actually, let's just use string splitting since regex might blow up memory.
    
    # Alternative: search line by line
    with open(sql_file, 'r', encoding='utf-8', errors='ignore') as f:
        for line in f:
            if "INSERT INTO" in line and "posts`" in line:
                # Naive split by '),(' to get rows
                rows = line.split("),(")
                for row in rows:
                    if "'page'" in row and "'publish'" in row:
                        pages.append(row[:500]) # Store beginning to see structure
                        
    with open(output_file, 'w', encoding='utf-8') as out:
        json.dump(pages[:20], out, indent=2, ensure_ascii=False)
        
    print(f"Extraction preview saved to {output_file}")
except Exception as e:
    print("Error:", e)
