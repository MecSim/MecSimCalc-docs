---
sidebar_label: "Text Files"
sidebar_position: 3
---

# Text Files

The [text files](https://mecsimcalc.com/app/5545072/text_files) _**app**_ is used here for demonstration. Two inputs are prepared in the inputs page; a text field with variable name: `input_0` and a file input with variable name: `input_1`. The inputs page is shown in the figure below:

<div style={{textAlign: 'center'}}>

![img alt](/docs/Getting-Started/textinput.png)

</div>

The code for the _**app**_ is show below. The text input by the user is saved in a variable `t`. In the line `newdata=base64.b64encode(t.encode()).decode()`: `t.encode()` converts the string object into a bytes object that can then be encoded in base64 using the `b64encode` function. The resulting bytes data is decoded using the `.decode()` method and the result is saved in the variable `newdata`. The file type and encoding is stored as a string in the variable `meta`. The final data is the concatenation of `meta` and `newdata`. The file data is returned using the `<a>` tag with the name: `myfile.txt`.

As for the input file data, it is extracted from the file, decoded using `.base64decode`, converted into a string using `.decode()` method, and returned as the value of `Text From File`.

```python
import base64

def main(inputs):
    #Extracting text from file
    [meta,data]=inputs['input_1'].split(";base64,")
    decoded_string_object=base64.b64decode(data).decode()

    #preparing input text for download
    t=inputs['input_0']
    newdata=base64.b64encode(t.encode()).decode()
    extension=".txt"
    meta="data:text/plain;base64,"
    encoded_data=meta+newdata

    return {"Text From File":decoded_string_object, "File":"<a href='" + encoded_data + "' download='myfile"+extension+"'>Download File</a>"}
```

The following lines are added to the output editor to display the text that was extracted from the input file and to provide the download link for the generated text file:

```
The text from the text file is: {{ outputs["Text From File"] }}
The file to download: {{ outputs.File }}
```
