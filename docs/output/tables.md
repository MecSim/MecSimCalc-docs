---
sidebar_label: "Tables"
sidebar_position: 6
---

# Tables

## Exporting Tables

There are different ways by which a table can be embedded in the **output** page. [Example 3](../getting-started/example-3) in the introduction section provides a detailed example that the _**developer**_ can follow in which a table is generated and embedded in the output page. The example provides two options:

1. The [`<table>`](https://www.w3schools.com/html/html_tables.asp) HTML tags can be used to generate a table directly in the output editor as shown in the [Conditionals](/output/conditionals#for-statement) section.
2. The Pandas library is used to construct the data as a Pandas dataframe, and then the `.to_html()` method is used to convert the dataframe into HTML that can be displayed.
3. Using the `mecsimcalc` library to convert a Pandas dataframe into an HTML table.

## Using the `mecsimcalc` library

### Code

```python
import pandas as pd
import mecsimcalc as msc


def main(inputs):
    table = inputs["table"]

    # Pick header names for the Columns
    column_names = ["Column 1", "Column 2", "Column 3"]

    # Coverting the table to html using the mecsimcalc library
    table_html = msc.print_table(column_names, table)

    # If you want to modify the table, or extract data from it
    # you can convert it to a dataframe using the mecsimcalc library
    df = msc.table_to_dataframe(column_names, table)
    dataframe_html_table = df.to_html(index = True)

    return {
        "html_table": html_table,
        "dataframe_html_table": dataframe_html_table
    }
```

### Output

```
Displaying the table without converting it to a dataframe
{{ outputs.html_table }}

Displaying the table after converting it to a dataframe
{{ outputs.dataframe_html_table }}
```
