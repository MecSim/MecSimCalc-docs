---
sidebar_label: "Generating Tables"
sidebar_position: 5
---

MecsimCalc provides a flexible platform allowing the **_developer_** to generate tables in a variety of ways. First, the output window enables html tags; a _**developer**_ familiar with [html tables](https://www.w3schools.com/html/html_tables.asp) can use this functionality to design a table in the output page. Alternatively, a _**developer**_ can choose to generate the table using a utility routine in the code step that generates the required html. For example, the following utility function `build_html_table` generates the required html table based on an input array of the table columns and an array of the column headers:

```python
def build_html_table(columns, ColumnHeaders):
    # <table> is the table
    # <tr> is table row
    # <th> is table header
    # <td> is table data cell
    # (1) Table opening table
    html_table = "<table border='3' cellpadding='5' style='border-collapse:collapse;'><tr>"
    # (2) Add header row
    rows=len(columns[0])
    for h in ColumnHeaders:
        html_table += "<th>"+h+"</th>"
    html_table += "</tr>"
    # (3) Add all data rows
    for i in range(rows):
        html_table += "<tr>"
        for column in columns:
            html_table += "<td>"+str(column[i])+"</td>"
        html_table += "</tr>"
    # (4) Add the table closing tag
    html_table += "</table>"
    return html_table
```

:::caution

The above utility routine works only for a table with multiple columns. It can easily be edited to generate a table with one column.

:::

Alternatively, a _**developer**_ can choose many of the python libraries that can output an html table directly. For example, the [Pandas library](https://pandas.pydata.org/) which is available to MecsimCalc _**developers**_ has the built-in functionality of converting [pandas tables to html](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_html.html).

In the next example, we show how an html table can be generated using both a utility routine and Pandas library.
