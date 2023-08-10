---
sidebar_label: "Generating Tables"
sidebar_position: 5
---

# Generating Tables

MecSimCalc provides a flexible platform allowing the **_developer_** to generate tables in a variety of ways:

1. The output editor allows for html tags and a _**developer**_ familiar with [html tables](https://www.w3schools.com/html/html_tables.asp) can use this functionality to design a table in the **output** step.
2. A _**developer**_ can choose to generate the table using a utility function in the **code** step that generates the required html string. For example, the following utility function from the mecsimcalc library `msc.print_table()` generates the required html table based on an input array of the table columns and an array of the column headers:
3. A _**developer**_ can use one of the many Python libraries that can output a html table directly. For example, the popular [Pandas library](https://pandas.pydata.org/), which is available on MecSimCalc has the built-in functionality of converting [Pandas tables to html](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_html.html).

In the next example, we will show how an html table can be generated using both mecsimcalc library and the Pandas library.
