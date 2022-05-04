---
sidebar_label: "Utility Functions"
sidebar_position: 100
---

# Python Utility Functions

The following provides a list of Python utility functions that appeared throughout these documentations and that the _**developer**_ may find useful for the **Code** step.

## Generating Graphs

This utility function can be used to convert a `matplotlib` graph to an [`<img>`](https://www.w3schools.com/tags/tag_img.asp) HTML tag that can be embedded in the output page.

```python
import matplotlib.pyplot as plt
import numpy as np
import base64
import io

def plt_show(plt, width=500, dpi=100):
    # Converts matplotlib plt to image data string
    #   plt is the matplotlib pyplot or figure
    #   width is the width of the graph image in pixels
    #   dpi (dots per inch) is the resolution of the image
    bytes = io.BytesIO()
    plt.savefig(bytes, format='png', dpi=dpi)  # Save as png image
    if hasattr(plt, "close"):
        plt.close()
    bytes.seek(0)
    base64_string = "data:image/png;base64," + \
        base64.b64encode(bytes.getvalue()).decode("utf-8")
    return "<img src='" + base64_string + "' width='" + str(width) + "'>"

def main(inputs):
    # Code to generate a plot using matplot lib (plt)
    # The following line uses the plt_show function to create an embeddable image
    img = plt_show(plt)
    return {"Image": img}
```

## Text Files

This utility function can be used to generate a text file to be embedded in the output page using the [`<a>`](https://www.w3schools.com/tags/tag_a.asp) HTML tag, allowing the user to download it.

```python
import base64

def Text_File(string,filename):
    # This function generates the required file_data string for download.
    # You can call this function to generate a text file containing the "string" data
    # filename provides the name of the file when the user attempts to download it.
    newdata = base64.b64encode(string.encode()).decode()
    extension = ".txt"
    meta = "data:text/plain;base64,"
    encoded_data = meta + newdata
    return "<a href='" + encoded_data + "' download='" + filename + extension + "'>Download File</a>"

def main(inputs):
    # code to generate the required string variable "t".
    t = ...
    File = Text_File(t, "MyFile")
    return {"File":File}
```

## Image Files

This utility function can be used to generate an image file to be embedded in the output page using the [`<a>`](https://www.w3schools.com/tags/tag_a.asp) HTML tag, allowing the user to download it.

```python
def Image_File(data, extension, filename):
    return "<a href='" + data + "' download='" + filename + "." + extension + "'>Download Image</a>"

def main(inputs):
    # code to generate encoded image file (encoded_data) and image format (extension).
    imagefile = Image_File(encoded_data,extension,"MyImage")
    return {
        # Download using <a> tags
        "File": imagefile,
    }
```

## Displaying Images

This utility function can be used to generate an image file to be displayed in the output page using the [`<img>`](https://www.w3schools.com/tags/tag_img.asp) HTML tag.

```python
def Image_Embed(data):
    return "<img src='" + data + "'>"

def main(inputs):
    #code to generate encoded image file (encoded_data)
    image = Image_Embed(encoded_data)
    return {
        # Display using <img> tag
        "Image": image,
    }
```

## Generating Tables

This utility function generates a string using the [`<table>`](https://www.w3schools.com/html/html_tables.asp) HTML tag that can be embedded in the output page to display a table. This utility routine works only with tables having more than one column.

```python
def build_html_table(columns, column_headers):
    # <table> is the table
    # <tr> is table row
    # <th> is table header
    # <td> is table data cell
    # (1) Table opening table
    html_table = "<table border='3' cellpadding='5' style='border-collapse:collapse;'><tr>"
    # (2) Add header row
    rows = len(columns[0])
    for h in column_headers:
        html_table += "<th>" + h + "</th>"
    html_table += "</tr>"
    # (3) Add all data rows
    for i in range(rows):
        html_table += "<tr>"
        for column in columns:
            html_table += "<td>" + str(column[i]) + "</td>"
        html_table += "</tr>"
    # (4) Add the table closing tag
    html_table += "</table>"
    return html_table

def main(inputs):
    # Code to generate the arrays col1, col2, col3, ...
    columns = [col1,col2,col3,...]
    column_headers = ["Title 1", "Title 2","Title 3",...]
    table = build_html_table(columns,column_headers)
    return {"Table":table }
```
