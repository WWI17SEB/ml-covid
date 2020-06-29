f = open("wikipedia-tablerows-html.txt") # html content from first until last row (except headers)
content = f.read()
f.close()

def get_html_tag_content(html_line):
    content = ""
    tag_count = 0
    for char in html_line:
        if (char == "<"):
            tag_count += 1
            continue
        if (char == ">"):
            tag_count -= 1
            continue
        if (tag_count == 0):
            content += char
    return content

csv = "country,score,electoral_process_and_pluralism,functioning_of_government,political_participation,political_culture,civil_liberties,regime_type"
number_of_columns_after_country = 7
for row in content.split("<tr>"):
    columns = row.splitlines()
    column_id_country = -1
    for c in range(len(columns)):
        column = get_html_tag_content(columns[c])
        if (column_id_country >= 0 and c <= column_id_country + number_of_columns_after_country):
            csv += "," + column
        elif (column.startswith("&nbsp;")):
            column_id_country = c
            csv += "\n" + column.replace("&nbsp;","").replace("South Korea[n 2]","South Korea")

f = open("Democracy Index (2019).csv", "w")
f.write(csv)
f.close()
