---
sidebar_label: "Text Files"
sidebar_position: 3
---

# Text Files

<div style={{width: "100%", height: "600px", overflow: "hidden"}}>
<iframe src='https://mecsimcalc.com/app/5545072/text_files' style={{position:"relative", left:"-45px", top:"-48px"}} width="100%" height="600" title="MecSimCalc" frameborder="0"></iframe>
</div>

This app has two inputs: a text field with variable name: `input_0` and a file input with variable name: `input_1`. The **Accept** option of the [`FileInput`](../inputs/input-types) is set to `.txt` in order to limit the uploaded files to those with `.txt` extension. The inputs page is shown in the image below:

<div style={{textAlign: 'center'}}>

![img alt](/docs/files/ex_text_input.png)

</div>

The code for this _**app**_ is shown below. First, the text input by the user is saved to a variable `t`. For convenience, a utility function named `Text_File(string, filename)` is provided below, which returns a string that can embedded in the output page for the _**user**_ to download.

In the line `newdata = base64.b64encode(string.encode()).decode()`:

- `string.encode()` converts the string object into a bytes object that can then be encoded in base64 using the `b64encode` function.
- The resulting bytes data is decoded using the `.decode()` method and the result, which is a string, is saved in the variable `newdata`.

The file type and encoding is stored as a string in the variable `meta`. The final data is the concatenation of `meta` and `newdata`. The file data is returned using the `<a>` tag with the name: `filename.txt`, where `filename` is the name chosen when the utility routine is called.

As for the input file data, it is extracted from the file, decoded using `.base64decode`, converted into a string using `.decode()` method, and returned as the value of `Text From File`.

```python
import base64

def Text_File(string, filename):
    # This function generates the required file_data string for download.
    # You can call this function to generate a text file containing the "string" data
    # filename provides the name of the file when the user attempts to download it.
    newdata = base64.b64encode(string.encode()).decode()
    extension = ".txt"
    meta = "data:text/plain;base64,"
    encoded_data = meta + newdata
    return "<a href='" + encoded_data + "' download='" + filename + extension + "'>Download File</a>"

def main(inputs):
    # Extracting text from file
    [meta,data] = inputs['input_1'].split(";base64,")
    decoded_string_object = base64.b64decode(data).decode()

    # preparing input text for download
    t = inputs['input_0']
    File = Text_File(t,"MyFile")
    return {"Text From File":decoded_string_object, "File":File}
```

The following lines are added to the output editor to display the text that was extracted from the input file and to provide the download link for the generated text file:

```
The text from the text file is: {{ outputs["Text From File"] }}
The file to download: {{ outputs.File }}
```
