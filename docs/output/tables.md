---
sidebar_label: "Tables"
sidebar_position: 6
---

# Tables

## Exporting Tables

There are different ways by which a table can be embedded in the **output** page. [Example 3](../getting-started/example-3) in the introduction section provides a detailed example that the _**developer**_ can follow in which a table is generated and embedded in the output page. The example provides two options:

1. The [`<table>`](https://www.w3schools.com/html/html_tables.asp) HTML tags can be used to generate a table directly in the output editor as shown in the [Conditionals](../output/Conditionals#for-statement) section.
2. The Pandas library is used to construct the data as a Pandas dataframe, and then the `.to_html()` method is used to convert the dataframe into HTML that can be displayed.
