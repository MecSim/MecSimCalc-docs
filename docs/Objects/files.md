---
sidebar_label: "Files"
sidebar_position: 2
---

# Files

## File Input

As described in the [input types page](../Inputs/Input-Types), the _**developer**_ can chose `FileInput` when creating the inputs page of an _**app**_ allowing the _**user**_ to upload files whose data can be used within the _**app**_. When a file is imported, **MecSimCalc** platform converts its data into a [base64](https://stackoverflow.com/questions/3538021) string that contains the file data preceded by the data type and the encoding. For example, the resulting string of imported CSV and PNG files have the following respective forms:

```
"data:text/csv;base64,xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
"data:image/png;base64,xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

where `xxxxxxxxxxxxxxxxxxxxxxxxxxxxx` is the base64 string encoding of the file data.

As an example, the [File Import _**app**_](https://mecsimcalc.com/app/3705244/import_file) imports a file and displays the the file type and the corresponding base64 string. Part of the code for this _**app**_ is given below:

```python
def main(inputs):
    [meta, data] = inputs['file'].split(";base64,")
    metadata = meta + ";base64,"

    return {
        "MetaData":metadata,
        "Base64 String": data
    }
```

The two keys `MetaData` and `Base64 String` are then used in the output page to display their values:

```
File Type: {{outputs.MetaData}}
Base64 String: {{ outputs["Base64 String"] }}
```

## Decoding File Data

Once file data is uploaded, the _**developer**_ can use the `base64` python library to decode and manipulate the data. The [`base64.b64decode()`](https://docs.python.org/3/library/base64.html) function can be used to convert the data into a [`Bytes Object`](https://docs.python.org/3/library/stdtypes.html#bytes). As an example, the following code returns the file type, the base64 string representation of the data, and the decoded `Bytes` data.

```python
import base64

def main(inputs):
    # Decode the file data
    [meta, data] = inputs['file'].split(";base64,")
    metadata = meta + ";base64,"
    decodeddata=base64.b64decode(data)
    return {
        "MetaData":metadata,
        "Base64 String": data,
        "decoded String":decodeddata
    }
```

## File Output

In order to create and export a file for the _**user**_ to download, the _**developer**_ can use base64 encoding for data transfer. The function `base64.b64encode()` can convert `Bytes` data into base64 encoded bytes. Then, the `.decode()` method can prepare the bytes data for download. The file type data should be added to the beginning of the file and the resulting string can then be prepared for download using the [`<a>`](https://www.w3schools.com/tags/tag_a.asp) HTML tag. In this case, the `href` attribute can be set equal to the file data while the `download` attribute is set to the filename when the _**user**_ attempts to download the file.

The following code which is implemented in the [import file published demonstration](https://mecsimcalc.com/app/3705244/import_file) _**app**_ uses data obtained from a file uploaded by the _**user**_. The file extension is obtained using the `guess_extension` function available through the `mimetypes` library. The code creates two file data that are then available for download. The first file is prepared using the original data while the second file is prepared by first decoding the original data and then encoding it again. The extension of the second file in the download link is set to `.txt`.

```python
from mimetypes import guess_extension, guess_type
import base64

def main(inputs):
    #Split the file data into two components meta and data. The split function removes the string ";base64",
    [meta, data] = inputs['file'].split(";base64,")

    #add ";base64" to meta
    metadata = meta + ";base64,"
    #recreate the original file data by concatenating metadata and data
    OriginalFile=metadata+data

    #create a byte_object by decoding the file data
    byte_object=base64.b64decode(data)
    #create a string of the decoded byte_object using the .decode() method.
    decoded_string_object=0#byte_object.decode()
    #using base64, the byte object can be encoded resulting in a byte object. The ".decode()" method returns the equivalent string.
    base64_converted_string=base64.b64encode(byte_object).decode()
    #creates a new file by concatenating metadata and the base64_converted_string
    NewFile=metadata+base64_converted_string

    #guess the extension from meta
    file_extension1=guess_extension(guess_type(metadata)[0])
    # new file extension
    file_extension2=".txt"

    return {
        "MetaData":metadata,
        "Base64 String": data,
        "decoded Bytes":byte_object,
        "decoded String Object":decoded_string_object,
        "Download Original": "<a href='" +OriginalFile+ "' download='Original" + file_extension1 + "'>Download</a>",
        "Download New": "<a href='" +NewFile+ "' download='New" + file_extension2 + "'>Download</a>"
    }
```

Notice that the values of the `Download Original` and `Download New` dictionary keys are given in string format with the `<a>` HTML tag concatenated with the file data to generate a link that enables downloading. The output has the form:

```
To download original file: {{ outputs["Download Original"] }}
To download new file (with extension .txt): {{ outputs["Download New"] }}

File Type: {{outputs.MetaData}}
Base64 String: {{ outputs["Base64 String"] }}
Decoded Bytes Object: {{ outputs["decoded Bytes"] }}
```
